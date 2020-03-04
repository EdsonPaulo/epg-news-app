'use strict';

import React from 'react';
import {  Text, StyleSheet, View, TouchableOpacity, ScrollView, BackHandler, ToastAndroid, Alert } from 'react-native';
import { Router, Scene, Tabs, Stack, Drawer, Actions, ActionConst } from 'react-native-router-flux';

import {Header, Icon} from 'react-native-elements'

import TouchableScale from 'react-native-touchable-scale'


import {Sidebar, TabBarIcon} from '../components';

import { fonts, colors, metrics } from '../constants';

import {Home, WelcomeScreen, SearchScreen, ProfileScreen, ArticleScreen} from '../screens';
import {TopNews, Science, Technology, Sport, Entertainment} from '../screens/Home/Content';

  var backButtonPressedToExit = false;

  export default class index extends React.Component {
  
    componentDidMount(){
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
    }
  
    componentWillUnmount(){
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress.bind(this));
    }
  
    onBackPress() {

        if (backButtonPressedToExit) {
          Alert.alert(
            'Saindo do app', 'Deseja sair?',
            [
              {text: 'Não', style: 'cancel'},
              {text: 'Sim', onPress: () => BackHandler.exitApp()},
            ],
            { cancelable: true });
            
          //BackHandler.exitApp()
          return true;
        } 
        else {
            if (Actions.currentScene !== '_home') {
                Actions.pop();
                return true;
            } 
            else {
                backButtonPressedToExit = true;
                ToastAndroid.show("Pressione novamente para sair",ToastAndroid.SHORT);
                //tempo de atraso para desactivar o primeiro clique no backButton
                setTimeout( () => { backButtonPressedToExit = false }, 2000 );
                return true;
            }
        }
    }
  
  render() {

    return (

        <Router backAndroidHandler={this.onBackPress}>
          
          <Scene hideNavBar key='root'>

            <Scene key='welcome' component={WelcomeScreen} />


            <Scene initial drawer key='main' openDrawerOffset={100} contentComponent={Sidebar} >
                
                <Scene key="tab" tabs hideNavBar icon={TabBarIcon} showLabel={false} 
                    navBar={() => 
                      <Header 
                          placement="center"
                          backgroundColor={colors.white}
                          leftComponent={
                            <TouchableScale onPress={() => Actions.drawerOpen()} style={styles.headerButton} activeScale={1.3}>
                                <View style={styles.menuIcon} />
                                <View style={[styles.menuIcon, {width: 15}]}/>
                            </TouchableScale>
                          }
                          centerComponent={{ text: 'EPG NEWS',  style: { color: 'black', fontSize: 16, fontWeight: 'bold' } }}
                          rightComponent={
                            <TouchableScale onPress={() => Actions.search()} style={styles.headerButton} activeScale={1.3}>
                                <Icon name='search' color='black' />
                            </TouchableScale>
                          }
                      />
                    } 
                   
                    tabBarStyle={styles.container}>

                    <Scene key="home" component={Home} title="HOME" />

                    <Scene key="technology"  component={Technology} title="TECNOLOGIA" />
                    
                    <Scene key="science"  component={Science} title="CIÊNCIA" />
                    
                    <Scene key="entertainment"  component={Entertainment} title="ENTRETIMENTO" />
                    
                    <Scene key="sport" component={Sport} title="DESPORTO" />
                </Scene>

                <Scene key='search' hideNavBar component={SearchScreen} title='PESQUISAR' />

                <Scene key='arcticle' component={ArticleScreen} back />
                
                <Scene key='profile' component={ProfileScreen} />
                
            </Scene>
          </Scene>
        </Router>
    );
  }
}


const styles = StyleSheet.create({
  container: {
      borderTopColor: colors.grayLight,
      borderTopWidth: 2,
      backgroundColor: colors.white,
      justifyContent:'space-between',
      height: 55,
  },
  headerButton: {
    height: '100%', 
    backgroundColor: 'transparent', 
    justifyContent:  'center'
  },
  menuIcon: {
    marginVertical: 2, 
    width: 20, 
    height: 3, 
    backgroundColor: 'black', 
    borderRadius: 4

  },
})