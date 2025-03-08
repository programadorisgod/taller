export abstract class DocumentCategory {
  private code: string;
  private name: string;

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }

  public getCode(): string {
    return this.code;
  }

  public setCode(code: string): void {
    this.code = code;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}
