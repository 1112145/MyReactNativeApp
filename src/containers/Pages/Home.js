//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


// create a component
class Home extends Component {
    render() {
        
        return (
            <View style={styles.container}>
               <Text>Home Page</Text>
            </View>
        );
    }

  
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
