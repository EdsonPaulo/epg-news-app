import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';
import BlueScreen from './BlueScreen';
import MaizeScreen from './MaizeScreen';
import GoldScreen from './GoldScreen';
import BlackScreen from './BlackScreen';
import ModalScreen from './ModalScreen';
import { HomeBottomBar, HomeTabBar } from '../../components';

// Simple component to render something in place of icon
const TabIcon = ({ focused, title }) => {
  return (
    <Text style={{color: focused ? 'green' :'red'}}>{title}</Text>
  );
}

const App = () => {
  return (
    <Router>
      <Scene key="root">
        {/* Tab Container */}
        <Scene
          key="tabbar"
          tabs={true}
          tabBarComponent={HomeTabBar}
          tabBarStyle={{ backgroundColor: 'gold' }}
        >
          {/* Tab and it's scenes */}
          <Scene key="osu" title="HOME" icon={TabIcon}>
            <Scene
              key="scarlet"
              component={ScarletScreen}
              title="Scarlet"
            />
            <Scene
              key="gray"
              component={GrayScreen}
              title="Gray"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="um" title="PROFILE" icon={TabIcon}>
            <Scene
              key="blue"
              component={BlueScreen}
              title="Blue"
            />
            <Scene
              key="maize"
              component={MaizeScreen}
              title="Maize"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="vu" title="SETTINGS" icon={TabIcon}>
            <Scene
              key="gold"
              component={GoldScreen}
              title="Gold"
            />
            <Scene
              key="black"
              component={BlackScreen}
              title="Black"
            />
          </Scene>
        </Scene>

        <Scene
          key="modal"
          direction="vertical"
          component={ModalScreen}
          title="Modal"
          hideNavBar
        />
      </Scene>
    </Router>
  );
}

export default App;
