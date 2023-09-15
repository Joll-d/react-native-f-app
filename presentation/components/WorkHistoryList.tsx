import React from 'react';
import WorkHistoryListItem from './WorkHistoryListItem';
import WorkHistoryItem from "../../domain/entities/WorkHistoryItem";

const WorkHistoryList: React.FC<{workHistory: WorkHistoryItem[]; }> = ({workHistory}) => {
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
