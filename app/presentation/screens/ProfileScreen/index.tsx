import React, {useEffect, useState} from 'react';
import {Animated, Image, RefreshControl, Text, useColorScheme, View} from 'react-native';
import styles from "./styles";
import Field from "../../components/Field";
import DropdownList from "../../components/DropdownList";
import {loadWorkHistory} from "../../../domain/usecases/WorkHistoryUseCase";
import WorkHistoryList from "../../components/WorkHistoryList";
import IWorkHistoryItem from "../../../domain/entities/IWorkHistoryItem";
import Row from "../../containers/Row";
import {colorSchemes} from "../../themes";
import {Button} from "@react-native-material/core";
import {AddWorkHistoryModal} from "../../components/modals/AddWorkHistoryModal";
import {InfoContainer} from "../../containers/InfoContainer";
import {ImageContainer} from "../../containers/ImageContainer";
import ScrollView = Animated.ScrollView;


const ProfileScreen: React.FC = () => {
    const [workHistory, setWorkHistory] = useState<IWorkHistoryItem[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const colorScheme = useColorScheme() ?? 'light';
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        loadWorkHistory().then((data) => {
            setWorkHistory(data);
        });
    }, []);

    return (
        <View style={[styles.container, {backgroundColor: colorSchemes[colorScheme].tint}]}>
            <ImageContainer colorScheme={colorScheme}>
                <Image
                    style={styles.image}
                    source={require('../../../../assets/adaptive-icon.png')}
                />
            </ImageContainer>
            <AddWorkHistoryModal modalVisible={modalVisible} setModalVisible={setModalVisible}
                                 workHistory={workHistory}>
            </AddWorkHistoryModal>
            <InfoContainer colorScheme={colorScheme}>
                <Button title="Add" style={styles.button} onPress={() => setModalVisible(!modalVisible)}/>
                <Field label={'Name'} value={'Sem Santi'}></Field>

                <Field label={'Email'} value={'example@email.com'}></Field>

                <Field label={'Number'} value={'0954872546'}></Field>

                <Text>{colorScheme}</Text>

                <DropdownList>
                    <Row height={300}>
                        <ScrollView refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                        }>
                            <WorkHistoryList workHistory={workHistory}/>
                        </ScrollView>
                    </Row>
                </DropdownList>

            </InfoContainer>
        </View>
    );
};

export {ProfileScreen};
