import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import Login from './src/containers/Auth/Login';
import SignUp from './src/containers/Auth/SignUp';
import Home from './src/containers/Pages/Home';
import { Router, Stack, Scene, ActionConst } from 'react-native-router-flux';

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
            <Scene key="login" component={Login} hideNavBar  />
            <Scene key="signup" component={SignUp} hideNavBar />
            <Scene key="home" component={Home} hideNavBar onEnter={this.checkIfLogined.bind(this)} type={ActionConst.RESET}/>
          </Stack>
        </Router>
    );
  }

  checkIfLogined(){
    try {
      const value = AsyncStorage.getItem('userData');
      if (value == null){
        Actions.login();
      }
    } catch (error) {
    }
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
