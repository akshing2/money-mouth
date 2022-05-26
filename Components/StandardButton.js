/*
    @brief:
    Standard button component to be used across different screens.
*/

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const StandardButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}> {label} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#70E2EA',
    width: 135,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
  },
  text: {
    fontSize: 24,
    fontFamily: 'Arial',
  },
});
