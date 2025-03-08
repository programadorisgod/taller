import { Notebook } from "../Entities/Notebook";
import { DocumentFormat } from "../Enums/document-format";
import { DocumentOrigin } from "../Enums/document-origin";

export interface DocumentProps {
    id: string;
    name: string;
    creationDate: Date;
    incorporationDate: Date;
    order: number;
    numberOfPages: number;
    startPage: number;
    endPage: number;
    format: DocumentFormat;
    size: number;
    origin: DocumentOrigin;
    notebook: Notebook;
    notes: string;
}
