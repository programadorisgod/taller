import { existsSync } from "node:fs";

export class FileOperations {
  public static verifyExistPath(imagePath: string): boolean {
    console.log(imagePath);

    if (existsSync(imagePath)) return true;
    return false;
  }
}
