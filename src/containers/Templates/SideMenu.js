import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { Avatar, Divider, List, ListItem, Icon } from 'react-native-elements';
import { Actions, ActionConst } from 'react-native-router-flux';



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

        this.state = {
            avatar_uri: 'http://media.bizwebmedia.net/sites/76685/data/Upload/2014/9/kien_thuc_chup_anh_2.jpg',
            user_name: 'Nguyen Dang Khoa' 
        }
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
            items.push(<ListItem onPress={item.onClick} key={index} title={item.title} leftIcon={<Icon name={item.icon} />}/>)
        });
        return <List >
            {items}
        </List>
    }

    render() {
        return (
            <View>
                <View style={styles.avatar}>
                    <Avatar large rounded source={{uri: this.state.avatar_uri}}/>
                    <Text style={{marginTop: 15}}>{this.state.user_name}</Text>
                </View>
                <View >
                    {this.renderMenuItems()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 50
    },
});


export default SideMenu;
