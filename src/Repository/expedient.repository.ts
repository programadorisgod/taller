import { Document } from "../Entities/document";
import { Expedient } from "../Entities/expedient";
import { ProceduralParty } from "../Entities/procedural-party";
import { ProceduralType } from "../Enums/procedural-type";
import { ExpedientOperations } from "../interfaces/expedient-operations";

export class ExpedientRepository implements ExpedientOperations {
  findDocumentById(
    expedient: Expedient,
    documentId: string
  ): Document | undefined {
    return expedient
      .getDocuments()
      .find((document: Document) => document.getId() === documentId);
  }

  addDocumentToExpedient(expedient: Expedient, document: Document): void {
    expedient.setDocument(document);
  }

  removeDocumentFromExpedient(expedient: Expedient, documentId: String): void {
    expedient.setDocuments(
      expedient
        .getDocuments()
        .filter((document: Document) => document.getId() !== documentId)
    );
  }

  addProceduralPartToExpedient(
    expedient: Expedient,
    proceduralPart: ProceduralParty,
    proceduralType: ProceduralType
  ): void {
    if (proceduralType === ProceduralType.A) {
      expedient.setDefendant(proceduralPart);
      return;
    }
    expedient.setPlaintiff(proceduralPart);
  }

  getDocumentsFromExpedient(expedient: Expedient): Document[] {
    return expedient.getDocuments();
  }

  getProceduralPartsFromExpedient(
    entity: Expedient,
    proceduralType: ProceduralType
  ): ProceduralParty {
    if (proceduralType === ProceduralType.A) {
      return entity.getDefendant();
    }
    return entity.getPlaintiff();
  }
}
