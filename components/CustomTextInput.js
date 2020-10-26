import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import fontsizes from '../constants/fontsizes';

const CustomTextInput = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder ? props.placeholder : null}
        placeholderTextColor={
          props.placeholderTextColor ? props.placeholderTextColor : null
        }
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    padding: 10,
    fontSize: fontsizes.BODY1,
  },
});

export default CustomTextInput;
