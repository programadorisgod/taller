import { Document } from "../Entities/document";
import { Expedient } from "../Entities/expedient";
import { BaseOperations } from "../interfaces/base-operations";
import { ExpedientOperations } from "../interfaces/expedient-operations";

export class ExpedientService implements BaseOperations<Expedient> {
  constructor(
    private readonly repository: BaseOperations<Expedient> & ExpedientOperations
  ) {}

  public findById(id: string): Expedient | undefined {
    return this.repository.findById(id);
  }

  public save(entity: Expedient): void {
    this.repository.save(entity);
  }

  public delete(id: string): void {
    if (!this.findById(id)) {
      throw new Error("expedient not found");
    }
    this.repository.delete(id);
  }

  public addDocumentToExpedient(expedientId: string, document: Document): void {
    const expedient = this.findById(expedientId);
    if (!expedient) {
      throw new Error("expedient not found");
    }
    this.repository.addDocument(expedient, document);
  }

  public removeDocumentFromExpedient(
    expedientId: string,
    documentId: string
  ): void {
    const expedient = this.findById(expedientId);
    if (!expedient) {
      throw new Error("expedient not found");
    }
    this.repository.removeDocument(expedientId, documentId);
  }

  public addProceduralPartToExpedient(
    expedientId: string,
    proceduralPart: ProceduralPart,
    proceduralType: String
  ): void {
    const expedient = this.findById(expedientId);
    if (!expedient) {
      throw new Error("expedient not found");
    }
    this.repository.addProceduralPart(
      expedientId,
      proceduralPart,
      proceduralType
    );
  }

  public removeProceduralPartFromExpedient(
    expedientId: string,
    proceduralPartId: string
  ): void {}

  public getDocumentsFromExpedient(expedientId: string): Document[] {}

  public getProceduralPartsFromExpedient(
    expedientId: string
  ): ProceduralPart[] {}
}
