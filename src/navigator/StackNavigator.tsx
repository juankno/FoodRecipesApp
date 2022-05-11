import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import RecipeScreen from '../screens/RecipeScreen';
import { Recipe } from '../interfaces/Recipe';

export type RootStackParams = {
    LoginScreen: undefined,
    HomeScreen: undefined,
    RecipeScreen: Recipe,
    SearchScreen: undefined,
    BookmarkScreen: undefined,
    SettingsScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={'LoginScreen'}
        >
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="HomeScreen"
                component={BottomTab}
            />
            <Stack.Screen
                name="RecipeScreen"
                component={RecipeScreen}
            />
        </Stack.Navigator>
    );
};
