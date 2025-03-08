import { Document } from "../Entities/document";
import { Expedient } from "../Entities/expedient";

export interface ExpedientOperations {
  addDocument(entity: Expedient, document: Document): void;
  removeDocument(expedientId: String, documentId: String): void;
  addProceduralPart(
    expedientId: String,
    proceduralPart: ProceduralPart,
    proceduralType: String
  ): void;
  removeProceduralPart(expedientId: String, proceduralPartId: String): void;
  getDocuments(expedientId: String): Document[];
  getProceduralParts(expedientId: String): ProceduralPart[];
}
