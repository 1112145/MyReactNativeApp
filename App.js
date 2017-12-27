import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/containers/Login';
import SignUp from './src/containers/SignUp';
import { Router, Stack, Scene } from 'react-native-router-flux';


export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Router sceneStyle={styles.container}>
          <Stack key="root">
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="signup" component={SignUp} title="SignUp" />
          </Stack>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
