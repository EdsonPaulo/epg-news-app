'use strict';
import React from 'react';
import { View, BackHandler, ToastAndroid, Alert } from 'react-native';
import {Router, Scene, Actions} from 'react-native-router-flux';

import {Home, Welcome} from '../screens/';


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
          'Saindo do APP', 'Deseja sair do app?',
          [
            {text: 'Sim', onPress: () => BackHandler.exitApp()},
            {text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          ],
          { cancelable: true });
          return true;
        // BackHandler.exitApp()
      } 
      else {
          if (Actions.currentScene !== 'home') {
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
        <Scene key="root" hideNavBar>
      		<Scene key='welcome' component={Welcome} />
          <Scene key='home' component={Home} initial />
        </Scene>
    	</Router>

      
        /**
         * 
         *   
  <Router
    createReducer={reducerCreate}
    onStateChange={stateHandler}
    getSceneStyle={getSceneStyle}
    uriPrefix={prefix}>
    <Overlay key="overlay">
      <Modal key="modal" hideNavBar transitionConfig={transitionConfig}>
        <Lightbox key="lightbox">
          <Stack key="root" hideNavBar titleStyle={{ alignSelf: 'center' }}>

            <Drawer
              hideNavBar
              key="drawer"
              onExit={() => {
                console.log('Drawer closed');
              }}
              onEnter={() => {
                console.log('Drawer opened');
              }}
              contentComponent={DrawerContent}
              drawerIcon={MenuIcon}
              drawerWidth={300}>
              <Scene hideNavBar>
                <Tabs
                  key="tabbar"
                  backToInitial
                  onTabOnPress={() => {
                    console.log('Back to initial and also print this');
                  }}
                  swipeEnabled
                  tabBarStyle={styles.tabBarStyle}
                  activeBackgroundColor="white"
                  inactiveBackgroundColor="rgba(255, 0, 0, 0.5)">
                  <Scene
                    key="main_home"
                    component={HomeScreen}
                    title="Home"
                    tabBarLabel="Home"
                    icon={TabBarIcon}
                  />
                  <Scene
                    key="main_links"
                    component={LinksScreen}
                    title="Links"
                    tabBarLabel="Links"
                    icon={TabBarIcon}
                  />
                  <Scene
                    key="main_settings"
                    component={SettingsScreen}
                    title="Settings"
                    tabBarLabel="Settings"
                    icon={TabBarIcon}
                  />
                </Tabs>
              </Scene>
            </Drawer>
          </Stack>
        </Lightbox>
      </Modal>
    </Overlay>
  </Router>


         */


      
    );
  }

  
}