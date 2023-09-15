import React from "react";
import {StyleSheet, View, Text} from "react-native";

interface FieldProps {
    label: string;
    value: string;
}

export const Field: React.FC<FieldProps> = ({label, value}) => {
    return (
        <View>
            <Text style={styles.label}>{label}:</Text>
            <Text style={styles.text}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    text: {
        fontSize: 16,
    },
});

export default Field;

