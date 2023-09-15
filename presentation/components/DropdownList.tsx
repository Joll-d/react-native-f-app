import React, { useState } from 'react';
import { View, Button, FlatList, Text } from 'react-native';
import { Divider } from "@react-native-material/core";

interface DropdownListProps {
    children: React.ReactNode[] | React.ReactNode;
}

const DropdownList: React.FC<DropdownListProps> = ({ children }) => {
    const [isListVisible, setListVisible] = useState(false);

    const toggleList = () => {
        setListVisible(!isListVisible);
    };

    const renderChildItems = () => {
        if (!children) {
            return null; // Return null or an empty element if children is null or undefined
        }

        return React.Children.map(children, (child, index) => (
            <View key={index}>
                {child}
                {index < React.Children.count(children) - 1 && (
                    <Divider style={{ marginTop: 4 }} leadingInset={20} />
                )}
            </View>
        ));
    };

    return (
        <View>
            <Button title="List" onPress={toggleList} />
            {isListVisible && renderChildItems()}
        </View>
    );
};

export default DropdownList;
