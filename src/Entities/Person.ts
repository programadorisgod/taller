import { ProceduralParty } from "./ProceduralParty";

export class Person extends ProceduralParty{
  private documentType: string;
  private documentNumber: string;

  constructor(name: string, documentType: string, documentNumber: string){
    if(!documentNumber || !documentType || !name){
      throw new Error("Invalid Properties")
    }
    super(name);
    this.documentNumber = documentNumber
    this.documentType = documentType
  }

  public getDocumentType(): string {
    return this.documentType
  }

  public setDocumentType(documentType: string){
    this.documentType = documentType
  }

  public getDocumentNumber(): string {
    return this.documentNumber
  }

  public setDocumentNumber(documentNumber: string){
    this.documentNumber = documentNumber
  }
}