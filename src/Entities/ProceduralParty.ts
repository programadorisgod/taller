export class ProceduralParty {
  private name: string;

  constructor(name: string){
    if(!name){
      throw new Error("Invalid Properties")
    }

    this.name = name
  }

  public getName(): string{
    return this.name;
  }

  public setName(name: string){
    this.name = name
  }
}