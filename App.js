import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/containers/Login';
import SignUp from './src/containers/SignUp';



export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
      height: '100%',
      backgroundColor: 'yellow'
  },
});
