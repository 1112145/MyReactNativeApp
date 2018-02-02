import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/containers/Auth/Login';
import SignUp from './src/containers/Auth/SignUp';
import Home from './src/containers/Pages/Home';
import { Router, Stack, Scene } from 'react-native-router-flux';

import { Font, AppLoading } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }
    return (
        <Router sceneStyle={styles.container}>
          <Stack key="root">
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="signup" component={SignUp} hideNavBar />
            <Scene key="home" component={Home} hideNavBar/>
          </Stack>
        </Router>
    );
  }

  async componentWillMount() {
    await Font.loadAsync({
      'MaterialIcons': MaterialIcons.font.material,
    });

    this.setState({ fontsLoaded: true });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
