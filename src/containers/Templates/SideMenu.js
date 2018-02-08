import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { Avatar, Divider, List, ListItem, Icon } from 'react-native-elements';
import { Actions, ActionConst } from 'react-native-router-flux';
import AppText from '../../components/AppText';
import { DefaultFont } from '../../services/constant';

import { connect } from 'react-redux';


class SideMenu extends Component {

    menuItem = [{
        title: 'Home', icon: 'home', onClick: this.goToHome
    },{
        title: 'Setting', icon: 'settings', onClick: this.goToSetting
    },{
        title: 'Logout', icon: 'power-settings-new', onClick: this.logOut
    }]

    constructor(props){
        super(props);
    }

    
    logOut(){
        AsyncStorage.clear().then(()=>{
            Actions.jump('login');
        });
    }

    goToHome(){
        Actions.home();
    }

    goToSetting(){
        // Actions.setting();
    }

    renderMenuItems() {
        const items = []
        this.menuItem.forEach((item, index) => {
            const icon = <Icon name={item.icon} style={{marginRight: 20}}/>;
            items.push(<ListItem onPress={item.onClick} key={index} title={item.title} 
                        leftIcon={icon} titleStyle={{marginLeft: 10, fontFamily: DefaultFont}}/>)
        });
        return <List >
            {items}
        </List>
    }

    render() {
        return (
            <View style={styles.sideMenu}>
                <View style={styles.avatar}>
                    <Avatar large rounded source={{uri: this.props.user.avatar}}/>
                    <AppText style={{marginTop: 15}}>{this.props.user.user_name}</AppText>
                </View>
                <View style={styles.menuList}>
                    {this.renderMenuItems()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sideMenu:{
        flex: 1,
    },
    avatar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuList: {
        flex: 3
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.auth.data
    }
}


export default connect(mapStateToProps)(SideMenu);
