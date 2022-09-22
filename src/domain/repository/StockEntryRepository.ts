import StockEntry from "../entity/StockEntry";

export default interface StockEntryRepository {
    save(StockEntry: StockEntry): Promise<void>;
    getAll(idItem: number): Promise<StockEntry[]>;
    clean(): Promise<void>;
}