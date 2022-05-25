/*
    Author: Akshin Goswami
    Date:   25/05/2022

    @brief: 
    Screen to welcome function to ask the user to login or signup
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleTextTop}>MONEY</Text>
        <Text style={styles.titleTextBottom}>MOUTH!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
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
});
