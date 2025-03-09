import { ProceduralParty } from "../Entities/procedural-party";
import { BaseOperations } from "../interfaces/base-operations";

export class ProceduralPartyRepository
  implements BaseOperations<ProceduralParty>
{
  private proceduralPartys: ProceduralParty[] = [];

  findById(name: string): ProceduralParty | undefined {
    return this.proceduralPartys.find((pp) => pp.getName() === name);
  }

  save(entity: ProceduralParty): void {
    this.proceduralPartys.push(entity);
  }

  delete(name: string): void {
    this.proceduralPartys.filter((pp) => pp.getName() !== name);
  }

  update(name: string, entity: ProceduralParty): void {
    const index = this.proceduralPartys.findIndex(
      (pp: ProceduralParty) => pp.getName() === name
    );

    if (index) {
      this.proceduralPartys[index] = entity;
    }
  }
}
