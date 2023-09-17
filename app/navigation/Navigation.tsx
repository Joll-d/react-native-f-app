import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../presentation/screens/HomeScreen';
import {CodesScreen} from '../presentation/screens/CodesScreen';
import { RootStackParamList } from './types';
import {ProfileScreen} from "../presentation/screens/ProfileScreen";
import {TestModalWindowsScreen} from "../presentation/screens/TestModalWindowsScreen";

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Codes" component={CodesScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="TestModalWindows" component={TestModalWindowsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
