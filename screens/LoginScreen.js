import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '../assets/images/test_logo.png';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({navigation, props}) => {
  //observable - for rendering
  let pwdVisible = false;

  //observable - for rendering
  let eyeIcon = 'visibility-off';

  const onLoginPressed = () => {
    navigation.replace('App'); //for not going back
  };

  const onEyeClicked = () => {
    pwdVisible = !pwdVisible;
    eyeIcon = pwdVisible ? 'visibility' : 'visiblity-off';
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <AutoHeightImage width={300} source={Logo} style={styles.image} />
        <CustomTextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="grey"
        />
        <View>
          <CustomTextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={!pwdVisible}
          />
          <Icon
            name={eyeIcon}
            size={30}
            color="grey"
            onPress={onEyeClicked}
            style={styles.eyeIcon}
          />
        </View>
        <View style={styles.logInButton}>
          <CustomButton
            title="LOG IN"
            disabled={false}
            style={styles.button}
            onPress={onLoginPressed}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 300,
    margin: 2,
  },
  button: {
    width: 300,
  },
  image: {
    marginBottom: 30,
  },
  logInButton: {
    marginTop: 30,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default LoginScreen;
