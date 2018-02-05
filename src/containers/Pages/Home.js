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
                {/* <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'SANYANG APP', style: { color: '#fff' } }}/>
                <Text>Home</Text> */}
               <Text>Home Page</Text>
            </View>
        );
    }

  
}



// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Home;
