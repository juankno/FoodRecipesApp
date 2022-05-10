import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS } from '../constants';

interface Props {
    title: string;
    customStyle?: any;
    colors?: string[];
    onPress?: () => void;
}

export const CustomButtom = ({ title, customStyle, colors = [], onPress }: Props) => {

    if (colors.length > 0) {
        return (
            <TouchableOpacity
                onPress={onPress}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={colors}
                    style={{
                        ...customStyle,
                    }}
                >

                    <Text
                        style={{
                            textAlign: 'center',
                            color: COLORS.white,
                            ...FONTS.h3,
                        }}
                    >
                        {title}
                    </Text>
                </LinearGradient>

            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity
                style={{
                    ...customStyle,
                }}
                onPress={onPress}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: COLORS.white,
                        ...FONTS.h3,
                    }}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }

};
