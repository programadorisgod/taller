import { Expedient } from "../Entities/expedient";
import { Print } from "../interfaces/print-service";
import { GenerateExcel } from "../utils/generate-excel";

export class PrintExcelExpedient<T extends Expedient> implements Print<T> {
  print(entity: Expedient): void {
    GenerateExcel.createExcel(entity);
  }
}
