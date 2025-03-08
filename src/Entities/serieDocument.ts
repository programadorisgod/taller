import { DocumentCategory } from "./documentCategory";

export class SerieDocument extends DocumentCategory {
  constructor(code: string, name: string) {
    super(code, name);
  }
}
