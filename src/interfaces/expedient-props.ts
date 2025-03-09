import { Document } from "../Entities/document";
import { DocumentCategory } from "../Entities/documentCategory";
import { Notebook } from "../Entities/Notebook";
import { ProceduralParty } from "../Entities/ProceduralParty";

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
