
import { DigitalIndex } from "../Entities/DigitalIndex";
import { Expedient } from "../Entities/expedient";
import { DigitalIndexOperations } from "../interfaces/digitalIndex-operations";

export class DigitalIndexRepository implements DigitalIndexOperations<DigitalIndex>{
  private digitalIndexs: DigitalIndex[] = []
  private expedients: Expedient[] = []

  findById(id: string): DigitalIndex | undefined {
    return this.digitalIndexs.find((di) => di.getExpedients())
  }

  save(entity: DigitalIndex): void {
    this.digitalIndexs.push(entity);
  }

  delete(id: string): void {
    this.digitalIndexs.filter((di) => di.getExpedients())
  }
    

  update(id: string, entityProps: DigitalIndex): void {
      const index = this.digitalIndexs.findIndex((di) => di.getExpedients().findIndex((exp) => exp.getId() === id))

      if(index !== -1){
        this.digitalIndexs[index] = new DigitalIndex(entityProps.getExpedients());
      }
  }

  removeExpedientFromIndex(id: String): void {
    this.digitalIndexs = this.digitalIndexs.filter((di) => di.getExpedients().find((exp) => exp.getId() !== id));
  }

  searchExpedient(id: String): Expedient | undefined {
    return this.expedients.find((exp: Expedient) => exp.getId() === id)
  }

  indexExpedient(expedient: Expedient): void {
    if (this.digitalIndexs.length === 0) {
        this.digitalIndexs.push(new DigitalIndex([expedient]));
    } else {
        this.digitalIndexs[0].setExpedients(expedient);
    }
  }


}