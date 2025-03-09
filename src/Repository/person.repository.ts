import { Person } from "../Entities/Person";
import { BaseOperations } from "../interfaces/base-operations";

export class PersonRepository implements BaseOperations<Person>{

  private persons: Person[] = []

  findById(name: string): Person | undefined {
      return this.persons.find((person) => person.getName() === name)
  }

  save(entity: Person): void {
      this.persons.push(entity)
  }

  delete(name: string): void {
      this.persons = this.persons.filter((person) => person.getName() !== name)
  }

  update(name: string, entity: Person): void {
      const index = this.persons.findIndex((person:Person) => person.getName() === name)

      if(index){
        this.persons[index] = entity
      }
  }
}