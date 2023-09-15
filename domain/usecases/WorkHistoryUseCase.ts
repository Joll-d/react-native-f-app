import WorkHistoryRepository from '../repositories/WorkHistoryRepository';
import FakeWorkHistoryRepository from "../../data/repositories/FakeWorkHistoryRepository";
import WorkHistoryItem from "../entities/WorkHistoryItem";

const loadWorkHistory = async (): Promise<WorkHistoryItem[]> => {
    const workHistoryRepository: WorkHistoryRepository = new FakeWorkHistoryRepository();
    return workHistoryRepository.getWorkHistory();
};

export { loadWorkHistory };
