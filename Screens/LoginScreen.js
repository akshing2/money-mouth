/*
    Author: Akshin Goswami
    Date:   25/05/2022

    @brief: 
    Screen to handle login functionality
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

export const LoginScreen = ({ navigation }) => {
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

      <View>
        <Text>Login Screen</Text>
        <StatusBar style='auto' />
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
});
