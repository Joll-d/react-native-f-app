import IWorkHistoryRepository from '../repositories/IWorkHistoryRepository';
import FakeWorkHistoryRepository from "../../data/repositories/FakeWorkHistoryRepository";
import IWorkHistoryItem from "../entities/IWorkHistoryItem";

const workHistoryRepository: IWorkHistoryRepository = new FakeWorkHistoryRepository();

const loadWorkHistory = async (): Promise<IWorkHistoryItem[]> => {
    return workHistoryRepository.getWorkHistory();
};

const createWorkHistory = async (item: IWorkHistoryItem): Promise<IWorkHistoryItem> => {
    return workHistoryRepository.createWorkHistory(item);
};

const updateWorkHistory = async (item: IWorkHistoryItem): Promise<IWorkHistoryItem> => {
    return workHistoryRepository.updateWorkHistory(item);
};

const deleteWorkHistory = async (id: number): Promise<void> => {
    return workHistoryRepository.deleteWorkHistory(id);
};

export { loadWorkHistory, createWorkHistory, updateWorkHistory, deleteWorkHistory };
