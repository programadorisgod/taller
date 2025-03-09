import { DigitalIndex } from "../Entities/digital-index";
import { Expedient } from "../Entities/expedient";
import { DigitalIndexOperations } from "../interfaces/digital-index-operations";

export class DigitalIndexRepository
  implements DigitalIndexOperations<DigitalIndex>
{
  private digitalIndexs: DigitalIndex[] = [];

  findById(id: string): DigitalIndex | undefined {
    return this.digitalIndexs[parseInt(id)];
  }

  save(entity: DigitalIndex): void {
    this.digitalIndexs.push(entity);
  }

  delete(id: string): void {
    this.digitalIndexs.filter((di) => di.getExpedients());
  }

  update(id: string, entityProps: DigitalIndex): void {
    const index = this.digitalIndexs.findIndex((di) =>
      di.getExpedients().findIndex((exp) => exp.getId() === id)
    );

    if (index !== -1) {
      this.digitalIndexs[index] = new DigitalIndex(entityProps.getExpedients());
    }
  }

  removeExpedientFromIndex(id: String): void {
    const updatedExpedients = this.digitalIndexs[0]
      .getExpedients()
      .filter((exp) => exp.getId() !== id);

    this.digitalIndexs[0].setExpedients(updatedExpedients);
  }

  searchExpedient(id: String): Expedient | undefined {
    return this.digitalIndexs[0]
      .getExpedients()
      .find((exp: Expedient) => exp.getId() === id);
  }

  indexExpedient(expedient: Expedient): void {
    if (this.digitalIndexs.length === 0) {
      this.digitalIndexs.push(new DigitalIndex([expedient]));
      return;
    }

    this.digitalIndexs[0].setExpedient(expedient);
  }
}
