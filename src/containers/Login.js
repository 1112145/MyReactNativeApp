import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { SocialIcon, Divider, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

const AppLogo = require('../assets/images/logo.png')

class Login extends Component {
   
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.avatarContainer}>
                        <Image style={styles.logo} source={AppLogo} />
                    </View >
                    <View style={styles.localLogin}>
                        <FormLabel>USER NAME</FormLabel>
                        <FormInput placeholder='Enter user name' />
                        <FormValidationMessage></FormValidationMessage>
                        <FormLabel>PASSWORD</FormLabel>
                        <FormInput placeholder='Enter password' secureTextEntry={true} />
                        <FormValidationMessage></FormValidationMessage>
                        <Button buttonStyle={{ marginTop: 20 }} title='LOGIN' backgroundColor='#00BCD4' />
                    </View>
                    <Text style={{ textAlign: 'center' }}>OR</Text>
                    <View style={styles.socialLogin}>
                        <SocialIcon
                            title='Sign In With Facebook'
                            type='facebook'
                        />
                        <SocialIcon
                            title='Sign In With Google Plus'
                            type='google-plus-official' />
                    </View>
                    <Text>Don't have account yet? <Text style={styles.signUp} onPress={() => {  }} >Sign up</Text></Text>
                </View>
            </ScrollView>
        );
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
