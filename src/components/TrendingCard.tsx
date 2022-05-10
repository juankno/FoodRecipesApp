import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { FONTS, SIZES, COLORS, icons } from '../constants';

interface Props {
    recipeItem: any;
    customStyle?: any;
    onPress?: () => void;
}

export const TrendingCard = ({ recipeItem, customStyle, onPress }: Props) => {
    return (
        <TouchableOpacity
            style={{
                height: 350,
                width: 250,
                marginTop: SIZES.radius,
                marginRight: 20,
                borderRadius: SIZES.radius,
                ...customStyle,
            }}
            onPress={onPress}
            activeOpacity={0.8}
        >
            {/* BackGround Image */}
            <Image
                source={recipeItem.image}
                resizeMode="cover"
                style={{
                    width: 250,
                    height: 350,
                    borderRadius: SIZES.radius,
                }}
            />

            {/* Category */}
            <View
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 15,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: 5,
                    backgroundColor: COLORS.transparentGray,
                    borderRadius: SIZES.radius,
                }}
            >
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h4,
                    }}
                >
                    {recipeItem.category}
                </Text>

            </View>
        </TouchableOpacity>
    );
};
