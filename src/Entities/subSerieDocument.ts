import { DocumentCategory } from "./documentCategory";

export class SubSerieDocument extends DocumentCategory {
  private documentTypes: string[];

  constructor(code: string, name: string) {
    super(code, name);
  }
}
