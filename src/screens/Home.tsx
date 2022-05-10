import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../constants';
import { CategoryCard } from '../components/CategoryCard';

interface Props extends StackScreenProps<RootStackParams, 'Home'> { }

const Home = ({ navigation }: Props) => {

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
                    <View></View>
                }
                renderItem={({ item }: any) => {
                    return (
                        <CategoryCard
                        customStyle={{
                            marginHorizontal: SIZES.padding,
                         }}
                        categoryItem={item}
                         onPress={() => navigation.navigate('Recipe', {recipe: item})}
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

export default Home;
