import { Document } from "../Entities/document";
import { DocumentCategory } from "../Entities/document-category";
import { Notebook } from "../Entities/notebook";
import { ProceduralParty } from "../Entities/procedural-party";

export interface ExpedientProps {
  id: string;
  department: string;
  city: string;
  judicialOffice: string;
  documentCategory: DocumentCategory;
  defendant: ProceduralParty;
  plaintiff: ProceduralParty;
  documents: Document[];
  notebooks: Notebook[];
  hasPhysicalFile: boolean;
}
