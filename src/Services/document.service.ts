import { BaseOperations } from "../interfaces/base-operations";

export class DocumentService implements BaseOperations<Document> {
    constructor(private readonly repository: BaseOperations<Document>) {}
    
    public findById(id: string): Document | undefined {
        return this.repository.findById(id);
    }
    public save(entity: Document): void {
        if (!this.validateDates(entity)) {
            throw new Error('invalid dates')
        }
        this.repository.save(entity);
    }
    public delete(id: string): void {
        if (!this.findById(id)) {
            throw new Error('document not found')
        }
        this.repository.delete(id);
    }

    public validateDates(entity): boolean {
        return true
    }
}