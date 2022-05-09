import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Home'> { }

const Home = ({ navigation }: Props) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>Home</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Recipe')}
            >
                <Text>Navigate to Recipe</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;
