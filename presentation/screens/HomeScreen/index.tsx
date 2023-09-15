import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button } from "@react-native-material/core";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import {RootStackParamList} from "../../../Navigation/types";
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const goToOtherScreen = () => {
        navigation.navigate('Codes');
    };

    return (<View style={styles.container}>
        <View style={styles.buttonRow}>
            <Button title="Codes" style={styles.button} onPress={goToOtherScreen}/>
            <Button title="Click Me" style={styles.button} />
        </View>
        <View style={styles.buttonRow}>
            <Button title="Click Me" style={styles.button} />
            <Button title="Click Me" style={styles.button} />
        </View>
        <View style={styles.buttonRow}>
            <Button title="Click Me" style={styles.button} />
            <Button title="Click Me" style={styles.button} />
        </View>
    </View>);
}

export {HomeScreen};
