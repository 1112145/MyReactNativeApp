import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { SocialIcon, Divider, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

import InputControl from '../../components/InputControl';
const AppLogo = require('../../assets/images/logo.png');
import { validateUserName, validatePassword } from '../../helpers/InputValidators';
import { Actions } from 'react-native-router-flux';

const DEFAULT_STATE = {
    valueUserName: '',
    valuePassword: '',
    errUserName: '',
    errPassword: ''
}

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = Object.assign({}, DEFAULT_STATE);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding">
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
                                validationText={this.state.errPassword}
                                secureTextEntry={true} />
                            <Button onPress={this.onBtnLocalLoginPress.bind(this)} buttonStyle={{ marginTop: 20 }} title='LOGIN' backgroundColor='#00BCD4' />
                        </View>
                        <Text style={{ textAlign: 'center' }}>OR</Text>
                        <View style={styles.socialLogin}>
                            <SocialIcon type='facebook' />
                            <SocialIcon type='google-plus-official' />
                        </View>
                        <Text>Don't have account yet? <Text style={styles.signUp} onPress={() => { Actions.jump('signup') }} >Sign up</Text></Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    onBtnLocalLoginPress() {
        if (!this.isValidForm()) {
            // call API.
        } else {
        }
    }

    isValidForm() {
        let isValid = true;
        const userNameResult = validateUserName(this.state.valueUserName);
        const passwordResult = validatePassword(this.state.valuePassword);

        isValid = userNameResult !== '' && passwordResult !== '';

        this.setState({ errUserName: userNameResult, errPassword: passwordResult })

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
