import { DocumentCategory } from "./document-category";

export class SerieDocument extends DocumentCategory {
  constructor(code: string, name: string) {
    super(code, name);
  }
}
