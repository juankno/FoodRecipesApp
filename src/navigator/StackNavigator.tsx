import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './TabNavigator';
import Login from '../screens/Login';
import Recipe from '../screens/Recipe';

export type RootStackParams = {
    Login: undefined,
    Home: undefined,
    Recipe: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={'Login'}
        >
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Home"
                component={Tabs}
            />
            <Stack.Screen
                name="Recipe"
                component={Recipe}
            />
        </Stack.Navigator>
    );
};
