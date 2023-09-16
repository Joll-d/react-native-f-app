import IWorkHistoryRepository from '../repositories/IWorkHistoryRepository';
import FakeWorkHistoryRepository from "../../data/repositories/FakeWorkHistoryRepository";
import IWorkHistoryItem from "../entities/IWorkHistoryItem";

const loadWorkHistory = async (): Promise<IWorkHistoryItem[]> => {
    const workHistoryRepository: IWorkHistoryRepository = new FakeWorkHistoryRepository();
    return workHistoryRepository.getWorkHistory();
};

export { loadWorkHistory };
