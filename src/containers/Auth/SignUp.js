import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { SocialIcon, Divider, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { validateUserName, validatePassword, validateConfirmPassword } from '../../helpers/InputValidators';

import InputControl from '../../components/InputControl'
import { Actions } from 'react-native-router-flux';
const AppLogo = require('../../assets/images/logo.png')

const DEFAULT_STATE = {
    valueUserName: '',
    valuePassword: '',
    valueConfirmPassword: '',
    errUserName: '',
    errPassword: '',
    errConfirmPassword: ''
}

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, DEFAULT_STATE);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="position" >
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.avatarContainer}>
                            <Image style={styles.logo} source={AppLogo} />
                        </View >
                        <View style={styles.localLogin}>
                            <InputControl onChangeText={(text) => this.setState({ valueUserName: text })}
                                label='USER NAME'
                                placeholder='Enter user name'
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
                            <Button onPress={this.onBtnSignUpPress.bind(this)} buttonStyle={{ marginTop: 20 }} title='SIGN UP' backgroundColor='#F44336' />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    onBtnSignUpPress() {
        if (!this.isValidForm()) {
            // call API.
        } else {
        }
    }

    isValidForm() {
        let isValid = true;
        const userNameResult = validateUserName(this.state.valueUserName);
        const passwordResult = validatePassword(this.state.valuePassword);
        const confirmPasswordResult = validatePassword(this.state.valueConfirmPassword);
        const matchPass = validateConfirmPassword(this.state.valueConfirmPassword, this.state.valuePassword);

        isValid = userNameResult !== '' && passwordResult !== '' && confirmPasswordResult !== '' && matchPass !== '';

        this.setState({
            errUserName: userNameResult,
            errPassword: passwordResult,
            errConfirmPassword: (confirmPasswordResult === '') ? matchPass : confirmPasswordResult
        })

        return isValid;

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        alignItems: 'center',
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
