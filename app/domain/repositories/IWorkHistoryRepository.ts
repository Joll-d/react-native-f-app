import IWorkHistoryItem from "../entities/IWorkHistoryItem";

interface IWorkHistoryRepository {
    getWorkHistory(): Promise<IWorkHistoryItem[]>;
    createWorkHistory(item: IWorkHistoryItem): Promise<IWorkHistoryItem>;
    updateWorkHistory(item: IWorkHistoryItem): Promise<IWorkHistoryItem>;
    deleteWorkHistory(id: number): Promise<void>;
}

export default IWorkHistoryRepository;
