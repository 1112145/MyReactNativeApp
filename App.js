import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import Login from './src/containers/Auth/Login';
import SignUp from './src/containers/Auth/SignUp';
import Home from './src/containers/Pages/Home';
import SideMenu from './src/containers/Templates/SideMenu';

import { Router, Drawer, Scene, ActionConst } from 'react-native-router-flux';

import { Font, AppLoading } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import StatusBarBackground from './src/components/StatusBarBackground';

const RobotoFont = require('./src/assets/fonts/Roboto-Medium.ttf');
const RammettoOne = require('./src/assets/fonts/RammettoOne.ttf');
const Oswald = require('./src/assets/fonts/Oswald.ttf');

import { store } from './src/_redux';
import { Provider } from 'react-redux';


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
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBarBackground/>
          <Router backAndroidHandler={()=>(null)} sceneStyle={styles.container} >
            <Scene key='root' >
              <Scene key="login" component={Login} hideNavBar />
              <Scene key="signup" component={SignUp} hideNavBar />
              <Scene key="drawer" drawer contentComponent={SideMenu} 
                      onEnter={this.checkIfLogined} 
                      drawerPosition="left" drawerWidth={300} hideNavBar>
                <Scene key="home" component={Home}/>
              </Scene>
            </Scene>
          </Router>
        </View>
      </Provider>
      
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
      'Roboto': RobotoFont,
      'RammettoOne': RammettoOne,
      'Oswald': Oswald
    });

    this.setState({ fontsLoaded: true });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
