import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { SocialIcon, Divider, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

import InputControl from '../../components/InputControl';
const AppLogo = require('../../assets/images/logo.png');
import { validateEmail, validatePassword } from '../../helpers/InputValidators';
import { Actions, Scene } from 'react-native-router-flux';
import { login } from '../../services/http/authService';

import { AppLoading } from 'expo';

const DEFAULT_STATE = {
    valueUserName: '',
    valuePassword: '',
    errUserName: '',
    errPassword: '',
    isLoading: false,
    isReadingData: true
}

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = Object.assign({}, DEFAULT_STATE);
    }

    componentWillMount = () => {
        try {
            const value = AsyncStorage.getItem('userData');
            if (value !== null){
              // We have data!!
              value.then(res => {
                  this.setState({isReadingData: false})
                  if(res !== null) {
                    Actions.jump('drawer');
                  }
              })
           
            } else {
                this.setState({isReadingData: false})
            }
          } catch (error) {
            // Error retrieving data
          }

    }
    

    render() {
        if(this.state.isReadingData) {
            return <Text>Loading</Text>
        }
        return (
            <ScrollView>
                <View style={{flex: 1, alignItems: 'center'}}>
                        <View  style={styles.loginForm}>
                            <View style={styles.avatarContainer}>
                                <Image style={styles.logo} source={AppLogo} />
                            </View >
                            <View style={styles.localLogin}>
                                <InputControl onChangeText={(text) => this.setState({ valueUserName: text })}
                                    label='EMAIL'
                                    placeholder='Enter user email'
                                    validationText={this.state.errUserName} />
                                <InputControl onChangeText={(text) => this.setState({ valuePassword: text })}
                                    label='PASSWORD'
                                    placeholder='Enter password'
                                    validationText={this.state.errPassword}
                                    secureTextEntry={true} />
                                <Button loading={this.state.isLoading} onPress={this.onBtnLocalLoginPress.bind(this)} buttonStyle={{ marginTop: 20 }} title='LOGIN' backgroundColor='#00BCD4' />
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Text >Don't have account yet? <Text style={styles.signUp} onPress={() => { Actions.jump('signup') }} >Sign up</Text></Text>
                            </View>
                        </View>
                </View>
            </ScrollView>
            
        );
    }

    onBtnLocalLoginPress() {
        if (this.isValidForm()) {
            // call API.
            this.setState({isLoading: true})
            login({
                email: this.state.valueUserName,
                password: this.state.valuePassword
            }).then(res => {
                AsyncStorage.setItem('userData', JSON.stringify(res.data));
                Actions.jump('drawer');
    
            }).catch(error => {
                alert(error.response.data.message)
            }).then(()=> {this.setState({isLoading: false})})
        }
    }



    isValidForm() {
        let isValid = false;
        const userNameResult = validateEmail(this.state.valueUserName);
        const passwordResult = validatePassword(this.state.valuePassword);

        isValid = userNameResult === true && passwordResult === true ;

        this.setState({ errUserName: userNameResult, errPassword: passwordResult })

        return isValid;

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        alignItems: 'center',
        flex: 1
    },
    loginForm: {
        maxWidth: 360,
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 20
    },
    avatarContainer: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    localLogin: {
        maxWidth: 512,
        padding: 20,
    },
    socialLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 10
    },
    signUp: {
        fontSize: 20,
        color: '#0D47A1'
    }
});

export default Login;
