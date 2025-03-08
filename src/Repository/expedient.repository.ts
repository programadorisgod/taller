import { Document } from "../Entities/document";
import { Expedient } from "../Entities/expedient";
import { BaseOperations } from "../interfaces/base-operations";

export class ExpedientRepository implements BaseOperations<Expedient> {
  private expedients: Expedient[] = [];

  findById(id: string): Expedient | undefined {
    return this.expedients.find((exp) => exp.getId() === id);
  }

  save(entity: Expedient): void {
    this.expedients.push(entity);
  }

  delete(id: string): void {
    this.expedients = this.expedients.filter((exp) => exp.getId() !== id);
  }

  public addDocument(expedient: Expedient, document: Document): void {
    expedient.documents.push(document);
  }

  public removeDocument(expedientId: String, documentId: String): void {}

  public addProceduralPart(
    expedientId: String,
    proceduralPart: ProceduralPart,
    proceduralType: String
  ): void {}

  public removeProceduralPart(
    expedientId: String,
    proceduralPartId: String
  ): void {}

  public getDocuments(expedientId: String): Document[] {}

  public getProceduralParts(expedientId: String): ProceduralPart[] {}
}
