import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class InputControl extends Component {
    render() {
        return (
            <View>
                <FormLabel>{this.props.label}</FormLabel>
                <FormInput placeholder={this.props.placeholder} {...this.props}/>
                <FormValidationMessage>{this.props.validationText}</FormValidationMessage>
            </View>             
        );
    }
}


export default InputControl;
