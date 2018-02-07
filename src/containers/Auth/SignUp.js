import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { SocialIcon, Divider, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { validateEmail, validatePassword, validateConfirmPassword } from '../../helpers/InputValidators';

import InputControl from '../../components/InputControl'
import { Actions } from 'react-native-router-flux';
import { register } from '../../services/http/authService';
const AppLogo = require('../../assets/images/logo.png')

const DEFAULT_STATE = {
    valueUserName: '',
    valuePassword: '',
    valueConfirmPassword: '',
    errUserName: '',
    errPassword: '',
    errConfirmPassword: '',
    isLoading: false
}

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, DEFAULT_STATE);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={{flex: 1}}  >
                <ScrollView>
                    <View style={{flex: 1,  alignItems: 'center'}}>
                        <View style={styles.registerForm}>
                            <View style={styles.avatarContainer}>
                                <Image style={styles.logo} source={AppLogo} />
                            </View >
                            <View style={styles.localLogin}>
                                <InputControl onChangeText={(text) => this.setState({ valueUserName: text })}
                                    label='USER EMAIL'
                                    placeholder='Enter user email'
                                    validationText={this.state.errUserName} />
                                <InputControl onChangeText={(text) => this.setState({ valuePassword: text })}
                                    label='PASSWORD'
                                    placeholder='Enter password'
                                    secureTextEntry
                                    validationText={this.state.errPassword} />
                                <InputControl onChangeText={(text) => this.setState({ valueConfirmPassword: text })}
                                    label='CONFIRM PASSWORD'
                                    placeholder='Enter confirm password'
                                    secureTextEntry
                                    validationText={this.state.errConfirmPassword} />
                                <Button loading={this.state.isLoading} onPress={this.onBtnSignUpPress.bind(this)} buttonStyle={{ marginTop: 20 }} title='SIGN UP' backgroundColor='#F44336' />
                                <Button title='BACK TO LOGIN' onPress={()=>{Actions.jump('login')}} buttonStyle={{ marginTop: 20 }} backgroundColor='teal'/>
                             </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    onBtnSignUpPress() {
        if (this.isValidForm()) {
            // call API.
            this.setState({isLoading: true})
            register({
                email: this.state.valueUserName,
                password: this.state.valuePassword
            }).then(res => {
                alert(res.data.message);
            }).catch(error => {
                alert(error.response.data.message);
            }).then(()=> {this.setState({isLoading: false})})
        } 
    }

    isValidForm() {
        let isValid = false;
        const userNameResult = validateEmail(this.state.valueUserName);
        const passwordResult = validatePassword(this.state.valuePassword);
        const confirmPasswordResult = validatePassword(this.state.valueConfirmPassword);
        const matchPass = validateConfirmPassword(this.state.valueConfirmPassword, this.state.valuePassword);

        isValid = userNameResult === true  && passwordResult === true  
                && confirmPasswordResult === true  && matchPass === true ;

        this.setState({
            errUserName: userNameResult,
            errPassword: passwordResult,
            errConfirmPassword: (confirmPasswordResult === true) ? matchPass : confirmPasswordResult
        })

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
    registerForm:{
        maxWidth: 360,
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 10
    },
    avatarContainer: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    signUp: {
        maxWidth: 512,
        padding: 20,
    }

});

export default SignUp;
