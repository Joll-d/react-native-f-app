import WorkHistoryItem from "../entities/WorkHistoryItem";

interface WorkHistoryRepository {
    getWorkHistory(): Promise<WorkHistoryItem[]>;
}

export default WorkHistoryRepository;
