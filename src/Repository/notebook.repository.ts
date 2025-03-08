import { BaseOperations } from "../interfaces/base-operations"
import { Notebook } from "../Entities/Notebook"

export class NotebookRepository implements BaseOperations<Notebook>
{
  private notebooks: Notebook[] = [];
  
  findById(id: string): Notebook | undefined {
      return this.notebooks.find(not => not.getId() === id);
  }

  save(entity: Notebook): void {
      this.notebooks.push(entity);
  }

  delete(id: string): void {
      this.notebooks = this.notebooks.filter(not => not.getId() !== id);
  }
}