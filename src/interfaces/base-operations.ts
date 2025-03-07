export interface BaseOperations<T> {
    findById(id: string): T | undefined;
    save(entity: T): void;
    delete(id: string): void;
}