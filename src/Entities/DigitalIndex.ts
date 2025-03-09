import { Expedient } from "./expedient"

export class DigitalIndex{
  private expedients: Expedient[]

  constructor(expedients: Expedient[]){
    this.expedients = expedients
  }

  public getExpedients(): Expedient[] {
    return this.expedients;
  }

  public setExpedients(expedient: Expedient): void {
    this.expedients.push(expedient);
  }
}