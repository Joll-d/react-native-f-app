import IWorkHistoryItem from "../../domain/entities/IWorkHistoryItem";

const fakeDB: IWorkHistoryItem[] = [
    {
        id: 1,
        companyName: 'Company1',
        position: 'Position1',
        startDate: new Date(2022,8,15),
        endDate: new Date(2023,8,15),
    },
];

export default fakeDB;
