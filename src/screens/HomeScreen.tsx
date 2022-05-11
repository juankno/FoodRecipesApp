import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Image, TextInput } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../constants';
import { CategoryCard } from '../components/CategoryCard';
import { TrendingCard } from '../components/TrendingCard';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> { }

export const HomeScreen = ({ navigation }: Props) => {

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    alignItems: 'center',
                    height: 80,
                }}
            >
                {/* Text */}
                <View style={{ flex: 1 }}>
                    <Text style={{
                        color: COLORS.darkGreen,
                        fontWeight: 'bold',
                        ...FONTS.h2,
                    }}>
                        Hello Juan,
                    </Text>

                    <Text
                        style={{
                            marginTop: 3,
                            color: COLORS.gray,
                            ...FONTS.body3,
                        }}>
                        What you want to cook today?
                    </Text>
                </View>

                {/* Image */}

                <TouchableOpacity
                    onPress={() => console.log('Profile')}
                >
                    <Image
                        source={images.profile}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                        }}

                    />
                </TouchableOpacity>

            </View>
        );
    }

    function renderSearchBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGray,
                }}>

                <Image
                    source={icons.search}
                    resizeMode="cover"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray,
                    }}
                />

                <TextInput
                    style={{
                        marginLeft: SIZES.radius,
                        ...FONTS.body3,
                    }}
                    placeholderTextColor={COLORS.gray}
                    placeholder="Search Recipes"
                />

            </View>
        );
    }

    function renderSeeRecipeCard() {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
                borderRadius: 10,
                backgroundColor: COLORS.lightGreen,
            }}>

                {/* Image */}
                <View style={{
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <Image
                        source={images.recipe}
                        style={{
                            width: 80,
                            height: 80,
                        }}
                    />

                </View>

                {/* Text */}
                <View style={{
                    flex: 1,
                    paddingVertical: SIZES.radius,
                }}>
                    <Text style={{
                        width: '70%',
                        ...FONTS.body4,
                    }}>
                        You have 12 recipes that you haven't tried yet
                    </Text>

                    <TouchableOpacity
                        style={{
                            marginTop: 10,
                        }}
                        onPress={() => console.log('See recipes')}
                    >

                        <Text style={{
                            color: COLORS.darkGreen,
                            textDecorationLine: 'underline',
                            ...FONTS.h4,
                        }}>
                            See Recipes
                        </Text>

                    </TouchableOpacity>

                </View>
            </View>
        );
    }

    function renderTrendingSection() {
        return (
            <View style={{ marginTop: SIZES.padding }}>
                <Text style={{
                    marginHorizontal: SIZES.padding,
                    ...FONTS.h2,
                }}>
                    Trending Recipe
                </Text>

                <FlatList
                    data={dummyData.trendingRecipes}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <TrendingCard
                                recipeItem={item}
                                customStyle={{
                                    marginLeft: index === 0 ? SIZES.padding : 0,
                                }}
                                onPress={() => navigation.navigate('RecipeScreen', item)}
                            />
                        );
                    }}
                />
            </View>
        );
    }

    function renderCategoryHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    marginHorizontal: SIZES.padding,
                }}>

                {/* Section Title */}
                <Text style={{ flex: 1, ...FONTS.h2 }}>
                    Categories
                </Text>

                {/* View All */}
                <TouchableOpacity>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                        View All
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }


    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}

        >
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => item.id.toString()}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Header */}
                        {renderHeader()}
                        {/* Search Bar */}
                        {renderSearchBar()}
                        {/* See recipe Card */}
                        {renderSeeRecipeCard()}
                        {/* Trending section */}
                        {renderTrendingSection()}
                        {/* Category Header */}
                        {renderCategoryHeader()}
                    </View>
                }
                renderItem={({ item }: any) => {
                    return (
                        <CategoryCard
                            customStyle={{
                                marginHorizontal: SIZES.padding,
                            }}
                            categoryItem={item}
                            onPress={() => navigation.navigate('RecipeScreen', item)}
                        />
                    );
                }}

                ListFooterComponent={
                    <View
                        style={{
                            marginBottom: 100,
                        }}
                    />
                }
            />

        </SafeAreaView>
    );
};

