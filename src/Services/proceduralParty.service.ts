import { ProceduralParty } from "../Entities/ProceduralParty";
import { BaseOperations } from "../interfaces/base-operations";

export class ProceduralPartyRepository implements BaseOperations<ProceduralParty>{

  constructor(private readonly repository: BaseOperations<ProceduralParty>){}
  
  findById(name: string): ProceduralParty | undefined {
      return this.repository.findById(name)
  }

  save(entity: ProceduralParty): void {
    if(!this.validateDates(entity)){
      throw new Error("invalid dates")
    }
    this.repository.save(entity);
  }

  delete(name: string): void {
    if(!this.findById(name)){
      throw new Error("Procedural Party not found")
    }
    this.repository.delete(name)
  }

  update(name: string, entityProps: ProceduralParty): void {
      const proceduralParty: ProceduralParty | undefined = this.findById(name);

      if(!proceduralParty){
        throw new Error("Procedural Party not found");
      }

      if(entityProps.getName){
        proceduralParty.setName(entityProps.getName());
      }
  }

  public validateDates(entity): boolean {
    return true
  }
}