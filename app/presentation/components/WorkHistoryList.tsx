import React from 'react';
import WorkHistoryListItem from './WorkHistoryListItem';

interface WorkHistoryListProps {
    companyName: string;
    position: string;
    startDate: Date;
    endDate: Date;
}

const WorkHistoryList: React.FC<{workHistory: WorkHistoryListProps[]; }> = ({workHistory}) => {
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
