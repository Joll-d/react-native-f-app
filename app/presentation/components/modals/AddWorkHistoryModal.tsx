import React, {useState} from "react";
import {TouchableOpacity, View, Text, Alert, Pressable, Modal} from "react-native";
import {StyleSheet} from 'react-native';
import InputField from "../InputField";
import IWorkHistoryItem from "../../../domain/entities/IWorkHistoryItem";
import {createWorkHistory} from "../../../domain/usecases/WorkHistoryUseCase";

interface InputFieldProps {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode[] | React.ReactNode;
}

export const AddWorkHistoryModal = ({modalVisible, setModalVisible, workHistory, children}: any) => {

    const [newWorkHistoryItem, setNewWorkHistoryItem] = useState<IWorkHistoryItem>({
        id: workHistory.length,
        companyName: '',
        position: '',
        startDate: new Date(),
        endDate: new Date(),
    });

    const [companyName, setCompanyName] = useState<string>('');
    const [position, setPosition] = useState<string>('');
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());

    const createNewWorkHistory = () => {
        setNewWorkHistoryItem({
            id: newWorkHistoryItem.id,
            companyName: companyName,
            position: position,
            startDate: startDate,
            endDate: endDate,
        })
        createWorkHistory(newWorkHistoryItem)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {children}
                    <InputField label={'Company name'} value={companyName} onChangeText={setCompanyName}/>
                    <InputField label={'Position'} value={position} onChangeText={setPosition}/>
                    <InputField label={'Start date'} value={startDate} onChangeText={setStartDate}/>
                    <InputField label={'End date'} value={endDate} onChangeText={setEndDate}/>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            createNewWorkHistory();
                            setModalVisible(!modalVisible);
                        }}>
                        <Text style={styles.textStyle}>Add</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
