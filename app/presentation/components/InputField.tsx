import React from "react";
import {StyleSheet, View, Text, TextInput} from "react-native";

interface InputFieldProps {
    label: string;
    value: any;
    onChangeText: React.Dispatch<React.SetStateAction<any>>;
    placeholder?: string;
    keyboardType?: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad" | "url";
}

const InputField: React.FC<InputFieldProps> = ({
                                                   label,
                                                   value,
                                                   onChangeText,
                                                   placeholder = '',
                                                   keyboardType = "default"
                                               }) => {
    return (
        <View>
            <Text style={styles.label}>{label}:</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value.toString()}
                placeholder={placeholder}
                keyboardType={keyboardType}
            />
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default InputField;

