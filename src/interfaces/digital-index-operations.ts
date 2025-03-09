import { Expedient } from "../Entities/expedient";
import { BaseOperations } from "./base-operations";

export interface DigitalIndexOperations<T> extends BaseOperations<T> {
  indexExpedient(expedient: Expedient | undefined): void;
  removeExpedientFromIndex(id: String): void;
  searchExpedient(id: String): Expedient | undefined;
}
