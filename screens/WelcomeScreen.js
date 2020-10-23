import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'native-base';

const WelcomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen :)</Text>
      <Button rounded success>
        <Text>click me</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WelcomeScreen;
