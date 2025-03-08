import { Document } from "../Entities/document";
import { DocumentCategory } from "../Entities/documentCategory";
import { Notebook } from "../Entities/Notebook";

export interface ExpedientProps {
  id: string;
  department: string;
  city: string;
  judicialOffice: string;
  documentCategory: DocumentCategory;
  defendant: ProceduralPart;
  plaintiff: ProceduralPart;
  documents: Document[];
  notebooks: Notebook[];
  hasPhysicalFile: boolean;
}
