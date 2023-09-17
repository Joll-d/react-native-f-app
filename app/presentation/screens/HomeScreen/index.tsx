import React from 'react';
import {View} from 'react-native';
import {Button} from "@react-native-material/core";
import {styles} from "./styles";
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from "../../../navigation/types";
import {StackNavigationProp} from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const goToCodesScreen = () => {
        navigation.navigate('Codes');
    };

    const goToProfileScreen = () => {
        navigation.navigate('Profile');
    };

    const goToTestModalWindowsScreen = () => {
        navigation.navigate('TestModalWindows');
    };

    return (<View style={styles.container}>
        <View style={styles.buttonRow}>
            <Button title="Codes" style={styles.button} onPress={goToCodesScreen}/>
            <Button title="Profile" style={styles.button} onPress={goToProfileScreen}/>
        </View>
        <View style={styles.buttonRow}>
            <Button title="Modal Windows" style={styles.button} onPress={goToTestModalWindowsScreen}/>
            <Button title="Click Me" style={styles.button} />
        </View>
        <View style={styles.buttonRow}>
            <Button title="Click Me" style={styles.button} />
            <Button title="Click Me" style={styles.button} />
        </View>
    </View>);
}

export {HomeScreen};
