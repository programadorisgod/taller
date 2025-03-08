import { BaseOperations } from "../interfaces/base-operations";
import { Document } from "../Entities/document";

export class DocumentRepository implements BaseOperations<Document> {
  private documents: Document[] = [];

  update(id: string, entity: Document): void {
    const documentIndex: number | undefined = this.documents.findIndex(
      (doc: Document) => doc.getId() === id
    );

    if (documentIndex) {
      this.documents[documentIndex] = entity;
    }
  }

  findById(id: string): Document | undefined {
    return this.documents.find((doc) => doc.getId() === id);
  }

  save(entity: Document): void {
    this.documents.push(entity);
  }

  delete(id: string): void {
    this.documents = this.documents.filter((doc) => doc.getId() !== id);
  }
}
