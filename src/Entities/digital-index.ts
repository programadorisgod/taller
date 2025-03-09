import { Expedient } from "./expedient";

export class DigitalIndex {
  private expedients: Expedient[];

  constructor(expedients: Expedient[]) {
    this.expedients = expedients;
  }

  public getExpedients(): Expedient[] {
    return this.expedients;
  }

  public setExpedient(expedient: Expedient): void {
    this.expedients.push(expedient);
  }

  public setExpedients(expedients: Expedient[]): void {
    this.expedients = expedients;
  }

  public toString(): string {
    return `DigitalIndex {
      expedients: [${this.expedients.map((exp) => exp.toString()).join(", ")}]
    }`;
  }
}
