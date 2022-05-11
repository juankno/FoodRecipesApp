import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Platform } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { FONTS, SIZES, COLORS, icons } from '../constants';
import { Recipe } from '../interfaces/Recipe';

interface Props {
    recipeItem: Recipe;
    customStyle?: any;
    onPress?: () => void;
}

const RecipeCardDetails = ({ recipeItem }: any) => {
    return (
        <View style={{ flex: 1 }} >

            {/* Name and bookmark section */}

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Text
                    style={{
                        width: '70%',
                        color: COLORS.white,
                        ...FONTS.h3,
                        fontSize: 18,
                    }}>
                    {recipeItem.name}
                </Text>

                <Image
                    source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: SIZES.base,
                        tintColor: COLORS.darkGreen,
                    }}
                />
            </View>

            {/* Duration and serving */}
            <Text style={{
                color: COLORS.lightGray,
                ...FONTS.body4,

            }}>
                {recipeItem.duration} | {recipeItem.serving} Serving
            </Text>

        </View>
    );
};

const RecipeCardInfo = ({ recipeItem }: any) => {

    if (Platform.OS === 'ios') {
        return (
            <BlurView
                blurType="dark"
                style={styles.recipeCardContainer}
            >

                <RecipeCardDetails recipeItem={recipeItem} />

            </BlurView>
        );
    } else {
        return (
            <View
                style={{
                    ...styles.recipeCardContainer,
                    backgroundColor: COLORS.transparentDarkGray,
                }}
            >
                <RecipeCardDetails recipeItem={recipeItem} />


            </View>
        );
    }

};

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
            {
                recipeItem.category &&
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
            }


            {/* Card info */}
            <RecipeCardInfo
                recipeItem={recipeItem}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    recipeCardContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius,
    },
});
