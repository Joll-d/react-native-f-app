import IWorkHistoryItem from "../../domain/entities/IWorkHistoryItem";

const fakeDB: IWorkHistoryItem[] = [
    {
        companyName: 'Company1',
        position: 'Position1',
        startDate: new Date(2022,8,15),
        endDate: new Date(2023,8,15),
    },
    {
        companyName: 'Company2',
        position: 'Position2',
        startDate: new Date(2022,8,15),
        endDate: new Date(2023,8,15),
    },
];

export default fakeDB;