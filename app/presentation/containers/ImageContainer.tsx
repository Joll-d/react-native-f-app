import React from 'react';
import {View, ViewStyle} from 'react-native';
import {colorSchemes} from "../themes";

interface ImageContainer{
    children?: React.ReactNode | React.ReactNode[];
    colorScheme: string;
    style?: ViewStyle | ViewStyle[];
}

export const ImageContainer: React.FC<ImageContainer> = ({children, colorScheme = 'light', style}) => {
    return (
        <View style={[styles.imageContainer, {backgroundColor: colorSchemes[colorScheme].tint}, style]}>
            {children}
        </View>
    );
};

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        marginBottom: 16,
    }
});

