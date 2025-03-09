import { NotebookProps } from "../interfaces/notebook-props";

export class Notebook {
  private id: string;
  private description: string;

  constructor(props: NotebookProps) {
    if (!this.validateProperties(props)) {
      throw new Error("Invalid properties");
    }

    this.id = props.id;
    this.description = props.description;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public toString(): string {
    return `Notebook {
      id: ${this.id},
      description: ${this.description}
    }`;
  }

  private validateProperties(props: NotebookProps): boolean {
    if (!props.id || !props.description) {
      return false;
    }
    return true;
  }
}
