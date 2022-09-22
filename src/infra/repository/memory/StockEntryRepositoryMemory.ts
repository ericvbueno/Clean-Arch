import StockEntry from "../../../domain/entity/StockEntry";
import StockEntryRepository from "../../../domain/repository/StockEntryRepository";

export default class StockEntryRepositoryMemory implements StockEntryRepository {
    stockEntries:  StockEntry[];

    constructor () {
        this.stockEntries = [];
    }

    async save(StockEntry: StockEntry): Promise<void> {
        this.stockEntries.push(StockEntry);
    }

    async getAll(idItem: number): Promise<StockEntry[]> {
        return this.stockEntries.filter(StockEntry => StockEntry.idItem === idItem);
    }

    async clean(): Promise<void> {
        this.stockEntries = [];
    }
}