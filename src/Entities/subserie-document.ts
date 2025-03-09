import { DocumentCategory } from "./document-category";

export class SubSerieDocument extends DocumentCategory {
  private documentTypes: string[];

  constructor(code: string, name: string) {
    super(code, name);
  }
}
