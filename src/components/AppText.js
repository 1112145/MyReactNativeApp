import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { DefaultFont } from '../services/constant'

class AppText extends Component {

    constructor(props) {
        super(props)
        this.style = [{fontFamily: DefaultFont}]; 
        if(props.style) {
          if(Array.isArray(props.style) ) {
            this.style = this.style.concat(props.style)
          } else {
            this.style.push(props.style)
          }
        }
    }

    render() {
        return (
            <Text {...this.props} style={this.style}>{this.props.children}</Text>
        );
    }
}


export default AppText;
