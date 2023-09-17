import IWorkHistoryRepository from '../../domain/repositories/IWorkHistoryRepository';
import fakeDB from '../datasources/WorkHistoryFakeDatabase';
import IWorkHistoryItem from "../../domain/entities/IWorkHistoryItem";

class FakeWorkHistoryRepository implements IWorkHistoryRepository {
    async getWorkHistory() {
        return fakeDB;
    }

    async createWorkHistory(item: IWorkHistoryItem) {
        fakeDB.push(item); // Добавление новой записи в фейковую БД
        return item;
    }

    async updateWorkHistory(item: IWorkHistoryItem) {
        const index = fakeDB.findIndex((existingItem) => existingItem.id === item.id); // Замените id на уникальное поле, если таковое есть
        if (index !== -1) {
            fakeDB[index] = item; // Обновление существующей записи в фейковой БД
            return item;
        } else {
            throw new Error('Запись истории работы не найдена.');
        }
    }

    async deleteWorkHistory(id: number) {
        const index = fakeDB.findIndex((item) => item.id === id); // Замените id на уникальное поле, если таковое есть
        if (index !== -1) {
            fakeDB.splice(index, 1); // Удаление записи из фейковой БД
        } else {
            throw new Error('Запись истории работы не найдена.');
        }
    }
}

export default FakeWorkHistoryRepository;
