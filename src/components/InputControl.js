import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { DefaultFont } from '../services/constant';

class InputControl extends Component {
    render() {
        return (
            <View>
                <FormLabel fontFamily={DefaultFont}>{this.props.label}</FormLabel>
                <FormInput inputStyle={{ fontFamily: DefaultFont}} placeholder={this.props.placeholder} {...this.props}/>
                <FormValidationMessage>{this.props.validationText}</FormValidationMessage>
            </View>             
        );
    }
}


export default InputControl;
