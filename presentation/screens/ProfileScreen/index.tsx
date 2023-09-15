import React from 'react';
import {Image, View, Text} from 'react-native';
import { styles } from "./styles";
import Row from "../../containers/Row";
import Field from "../../components/Field";
import DropdownList from "../../components/DropdownList";


const ProfileScreen: React.FC = () => {

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
                    <Field label={'Name'} value={'Sem Santi'}></Field>

                    <Field label={'Email'} value={'example@email.com'}></Field>

                    <Field label={'Number'} value={'0954872546'}></Field>
                </DropdownList>

                {/* Добавьте другие поля профиля здесь */}
            </View>
        </View>
    );
};

export {ProfileScreen};
