import { Document } from "../Entities/document";
import { DocumentOperations } from "../interfaces/document-operations";
import { Expedient } from "../Entities/expedient";

export class DocumentRepository implements DocumentOperations {
  update(documentId: string, expedient: Expedient, document: Document): void {
    const documentIndex: number | undefined = expedient
      .getDocuments()
      .findIndex((doc: Document) => doc.getId() === documentId);

    if (documentIndex) {
      expedient.uptdateDocument(documentIndex, document);
    }
  }

  findById(documentId: string, expedient: Expedient): Document | undefined {
    return expedient
      .getDocuments()
      .find((doc: Document) => doc.getId() === documentId);
  }

  save(expedient: Expedient, document: Document): void {
    expedient.setDocument(document);
  }

  delete(documentId: string, expedient: Expedient): void {
    expedient.setDocuments(
      expedient
        .getDocuments()
        .filter((doc: Document) => doc.getId() !== documentId)
    );
  }
}
