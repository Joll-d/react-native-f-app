import IWorkHistoryItem from "../entities/IWorkHistoryItem";

interface IWorkHistoryRepository {
    getWorkHistory(): Promise<IWorkHistoryItem[]>;
}

export default IWorkHistoryRepository;
