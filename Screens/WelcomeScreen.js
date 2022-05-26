/*
    Author: Akshin Goswami
    Date:   25/05/2022

    @brief: 
    Screen to welcome function to ask the user to login or signup
*/

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StandardButton } from '../Components/StandardButton';

export const WelcomeScreen = ({ navigation }) => {
  const loginBtnOnPress = () => {
    console.log('Pressed Login button!');
    navigation.navigate('LoginScreen');
  };

  const signupBtnOnPress = () => {
    console.log('Pressed Signup Button!');
    navigation.navigate('SignupScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleTextTop}>MONEY</Text>
        <Text style={styles.titleTextBottom}>MOUTH!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <StandardButton label={'Log In'} onPress={loginBtnOnPress} />
        <TouchableOpacity onPress={signupBtnOnPress}>
          <Text style={styles.clickableText}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  titleTextContainer: {
    flex: 0.45,
    alignItems: 'center',
    //justifyContent: "center",
    justifyContent: 'flex-end',
    //backgroundColor: "red",
  },
  buttonContainer: {
    flex: 0.4,
    alignItems: 'center',
    //justifyContent: "center",
    justifyContent: 'center',
    //backgroundColor: "red",
  },
  titleTextTop: {
    fontFamily: 'Arial',
    fontSize: 64,
    letterSpacing: 10,
  },
  titleTextBottom: {
    fontFamily: 'Arial',
    fontSize: 64,
    letterSpacing: 5,
  },
  clickableText: {
    fontFamily: 'Arial',
    fontSize: 24,
    textDecorationLine: 'underline',
    padding: 30,
  },
});
