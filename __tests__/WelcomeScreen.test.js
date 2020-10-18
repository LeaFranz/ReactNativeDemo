import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from '../screens/WelcomeScreen';

it('renders correctly', () => {
  renderer.create(<WelcomeScreen />);
});

it('matches snapshot', () => {
    const tree = renderer.create().toJSON();
    expect(tree).toMatchSnapshot();
  })
  
