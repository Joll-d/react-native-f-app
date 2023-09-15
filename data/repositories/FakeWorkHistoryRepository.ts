import WorkHistoryRepository from '../../domain/repositories/WorkHistoryRepository';
import fakeDB from '../datasources/WorkHistoryFakeDatabase';

class FakeWorkHistoryRepository implements WorkHistoryRepository {
    async getWorkHistory() {
        return fakeDB;
    }
}

export default FakeWorkHistoryRepository;
