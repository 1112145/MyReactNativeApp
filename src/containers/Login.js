//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SocialIcon, Avatar } from 'react-native-elements';

const AppLogo = require('../assets/images/logo.png')

// create a component
class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={AppLogo}
                />
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                />
                <SocialIcon
                    title='Sign In With Google Plus'
                    button
                    type='google-plus-official'
                />
            </View>
        );
    }

    onBtnLoginClick() {
        alert('click!')
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    logo: {
        width: 100,
        height: 100
    }
});

//make this component available to the app
export default Login;
