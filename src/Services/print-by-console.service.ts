import { Print } from "../interfaces/print-service";

export class PrintByConsole<T> implements Print<T> {
  print(entity: T): void {
    console.log(entity?.toString());
  }
}
