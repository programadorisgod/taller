import { Document } from "../Entities/document";
import { Expedient } from "../Entities/expedient";
import { ProceduralParty } from "../Entities/ProceduralParty";
import { ProceduralType } from "../Enums/procedural-type";

export interface ExpedientOperations {
  findDocumentById(entity: Expedient, documentId: string): Document | undefined;
  addDocumentToExpedient(entity: Expedient, document: Document): void;
  removeDocumentFromExpedient(entity: Expedient, documentId: String): void;
  addProceduralPartToExpedient(
    entity: Expedient,
    proceduralPart: ProceduralParty,
    proceduralType: ProceduralType
  ): void;
  getDocumentsFromExpedient(entity: Expedient): Document[];
  getProceduralPartsFromExpedient(
    entity: Expedient,
    proceduralType: ProceduralType
  ): ProceduralParty;
}
