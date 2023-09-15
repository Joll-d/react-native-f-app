import React from 'react';
import WorkHistoryListItem from './WorkHistoryListItem';
import IWorkHistoryItem from "../../domain/entities/IWorkHistoryItem";

const WorkHistoryList: React.FC<{workHistory: IWorkHistoryItem[]; }> = ({workHistory}) => {
    return (
        <>
            {workHistory.map((item, index) => (
                <WorkHistoryListItem
                    key={index}
                    companyName={item.companyName}
                    position={item.position}
                    startDate={item.startDate}
                    endDate={item.endDate}
                />
            ))}
        </>
    );
};

export default WorkHistoryList;
