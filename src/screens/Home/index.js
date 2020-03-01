import React, { Component } from 'react'
import { StatusBar, View, ScrollView, Text, Button } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import {general, colors} from '../../constants';
import { HomeBottomBar, HomeDrawer} from '../../components';


import styles from './styles'
import {Science, Technology, Sport, Entertainment, TopNews} from './Content';

export default class index extends Component {
    
    render() {
        const navigation = this.props.navigation;

        return (
            <View style={general.background}>

              

                
                <HomeBottomBar />


                {/*        
                    <Router>
                        <Tabs>
                            <Scene key='science' hideNavBar component={Science} title='CIÊNCIA'/>
                            <Scene key='sport' hideNavBar component={Sport} title='DESPORTO'/>
                            <Scene key ='technology' hideNavBar component={Technology}  title='TECNOLOGIA'/>
                        </Tabs>
                    </Router>
                */}  

        </View>
        )
    }
}