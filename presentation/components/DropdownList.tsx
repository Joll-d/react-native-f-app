import React, { useState } from 'react';
import { View, Button, FlatList, Text } from 'react-native';
import { Divider } from "@react-native-material/core";

interface DropdownListProps {
    children: React.ReactNode[];
}

const DropdownList: React.FC<DropdownListProps> = ({ children }) => {
    const [isListVisible, setListVisible] = useState(false);

    const toggleList = () => {
        setListVisible(!isListVisible);
    };

    const renderItem = ({ item }: { item: React.ReactNode }, index: number) => (
        <View>
            {item}
            {index < children.length - 1 && <Divider style={{ marginTop: 2 }} leadingInset={16} />}
        </View>
    );

    return (
        <View>
            <Button title="List" onPress={toggleList} />
            {isListVisible && (
                <FlatList
                    data={children}
                    renderItem={({ item, index }) => renderItem({ item }, index)}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
        </View>
    );
};

export default DropdownList;
