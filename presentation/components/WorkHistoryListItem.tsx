import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Row from "../containers/Row";
import IWorkHistoryItem from "../../domain/entities/IWorkHistoryItem";

const WorkHistoryListItem: React.FC<IWorkHistoryItem> = ({companyName, position,
                                                       startDate, endDate}) => {
    function formatDateToDdMmYyyy(date: Date): string {
        const day: string = String(date.getDate()).padStart(2, '0');
        const month: string = String(date.getMonth() + 1).padStart(2, '0'); // Месяц начинается с 0
        const year: number = date.getFullYear();

        return `${day}.${month}.${year}`;
    }
    return (
        <View>
            <Row height={30}>
                <Text style={styles.highlightedText}>{companyName}</Text>
            </Row>
            <Row height={20} style={styles.containerSpaceBetween}>
                <Text style={styles.leftElement}>{position}</Text>
                <Text style={styles.rightElement}>{formatDateToDdMmYyyy(startDate)} - {formatDateToDdMmYyyy(endDate)}</Text>
            </Row>
        </View>
    );
};

const styles = StyleSheet.create({
    containerSpaceBetween: {
        position: 'relative',
    },
    leftElement: {
        position: 'absolute',
        left: 0
    },
    rightElement: {
        position: 'absolute',
        right: 0
    },
    highlightedText: {
        fontSize: 16,
            fontWeight: 'bold',
        marginBottom: 4,
    }
});

export default WorkHistoryListItem;
