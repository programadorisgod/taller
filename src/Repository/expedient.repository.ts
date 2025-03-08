import { Document } from "../Entities/document";
import { Expedient } from "../Entities/expedient";
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
    proceduralPart: ProceduralPart,
    proceduralType: ProceduralType
  ): void {
    if (proceduralType === ProceduralType.A) {
      expedient.setDefendant(proceduralPart);
      return;
    }
    expedient.setPlaintiff(proceduralPart);
  }

  removeProceduralPartFromExpedient(
    expedient: Expedient,
    proceduralType: ProceduralType
  ): void {
    if (proceduralType === ProceduralType.A) {
      expedient.setDefendant(undefined);
      return;
    }
    expedient.setPlaintiff(undefined);
  }

  getDocumentsFromExpedient(expedient: Expedient): Document[] {
    return expedient.getDocuments();
  }

  getProceduralPartsFromExpedient(
    entity: Expedient,
    proceduralType: ProceduralType
  ): ProceduralPart {
    if (proceduralType === ProceduralType.A) {
      return entity.getDefendant();
    }
    return entity.getPlaintiff;
  }
}
