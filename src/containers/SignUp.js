import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { SocialIcon, Divider, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

const AppLogo = require('../assets/images/logo.png')

class SignUp extends Component {
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
                        <FormLabel>CONFIRM PASSWORD</FormLabel>
                        <FormInput placeholder='Enter confirm password' secureTextEntry={true} />
                        <FormValidationMessage></FormValidationMessage>
                        <Button buttonStyle={{ marginTop: 20 }} title='SIGN UP' backgroundColor='#F44336' />
                    </View>
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
        width: 50,
        height: 50,
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

//make this component available to the app
export default SignUp;
