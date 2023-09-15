import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import styles from "./styles";
import Field from "../../components/Field";
import DropdownList from "../../components/DropdownList";
import {loadWorkHistory} from "../../../domain/usecases/WorkHistoryUseCase";
import WorkHistoryList from "../../components/WorkHistoryList";
import WorkHistoryItem from "../../../domain/entities/WorkHistoryItem";


const ProfileScreen: React.FC = () => {
    const [workHistory, setWorkHistory] = useState<WorkHistoryItem[]>([]);

    useEffect(() => {
        loadWorkHistory().then((data) => {
            setWorkHistory(data);
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/adaptive-icon.png')}
                />
            </View>
            <View style={styles.infoContainer}>
                <Field label={'Name'} value={'Sem Santi'}></Field>

                <Field label={'Email'} value={'example@email.com'}></Field>

                <Field label={'Number'} value={'0954872546'}></Field>

                <DropdownList>
                    <WorkHistoryList workHistory={workHistory} />
                </DropdownList>

            </View>
        </View>
    );
};

export {ProfileScreen};
