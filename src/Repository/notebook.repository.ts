import { BaseOperations } from "../interfaces/base-operations";
import { Notebook } from "../Entities/Notebook";

export class NotebookRepository implements BaseOperations<Notebook> {
  private notebooks: Notebook[] = [];

  update(id: string, entity: Notebook): void {
    const index = this.notebooks.findIndex(
      (not: Notebook) => not.getId() === id
    );

    if (index) {
      this.notebooks[index] = entity;
    }
  }

  findById(id: string): Notebook | undefined {
    return this.notebooks.find((not) => not.getId() === id);
  }

  save(entity: Notebook): void {
    this.notebooks.push(entity);
  }

  delete(id: string): void {
    this.notebooks = this.notebooks.filter((not) => not.getId() !== id);
  }
}
