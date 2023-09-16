import React, {useContext, useEffect, useState} from 'react';
import {Animated, Image, Text, useColorScheme, View} from 'react-native';
import styles from "./styles";
import Field from "../../components/Field";
import DropdownList from "../../components/DropdownList";
import {loadWorkHistory} from "../../../domain/usecases/WorkHistoryUseCase";
import WorkHistoryList from "../../components/WorkHistoryList";
import IWorkHistoryItem from "../../../domain/entities/IWorkHistoryItem";
import Row from "../../containers/Row";
import ScrollView = Animated.ScrollView;
import {colorSchemes} from "../../themes";


const ProfileScreen: React.FC = () => {
    const [workHistory, setWorkHistory] = useState<IWorkHistoryItem[]>([]);

    const colorScheme = useColorScheme() ?? 'light';

    useEffect(() => {
        loadWorkHistory().then((data) => {
            setWorkHistory(data);
        });
    }, []);

    return (
        <View style={[styles.container, {backgroundColor: colorSchemes[colorScheme].tint}]} >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../../../../assets/adaptive-icon.png')}
                />
            </View>
            <View style={[styles.infoContainer, {backgroundColor: colorSchemes[colorScheme].tint}]}>
                <Field label={'Name'} value={'Sem Santi'}></Field>

                <Field label={'Email'} value={'example@email.com'}></Field>

                <Field label={'Number'} value={'0954872546'}></Field>

                <Text>{colorScheme}</Text>

                <DropdownList>
                    <Row height={300}>
                        <ScrollView>
                            <WorkHistoryList workHistory={workHistory} />
                        </ScrollView>
                    </Row>
                </DropdownList>

            </View>
        </View>
    );
};

export {ProfileScreen};
