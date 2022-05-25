/*
    Author: Akshin Goswami
    Date:   25/05/2022

    @brief: 
    Screen to welcome function
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the SPlash Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
