import React from 'react';
import {View, ViewStyle} from 'react-native';
import {colorSchemes} from "../themes";

interface InfoContainerProps{
    children?: React.ReactNode | React.ReactNode[];
    colorScheme: string;
    style?: ViewStyle | ViewStyle[];
}

export const InfoContainer: React.FC<InfoContainerProps> = ({children, colorScheme = 'light', style}) => {
    return (
            <View style={[styles.infoContainer, {backgroundColor: colorSchemes[colorScheme].tint}, style]}>
                {children}
            </View>
    );
};

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    infoContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    }
});

