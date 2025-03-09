import { Document } from "../Entities/document";
import { Expedient } from "../Entities/expedient";
import { ProceduralParty } from "../Entities/ProceduralParty";
import { ProceduralType } from "../Enums/procedural-type";
import { ExpedientOperations } from "../interfaces/expedient-operations";
import { DigitalIndexRepository } from "../Repository/digitalIndex.repository";

export class ExpedientService {
  constructor(
    private readonly expedientRepository: ExpedientOperations,
    private readonly indexRepository: DigitalIndexRepository
  ) {}

  public findExpedientById(expedientId: string): Expedient | undefined {
    const digitalIndex = this.indexRepository.findById(expedientId);
    return digitalIndex?.getExpedients().find((expedient) => expedient.getId() === expedientId);
  }

  public addDocumentToExpedient(expedientId: string, document: Document): void {
    const expedient = this.findExpedientById(expedientId);

    if (!expedient) {
      throw new Error("expedient not found");
    }

    this.expedientRepository.addDocumentToExpedient(expedient, document);
  }

  public removeDocumentFromExpedient(
    expedientId: string,
    documentId: string
  ): void {
    const expedient = this.findExpedientById(expedientId);
    if (!expedient) {
      throw new Error("expedient not found");
    }
    this.expedientRepository.removeDocumentFromExpedient(expedient, documentId);
  }

  public addProceduralPartToExpedient(
    expedientId: string,
    proceduralPart: ProceduralParty,
    proceduralType: ProceduralType
  ): void {
    const expedient = this.findExpedientById(expedientId);
    if (!expedient) {
      throw new Error("expedient not found");
    }
    this.expedientRepository.addProceduralPartToExpedient(
      expedient,
      proceduralPart,
      proceduralType
    );
  }

  public getDocumentsFromExpedient(expedientId: string): Document[] {
    const expedient = this.findExpedientById(expedientId);
    if (!expedient) {
      throw new Error("expedient not found");
    }
    return this.expedientRepository.getDocumentsFromExpedient(expedient);
  }

  public getProceduralPartsFromExpedient(
    expedientId: string,
    proceduralType: ProceduralType
  ): ProceduralParty {
    const expedient = this.findExpedientById(expedientId);
    if (!expedient) {
      throw new Error("expedient not found");
    }
    return this.expedientRepository.getProceduralPartsFromExpedient(
      expedient,
      proceduralType
    );
  }
}
