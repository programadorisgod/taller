import { Document } from "../Entities/document";
import { DocumentOperations } from "../interfaces/document-operations";
import { DocumentProps } from "../interfaces/document-props";
import { DigitalIndexRepository } from "../Repository/digital-index.repository";

export class DocumentService {
  constructor(
    private readonly documentRepository: DocumentOperations,
    private readonly indexRepository: DigitalIndexRepository
  ) {}

  update(
    documentId: string,
    expedientId: string,
    entityProps: Partial<DocumentProps>
  ): void {
    const document: Document | undefined = this.findById(
      documentId,
      expedientId
    );
    const expedient = this.indexRepository.searchExpedient(expedientId);

    if (!document) {
      throw new Error("Document not found");
    }

    if (!expedient) {
      throw new Error("Expedient not found");
    }
    const updatedDocument: Document = new Document(
      document.getId(),
      entityProps.name ?? document.getName(),
      entityProps.creationDate ?? document.getCreationDate(),
      entityProps.incorporationDate ?? document.getIncorporationDate(),
      entityProps.order ?? document.getOrder(),
      entityProps.numberOfPages ?? document.getNumberOfPages(),
      entityProps.startPage ?? document.getStartPage(),
      entityProps.endPage ?? document.getEndPage(),
      entityProps.format ?? document.getFormat(),
      entityProps.size ?? document.getSize(),
      entityProps.origin ?? document.getOrigin(),
      entityProps.notebook ?? document.getNotebook(),
      entityProps.notes ?? document.getNotes()
    );

    this.documentRepository.update(documentId, expedient, updatedDocument);
  }

  public findById(
    documentId: string,
    expedientId: string
  ): Document | undefined {
    const expedient = this.indexRepository.searchExpedient(expedientId);

    if (!expedient) {
      throw new Error("expedient not found");
    }
    return this.documentRepository.findById(documentId, expedient);
  }

  public save(expedientId: string, document: Document): void {
    const expedient = this.indexRepository.searchExpedient(expedientId);
    console.log(expedient, "BUSQUEDA");
    if (!expedient) {
      throw new Error("expedient not found");
    }

    // if (!this.validateDates(document)) {
    //   throw new Error("invalid dates");
    // }
    this.documentRepository.save(expedient, document);
  }

  public delete(documentId: string, expedientId: string): void {
    const expedient = this.indexRepository.searchExpedient(expedientId);
    if (!expedient) {
      throw new Error("expedient not found");
    }

    if (!this.findById(documentId, expedientId)) {
      throw new Error("document not found");
    }
    this.documentRepository.delete(documentId, expedient);
  }
}
