'use strict';

import React from 'react';
import {  Text, StyleSheet, View, TouchableOpacity, ScrollView, BackHandler, ToastAndroid, Alert } from 'react-native';
import { Router, Scene, Tabs, Stack, Drawer, Actions, ActionConst } from 'react-native-router-flux';


import {Icon} from 'react-native-elements'

import {Sidebar, TabBarIcon} from '../components';

import { fonts, colors, metrics } from '../constants';

import {Home, WelcomeScreen, SearchScreen, ProfileScreen} from '../screens';
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
          BackHandler.exitApp()
      } 
      else {
          if (Actions.currentScene !== 'main' && Actions.currentScene !== 'home') {
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

            <Scene  key='welcome' component={WelcomeScreen} />

            <Scene initial drawer key="main" openDrawerOffset={100}
              contentComponent={Sidebar}
              drawerIcon={ <Icon name="text" type='material-community' size={25} color="red" />
            }>
                
                <Scene>
                  <Scene key='profile' component={ProfileScreen} />
                </Scene>


                <Scene key="tab" tabs hideNavBar icon={TabBarIcon} initial  showLabel={false} 
                     navigationBarStyle={{backgroundColor: colors.primaryDark, color: 'white'}}
                    type={ActionConst.REPLACE} tabBarStyle={styles.container}>

                    <Scene key="home"  component={Home} title="HOME" />

                    <Scene key="technology"  component={Technology} title="TECNOLOGIA"  />
                    
                    <Scene key="science"  component={Science} title="CIÊNCIA"  />
                    
                    <Scene key="entertainment"  component={Entertainment} title="ENTRETIMENTO "  />
                    
                    <Scene key="sport" component={Sport} title="DESPORTO"  />
                </Scene>

                <Scene key='search' component={SearchScreen} back title='PESQUISAR' />
                
            </Scene>
          </Scene>
        </Router>
    );
  }
}


const styles = StyleSheet.create({
  container: {
      borderTopColor: colors.grayMedium,
      backgroundColor: colors.white,
      justifyContent:'space-between',
      height: 60,
  },
})