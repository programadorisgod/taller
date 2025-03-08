import { BaseOperations } from "../interfaces/base-operations";
import { Document } from "../Entities/document";
import { ExpedientOperations } from "../interfaces/expedient-operations";

export class DocumentService implements BaseOperations<Document> {
  constructor(
    private readonly documentRepository: BaseOperations<Document>,
    private readonly expedientRepository: ExpedientOperations
  ) {}

  update(id: string, entityProps: Partial<Document>): void {
    const document: Document | undefined = this.findById(id);

    if (!document) {
      throw new Error("Document not found");
    }

    const updatedDocument: Document = {
      ...document,
      ...entityProps,
    } as Document;

    this.documentRepository.update(id, updatedDocument);
  }

  public findById(id: string): Document | undefined {
    return this.documentRepository.findById(id);
  }
  public save(entity: Document): void {
    if (!this.validateDates(entity)) {
      throw new Error("invalid dates");
    }
    this.documentRepository.save(entity);
  }
  public delete(id: string): void {
    if (!this.findById(id)) {
      throw new Error("document not found");
    }
    this.documentRepository.delete(id);
  }

  public validateDates(entity): boolean {
    return true;
  }
}
