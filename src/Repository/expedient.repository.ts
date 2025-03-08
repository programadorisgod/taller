import { Document } from "../Entities/document";
import { Expedient } from "../Entities/expedient";
import { ExpedientOperations } from "../interfaces/expedient-operations";

export class ExpedientRepository implements ExpedientOperations {
  findDocumentById(
    entity: Expedient,
    documentId: string
  ): Document | undefined {
    return entity
      .getDocuments()
      .find((document: Document) => document.getId() === documentId);
  }

  addDocumentToExpedient(entity: Expedient, document: Document): void {
    entity.setDocument(document);
  }
  removeDocumentFromExpedient(expedientId: String, documentId: String): void {
    throw new Error("Method not implemented.");
  }
  addProceduralPartToExpedient(
    expedientId: String,
    proceduralPart: ProceduralPart,
    proceduralType: String
  ): void {
    throw new Error("Method not implemented.");
  }
  removeProceduralPartFromExpedient(
    expedientId: String,
    proceduralPartId: String
  ): void {
    throw new Error("Method not implemented.");
  }
  getDocumentsFromExpedient(expedientId: String): Document[] {
    throw new Error("Method not implemented.");
  }
  getProceduralPartsFromExpedient(expedientId: String): ProceduralPart[] {
    throw new Error("Method not implemented.");
  }
}
