import { Document } from "../Entities/document";
import { Expedient } from "../Entities/expedient";

export interface DocumentOperations {
  update(documentId: string, expedient: Expedient, entity: Document): void;
  findById(documentId: string, expedient: Expedient): Document | undefined;
  save(expedient: Expedient, entity: Document): void;
  delete(documentId: string, expedient: Expedient): void;
}
