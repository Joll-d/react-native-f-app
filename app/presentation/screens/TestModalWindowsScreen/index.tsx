import React, {useState} from 'react';
import {Alert, Pressable, View, Text, Modal} from 'react-native';
import {Button} from "@react-native-material/core";
import {styles} from "./styles";
import {RootStackParamList} from "../../../navigation/types";
import {StackNavigationProp} from '@react-navigation/stack';
import Toast from 'react-native-root-toast';
import {TestModal} from "../../components/modals/TestModal";

const TestModalWindowsScreen: React.FC = () => {

    // Add a Toast on screen.
    let toast = () => {Toast.show('Test Toast.', {
        duration: Toast.durations.LONG,
    })};

    setTimeout(function hideToast() {
        Toast.hide(toast);
    }, 500);

    const [modalVisible, setModalVisible] = useState(false);

    return (<View style={styles.container}>

        <TestModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>

        <View style={styles.buttonRow}>
            <Button title="Modal" style={styles.button} onPress={() => setModalVisible(!modalVisible)}/>
            <Button title="Toast" style={styles.button} onPress={toast}/>
        </View>
    </View>);
}

export {TestModalWindowsScreen};
