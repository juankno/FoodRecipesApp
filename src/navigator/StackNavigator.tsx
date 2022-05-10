import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTabNavigator';
import Login from '../screens/Login';
import Recipe from '../screens/Recipe';

export type RootStackParams = {
    Login: undefined,
    Home: undefined,
    Recipe: any,
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
                component={BottomTab}
            />
            <Stack.Screen
                name="Recipe"
                component={Recipe}
            />
        </Stack.Navigator>
    );
};
