import { DocumentFormat } from "../Enums/document-format";
import { DocumentOrigin } from "../Enums/document-origin";
import { DocumentProps } from "../interfaces/document-props";
import { Notebook } from "./Notebook";

export class Document {
  private id: string;
  private name: string;
  private creationDate: Date;
  private incorporationDate: Date;
  private order: number;
  private numberOfPages: number;
  private startPage: number;
  private endPage: number;
  private format: DocumentFormat;
  private size: number;
  private origin: DocumentOrigin;
  private notebook: Notebook;
  private notes: string;

  constructor(
    id: string,
    name: string,
    creationDate: Date,
    incorporationDate: Date,
    order: number,
    numberOfPages: number,
    startPage: number,
    endPage: number,
    format: DocumentFormat,
    size: number,
    origin: DocumentOrigin,
    notebook: Notebook,
    notes: string
  ) {
    const props: DocumentProps = {
      id,
      name,
      creationDate,
      incorporationDate,
      order,
      numberOfPages,
      startPage,
      endPage,
      format,
      size,
      origin,
      notebook,
      notes,
    };

    if (!this.validateProperties(props)) {
      throw new Error("Invalid properties");
    }

    this.id = id;
    this.name = name;
    this.creationDate = creationDate;
    this.incorporationDate = incorporationDate;
    this.order = order;
    this.numberOfPages = numberOfPages;
    this.startPage = startPage;
    this.endPage = endPage;
    this.format = format;
    this.size = size;
    this.origin = origin;
    this.notebook = notebook;
    this.notes = notes;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getCreationDate(): Date {
    return this.creationDate;
  }

  public setCreationDate(creationDate: Date): void {
    this.creationDate = creationDate;
  }

  public getIncorporationDate(): Date {
    return this.incorporationDate;
  }

  public setIncorporationDate(incorporationDate: Date): void {
    this.incorporationDate = incorporationDate;
  }

  public getOrder(): number {
    return this.order;
  }

  public setOrder(order: number): void {
    this.order = order;
  }

  public getNumberOfPages(): number {
    return this.numberOfPages;
  }

  public setNumberOfPages(numberOfPages: number): void {
    this.numberOfPages = numberOfPages;
  }

  public getStartPage(): number {
    return this.startPage;
  }

  public setStartPage(startPage: number): void {
    this.startPage = startPage;
  }

  public getEndPage(): number {
    return this.endPage;
  }

  public setEndPage(endPage: number): void {
    this.endPage = endPage;
  }

  public getFormat(): DocumentFormat {
    return this.format;
  }

  public setFormat(format: DocumentFormat): void {
    this.format = format;
  }

  public getSize(): number {
    return this.size;
  }

  public setSize(size: number): void {
    this.size = size;
  }

  public getOrigin(): DocumentOrigin {
    return this.origin;
  }

  public setOrigin(origin: DocumentOrigin): void {
    this.origin = origin;
  }

  public getNotebook(): Notebook {
    return this.notebook;
  }

  public setNotebook(notebook: Notebook): void {
    this.notebook = notebook;
  }

  public getNotes(): string {
    return this.notes;
  }

  public setNotes(notes: string): void {
    this.notes = notes;
  }

  private validateProperties(props: DocumentProps): boolean {
    const requiredFields: (keyof DocumentProps)[] = [
      "id",
      "name",
      "creationDate",
      "incorporationDate",
      "format",
      "origin",
      "notebook",
    ];

    const hasInvalidRequiredFields = requiredFields.some(
      (field: string) => !props[field]
    );

    if (hasInvalidRequiredFields) return false;

    const numericFields: (keyof DocumentProps)[] = [
      "order",
      "numberOfPages",
      "startPage",
      "endPage",
      "size",
    ];

    const hasNegativeValues = numericFields.some(
      (field: string) => (props[field] as number) < 0
    );

    if (hasNegativeValues) return false;

    return true;
  }
}
