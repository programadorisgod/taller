import { Document } from "../Entities/document";
import { Expedient } from "../Entities/expedient";
import { DocumentOperations } from "../interfaces/document-operations";

export class DocumentService {
  constructor(
    private readonly documentRepository: DocumentOperations,
    private readonly indexRepository: IndexRepository
  ) {}

  update(
    documentId: string,
    expedientId: string,
    entityProps: Partial<Document>
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

    const updatedDocument: Document = {
      ...document,
      ...entityProps,
    } as Document;

    this.documentRepository.update(documentId, expedient, updatedDocument);
  }

  public findById(
    documentId: string,
    expedientId: string
  ): Document | undefined {
    const expedient = this.indexRepository
      .getExpedients()
      .find((expedient: Expedient) => expedient.getId() === expedientId);

    if (!expedient) {
      throw new Error("expedient not found");
    }
    return this.documentRepository.findById(documentId, expedient);
  }

  public save(expedientId: string, document: Document): void {
    const expedient = this.indexRepository.searchExpedient(expedientId);
    if (!expedient) {
      throw new Error("expedient not found");
    }

    if (!this.validateDates(document)) {
      throw new Error("invalid dates");
    }
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

  public validateDates(entity): boolean {
    return true;
  }
}
