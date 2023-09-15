import WorkHistoryRepository from '../repositories/WorkHistoryRepository';
import FakeWorkHistoryRepository from "../../data/repositories/FakeWorkHistoryRepository";
import IWorkHistoryItem from "../entities/IWorkHistoryItem";

const loadWorkHistory = async (): Promise<IWorkHistoryItem[]> => {
    const workHistoryRepository: WorkHistoryRepository = new FakeWorkHistoryRepository();
    return workHistoryRepository.getWorkHistory();
};

export { loadWorkHistory };
