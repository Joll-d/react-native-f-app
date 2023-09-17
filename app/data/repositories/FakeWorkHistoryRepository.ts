import IWorkHistoryRepository from '../../domain/repositories/IWorkHistoryRepository';
import fakeDB from '../datasources/WorkHistoryFakeDatabase';
import IWorkHistoryItem from "../../domain/entities/IWorkHistoryItem";

class FakeWorkHistoryRepository implements IWorkHistoryRepository {
    async getWorkHistory() {
        return fakeDB;
    }

    async createWorkHistory(item: IWorkHistoryItem) {
        fakeDB.push(item);
        return item;
    }

    async updateWorkHistory(item: IWorkHistoryItem) {
        const index = fakeDB.findIndex((existingItem) => existingItem.id === item.id);
        if (index !== -1) {
            fakeDB[index] = item;
            return item;
        } else {
            throw new Error('Запись истории работы не найдена.');
        }
    }

    async deleteWorkHistory(id: number) {
        const index = fakeDB.findIndex((item) => item.id === id);
        if (index !== -1) {
            fakeDB.splice(index, 1);
        } else {
            throw new Error('Запись истории работы не найдена.');
        }
    }
}

export default FakeWorkHistoryRepository;
