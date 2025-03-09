import { DigitalIndex } from "../Entities/digital-index";
import { Expedient } from "../Entities/expedient";
import { DigitalIndexRepository } from "../Repository/digital-index.repository";

export class digitalIndexService {
  constructor(
    private readonly digitalIndexRepository: DigitalIndexRepository
  ) {}

  find(id: string): DigitalIndex {
    const digitalIndex = this.digitalIndexRepository.findById(id);
    if (!digitalIndex) {
      throw new Error("Digital Index not found");
    }
    return digitalIndex;
  }

  save(entity: DigitalIndex) {
    if (!this.validateDates(entity)) {
      throw new Error("invalid dates");
    }
    this.digitalIndexRepository.save(entity);
  }

  delete(id: string) {
    this.digitalIndexRepository.delete(id);
  }

  update(id: string, entityProps: DigitalIndex): void {
    const digitalIndexUpdated = this.digitalIndexRepository.update(
      id,
      entityProps
    );
  }

  removeExpedientFromIndex(id: string) {
    this.digitalIndexRepository.removeExpedientFromIndex(id);
  }

  searchExpedient(id: string) {
    const expedient = this.digitalIndexRepository.searchExpedient(id);
    if (!expedient) {
      throw new Error("Expedient not found");
    }
  }

  indexExpedient(expedient: Expedient) {
    this.digitalIndexRepository.indexExpedient(expedient);
  }

  public validateDates(entity): boolean {
    return true;
  }
}
