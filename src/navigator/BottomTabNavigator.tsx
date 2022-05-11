import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, icons } from '../constants';
import { RootStackParams } from './StackNavigator';
import { TabIcon } from '../components/TabIcon';
import { HomeScreen } from '../screens/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { BookMarkScreen } from '../screens/BookMarkScreen';
import { SettingsScreen } from '../screens/SettingsScreen';


const Tab = createBottomTabNavigator<RootStackParams>();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: 'transparent',
                    height: 100,
                },
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.home} />,
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.search} />,
                }}
            />
            <Tab.Screen
                name="BookmarkScreen"
                component={BookMarkScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.bookmark} />,
                }}
            />
            <Tab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.settings} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
