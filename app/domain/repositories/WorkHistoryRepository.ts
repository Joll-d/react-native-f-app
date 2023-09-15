import IWorkHistoryItem from "../entities/IWorkHistoryItem";

interface WorkHistoryRepository {
    getWorkHistory(): Promise<IWorkHistoryItem[]>;
}

export default WorkHistoryRepository;
