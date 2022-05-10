import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Recipe'> { }


const Recipe = ({ route, navigation }: Props) => {

    const recipe = route.params;

    console.log(JSON.stringify(recipe, null, 2));

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>Recipe</Text>
        </View>
    );
};

export default Recipe;
