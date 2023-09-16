import IWorkHistoryRepository from '../../domain/repositories/IWorkHistoryRepository';
import fakeDB from '../datasources/WorkHistoryFakeDatabase';

class FakeWorkHistoryRepository implements IWorkHistoryRepository {
    async getWorkHistory() {
        return fakeDB;
    }
}

export default FakeWorkHistoryRepository;
