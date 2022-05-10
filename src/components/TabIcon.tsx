import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS } from '../constants';

interface Props {
    focused: boolean;
    icon: any;
}

export const TabIcon = ({ focused, icon }: Props) => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 80,
                width: 50,
            }}
        >
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? COLORS.darkGreen : COLORS.lightLime,
                }}
            />

            {focused && <View
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 5,
                    borderTopLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    backgroundColor: COLORS.darkGreen,
                }}
            />}
        </View>
    );
};
