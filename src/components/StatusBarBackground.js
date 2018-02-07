import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

class StatusBarBackground extends Component {
    render() {
        return (
            <View style={styles.statusBarBackground}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        height: StatusBar.currentHeight,
        backgroundColor: "white",
      }
});

export default StatusBarBackground;
