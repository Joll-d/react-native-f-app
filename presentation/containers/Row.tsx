import React from 'react';
import {View, ViewStyle} from 'react-native';

interface RowProps {
    height?: number | undefined;
    children?: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ height, children }) => {
    const containerStyle = {
        width: '100%',
        height: height !== undefined ? height : '100%',
        overflow: 'hidden',
    } as ViewStyle;

    return (
        <View style={[containerStyle]}>
            {children}
        </View>
    );
}


export default Row;
