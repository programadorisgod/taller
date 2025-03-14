import { ExpedientProps } from "../interfaces/expedient-props";
import { Document } from "./document";
import { DocumentCategory } from "./document-category";
import { Notebook } from "./notebook";
import { ProceduralParty } from "./procedural-party";
export class Expedient {
  private id: string;
  private department: string;
  private city: string;
  private judicialOffice: string;
  private documentCategory: DocumentCategory;
  private defendant: ProceduralParty;
  private plaintiff: ProceduralParty;
  private documents: Document[];
  private notebooks: Notebook[];
  private hasPhysicalFile: boolean;

  constructor(props: ExpedientProps) {
    if (!this.validateProperties(props)) {
      throw new Error("Invalid properties");
    }

    this.id = props.id;
    this.department = props.department;
    this.city = props.city;
    this.judicialOffice = props.judicialOffice;
    this.documentCategory = props.documentCategory;
    this.defendant = props.defendant;
    this.plaintiff = props.plaintiff;
    this.documents = props.documents || [];
    this.notebooks = props.notebooks || [];
    this.hasPhysicalFile = props.hasPhysicalFile || false;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getDepartment(): string {
    return this.department;
  }

  public setDepartment(department: string): void {
    this.department = department;
  }

  public getCity(): string {
    return this.city;
  }

  public setCity(city: string): void {
    this.city = city;
  }

  public getJudicialOffice(): string {
    return this.judicialOffice;
  }

  public setJudicialOffice(judicialOffice: string): void {
    this.judicialOffice = judicialOffice;
  }

  public getDocumentCategory(): DocumentCategory {
    return this.documentCategory;
  }

  public setDocumentCategory(documentCategory: DocumentCategory): void {
    this.documentCategory = documentCategory;
  }

  public getDefendant(): ProceduralParty {
    return this.defendant;
  }

  public setDefendant(defendant: ProceduralParty): void {
    this.defendant = defendant;
  }

  public getPlaintiff(): ProceduralParty {
    return this.plaintiff;
  }

  public setPlaintiff(plaintiff: ProceduralParty): void {
    this.plaintiff = plaintiff;
  }

  public getDocuments(): Document[] {
    return this.documents;
  }

  public setDocument(document: Document): void {
    this.documents.push(document);
  }

  public setDocuments(documents: Document[]): void {
    this.documents = documents;
  }

  public getNotebooks(): Notebook[] {
    return this.notebooks;
  }

  public setNotebooks(notebooks: Notebook[]): void {
    this.notebooks = notebooks;
  }

  public getHasPhysicalFile(): boolean {
    return this.hasPhysicalFile;
  }

  public setHasPhysicalFile(hasPhysicalFile: boolean): void {
    this.hasPhysicalFile = hasPhysicalFile;
  }

  public uptdateDocument(index: number, document: Document): void {
    this.documents[index] = document;
  }
  public toString(): string {
    return `Expedient {
      id: ${this.id},
      department: ${this.department},
      city: ${this.city},
      judicialOffice: ${this.judicialOffice},
      documentCategory: ${this.documentCategory.toString()},
      defendant: ${this.defendant.toString()},
      plaintiff: ${this.plaintiff.toString()},
      documents: [${this.documents.map((doc) => doc.toString()).join(", ")}],
      notebooks: [${this.notebooks.map((nb) => nb.toString()).join(", ")}],
      hasPhysicalFile: ${this.hasPhysicalFile}
    }`;
  }

  private validateProperties(props: ExpedientProps): boolean {
    if (
      !props.id ||
      !props.department ||
      !props.city ||
      !props.judicialOffice ||
      !props.documentCategory ||
      !props.defendant ||
      !props.plaintiff
    ) {
      return false;
    }
    return true;
  }
}
