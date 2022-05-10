import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

interface Props {
    customStyle?: any;
    categoryItem: any;
    onPress?: () => void;
}

export const CategoryCard = ({ categoryItem, customStyle, onPress }: Props) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                marginTop: 10,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.gray2,
                ...customStyle,
            }}

            onPress={onPress}
        >

            {/* image */}
            <Image
                source={categoryItem.image}
                resizeMode="cover"
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: SIZES.radius,
                }}
            />
            {/* Details */}
            <View
                style={{
                    width: '65%',
                    paddingHorizontal: 20,
                }}
            >
                {/* Name */}
                <Text style={{ flex: 1, ...FONTS.h2 }}>
                    {categoryItem.name}
                </Text>


                {/* Servings */}
                <Text style={{
                    color: COLORS.gray,
                    ...FONTS.body4,
                }}>
                    {categoryItem.duration} | {categoryItem.serving}
                </Text>
            </View>

        </TouchableOpacity>
    );
};
