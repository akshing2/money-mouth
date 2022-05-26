/*
    @brief: component to standardise text inputs across multiple screens.
*/

import { StyleSheet, TextInput } from 'react-native';

export const StandardTextInput = ({
  placeholder,
  onChangeTextHandler,
  keyboardType = 'email-address',
  secureTextEntry = false,
}) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeTextHandler}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 45,
    width: 295,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
