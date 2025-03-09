import { BaseOperations } from "../interfaces/base-operations";
import { Notebook } from "../Entities/Notebook";

export class NotebookService implements BaseOperations<Notebook> {
  constructor(private readonly repository: BaseOperations<Notebook>) {}

  update(id: string, entityProps: Notebook): void {
    const notebook: Notebook | undefined = this.findById(id);

    if (!notebook) {
      throw new Error("Notebook not found");
    }

    if (entityProps.getDescription) {
      notebook.setDescription(entityProps.getDescription());
    }

    this.repository.update(id, notebook);
  }

  findById(id: string): Notebook | undefined {
    return this.repository.findById(id);
  }

  save(entity: Notebook): void {
    if (!this.validateDates(entity)) {
      throw new Error("invalid dates");
    }
    this.repository.save(entity);
  }

  delete(id: string): void {
    if (!this.findById(id)) {
      throw new Error("Notebook not found");
    }
    this.repository.delete(id);
  }

  public validateDates(entity): boolean {
    return true;
  }
}
