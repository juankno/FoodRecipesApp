import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams> { }

const Login = ({ navigation }: Props) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>Login</Text>
            <TouchableOpacity
                onPress={() => navigation.replace('Home')}
            >
                <Text>Navigate to Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
