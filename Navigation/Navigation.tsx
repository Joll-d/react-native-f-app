import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../presentation/screens/HomeScreen';
import {CodesScreen} from '../presentation/screens/CodesScreen';
import { RootStackParamList } from './types'; // Создайте этот файл

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Codes" component={CodesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
