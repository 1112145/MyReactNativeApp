import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SocialIcon, Avatar } from 'react-native-elements';

const AppLogo = require('../assets/images/logo.png')

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.logo}
                        source={AppLogo}
                    />
                </View >
                <View style={styles.authenticateContainer}>
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

            </View>
        );
    }

    onBtnLoginClick() {
        alert('click!')
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        height: '100%'
    },
    avatarContainer: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    authenticateContainer: {
        flex: 1
    },
    logo: {
        width: 100,
        height: 100
    }
});

export default Login;
