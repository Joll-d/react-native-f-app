import React from 'react';
import {View, ViewStyle} from 'react-native';

interface RowProps {
    height?: number | undefined;
    children?: React.ReactNode;
    style?: ViewStyle;
}

const Row: React.FC<RowProps> = ({ height, children, style }) => {
    const containerStyle = {
        width: '100%',
        height: height !== undefined ? height : '100%',
        overflow: 'hidden',
    } as ViewStyle;

    return (
        <View style={[containerStyle, style]}>
            {children}
        </View>
    );
}


export default Row;
