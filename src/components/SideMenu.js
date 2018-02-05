import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

class SideMenu extends Component {
    render() {
        return (
            <View>
                <Avatar rounded source={{uri:'https://cdn0.iconfinder.com/data/icons/avatar-vol-2-4/512/9-512.png'}}/>
                <Text>SideMenu</Text>
            </View>
        );
    }
}


export default SideMenu;
