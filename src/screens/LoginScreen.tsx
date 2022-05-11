import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { COLORS, images, SIZES, FONTS } from '../constants';
import { CustomButtom } from '../components/CustomButtom';

interface Props extends StackScreenProps<RootStackParams> { }

const renderHeader = () => {
    return (
        <View
            style={{
                height: SIZES.height > 700 ? '65%' : '60%',
            }}
        >
            <ImageBackground
                source={images.loginBackground}
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                }}
                resizeMode="cover"
            >

                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={[COLORS.transparent, COLORS.black]}
                    style={{
                        height: 200,
                        justifyContent: 'flex-end',
                        paddingHorizontal: SIZES.padding,
                    }}
                >
                    <Text
                        style={{
                            width: '80%',
                            color: COLORS.white,
                            ...FONTS.largeTitle,
                            lineHeight: 45,

                        }}
                    >
                        Cooking a Delicious Food Easily
                    </Text>

                </LinearGradient>

            </ImageBackground>
        </View>
    );
};


const LoginScreen = ({ navigation }: Props) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.black,
            }}
        >
            <StatusBar barStyle={'light-content'} />
            {/* Header */}
            {renderHeader()}

            {/* Detail */}
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding,
                }}
            >

                {/* Description */}
                <Text
                    style={{
                        marginTop: SIZES.radius,
                        width: '70%',
                        color: COLORS.gray,
                        ...FONTS.body3,
                    }}
                >
                    Discover more than 1200 food recipes in your
                    hands and Cooking it easily!
                </Text>

                {/* Buttons */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}>

                    {/* login */}
                    <CustomButtom
                        title="Login"
                        customStyle={{
                            paddingVertical: 18,
                            borderRadius: 20,
                        }}
                        colors={[COLORS.darkGreen, COLORS.lime]}
                        onPress={() => navigation.replace('HomeScreen')}
                    />

                    {/* sign up */}
                    <CustomButtom
                        title="Sign Up"
                        customStyle={{
                            marginTop: SIZES.radius,
                            paddingVertical: 18,
                            borderRadius: 20,
                            borderColor: COLORS.darkLime,
                            borderWidth: 1,
                        }}
                        colors={[]}
                        onPress={() => navigation.replace('HomeScreen')}
                    />
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;
