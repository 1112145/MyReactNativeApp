import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import Login from './src/containers/Auth/Login';
import SignUp from './src/containers/Auth/SignUp';
import Home from './src/containers/Pages/Home';
import SideMenu from './src/components/SideMenu';
import A from './src/containers/Pages/A';
import B from './src/containers/Pages/B';

import { Router, Drawer, Scene, ActionConst } from 'react-native-router-flux';

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
        <Router  sceneStyle={styles.container}>
          <Scene key='root'>
            <Scene key="login" component={Login} hideNavBar  />
            <Scene key="signup" component={SignUp} hideNavBar />
            <Scene key="drawer" drawer contentComponent={SideMenu} initial drawerPosition="left" drawerWidth={250}>
              <Scene key="main">
                  <Scene key="home" component={Home}/>
                  <Scene key="orders" component={B}/>
              </Scene>
            </Scene>
          </Scene>
            
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
