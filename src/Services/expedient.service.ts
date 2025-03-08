import { Document } from "../Entities/document";
import { Expedient } from "../Entities/expedient";
import { ProceduralType } from "../Enums/procedural-type";
import { ExpedientOperations } from "../interfaces/expedient-operations";

export class ExpedientService {
  constructor(
    private readonly expedientRepository: ExpedientOperations,
    private readonly indexRepository: IndexRepository
  ) {}

  public findExpedientById(expedientId: string): Expedient | undefined {
    const expedient = this.indexRepository
      .getExpedients()
      .find((expedient: Expedient) => expedient.getId() === expedientId);
    return expedient;
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
    proceduralPart: ProceduralPart,
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

  public removeProceduralPartFromExpedient(
    expedientId: string,
    proceduralType: ProceduralType
  ): void {
    const expedient = this.findExpedientById(expedientId);
    if (!expedient) {
      throw new Error("expedient not found");
    }
    this.expedientRepository.removeProceduralPartFromExpedient(
      expedient,
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
  ): ProceduralPart {
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
