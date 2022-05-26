/*
    Author: Akshin Goswami
    Date:   25/05/2022

    @brief: 
    Screen to handle login functionality
*/

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StandardTextInput } from '../Components/StandardTextInput';

export const LoginScreen = ({ navigation }) => {
  // states for forms
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const backButtonOnPress = () => {
    console.log('Pressed back button.');
    navigation.navigate('WelcomeScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={backButtonOnPress}>
          <Ionicons name='caret-back-circle-outline' size={40} />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Welcome Back!</Text>
        <Text style={styles.subtitleText}> Let's pump that ego </Text>
        <StatusBar style='auto' />
      </View>

      <View style={styles.formInputContainer}>
        <StandardTextInput
          placeholder={'Email'}
          onChangeTextHandler={setEmail}
          keyboardType={'email-address'}
        />
        <StandardTextInput
          placeholder={'Password'}
          onChangeTextHandler={setEmail}
          keyboardType={'default'}
          secureTextEntry={true}
        />
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
  },
  backButtonContainer: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  textContainer: {
    flex: 0.35,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'Arial',
    fontSize: 36,
    paddingBottom: 40,
    paddingTop: 30,
  },
  subtitleText: {
    fontFamily: 'Arial',
    fontSize: 24,
    paddingBottom: 30,
  },
  formInputContainer: {
    flex: 0.55,
  },
});
