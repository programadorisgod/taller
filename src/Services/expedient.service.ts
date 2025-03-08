import { Document } from "../Entities/document";
import { Expedient } from "../Entities/expedient";
import { ExpedientOperations } from "../interfaces/expedient-operations";

export class ExpedientService {
  constructor(private readonly repository: ExpedientOperations) {}

  public findExpedientById(expedientId: string): Expedient | undefined {
    //Buscar en la lista de expedientes del indice digital.
    return undefined;
  }

  public addDocumentToExpedient(expedientId: string, document: Document): void {
    const expedient = this.findExpedientById(expedientId);

    if (!expedient) {
      throw new Error("expedient not found");
    }

    this.repository.addDocumentToExpedient(expedient, document);
  }

  public removeDocumentFromExpedient(
    expedientId: string,
    documentId: string
  ): void {
    const expedient = this.findExpedientById(expedientId);
    if (!expedient) {
      throw new Error("expedient not found");
    }
    this.repository.removeDocumentFromExpedient(expedientId, documentId);
  }

  public addProceduralPartToExpedient(
    expedientId: string,
    proceduralPart: ProceduralPart,
    proceduralType: String
  ): void {
    const expedient = this.findExpedientById(expedientId);
    if (!expedient) {
      throw new Error("expedient not found");
    }
    this.repository.addProceduralPartToExpedient(
      expedientId,
      proceduralPart,
      proceduralType
    );
  }

  public removeProceduralPartFromExpedient(
    expedientId: string,
    proceduralPartId: string
  ): void {}

  public getDocumentsFromExpedient(expedientId: string): Document[] {
    //Aquí igual, buscar en la lista de indice digital y devolver el expedients.getDocumets()
  }

  public getProceduralPartsFromExpedient(
    expedientId: string
  ): ProceduralPart[] {
    //Aquí igual,
  }
}
