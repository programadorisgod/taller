import { Person } from "../Entities/person";
import { BaseOperations } from "../interfaces/base-operations";

export class PersonRepository implements BaseOperations<Person>{

  constructor(private readonly repositoty: BaseOperations<Person>){}

  findById(name: string): Person | undefined {
      return this.repositoty.findById(name)
  }

  save(entity: Person): void {
    if(!this.validateDates(entity)){
      throw new Error("Invalid Dates")
    }
      
    this.repositoty.save(entity)
  }

  delete(name: string): void {
      if(!this.findById(name)){
        throw new Error("Person not found")
      }
      this.repositoty.delete(name)
  }

  update(name: string, entityProps: Person): void {
      const person: Person | undefined = this.findById(name);

      if(!person){
        throw new Error("Person not found")
      }

      if(entityProps.getName || entityProps.getDocumentNumber || entityProps.getDocumentType){
        person.setName(entityProps.getName())
        person.setDocumentNumber(entityProps.getDocumentNumber())
        person.setDocumentType(entityProps.getDocumentType())
      }

      this.repositoty.update(name,person);
  }

  public validateDates(entity): boolean {
    return true;
  }
}