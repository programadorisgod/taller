import { Document } from "../Entities/document";
import { Expedient } from "../Entities/expedient";

export interface ExpedientOperations {
  findDocumentById(entity: Expedient, documentId: string): Document | undefined;
  addDocumentToExpedient(entity: Expedient, document: Document): void;
  removeDocumentFromExpedient(expedientId: String, documentId: String): void;
  addProceduralPartToExpedient(
    expedientId: String,
    proceduralPart: ProceduralPart,
    proceduralType: String
  ): void;
  removeProceduralPartFromExpedient(
    expedientId: String,
    proceduralPartId: String
  ): void;
  getDocumentsFromExpedient(expedientId: String): Document[];
  getProceduralPartsFromExpedient(expedientId: String): ProceduralPart[];
}
