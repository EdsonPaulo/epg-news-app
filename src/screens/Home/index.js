import React, { Component } from 'react'
import { StatusBar, View, ScrollView, Text, Button } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import {Tabs, Scene, Router, Stack} from 'react-native-router-flux';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import {general, colors} from '../../constants';
import { HomeTabBar, HomeBottomBar, HomeDrawer} from '../../components';

import ScrollableTabBar from '../../components/ScrollableTabBar';

import styles from './styles'
import {Science, Technology, Sport, Entertainment, TopNews} from './Content';

export default class index extends Component {
    
    render() {
        const navigation = this.props.navigation;

        return (
            <View style={general.background}>

            <Text>Home</Text>

                    
            <ScrollableTabView
                style={{ marginTop: 20 }}
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar />}
            >
                <ScrollView tabLabel='Top' > 
                    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                        <Text>Top</Text> 
                        <TopNews />

                    </View>
                </ScrollView>

                <ScrollView tabLabel='Tecnologia' > 
                    <View style={styles.card}>
                        <Text>TECNOLOGIA</Text> 
                        <Technology />
                    </View>
                </ScrollView>

                <ScrollView tabLabel='Ciência'> 
                    <View style={styles.card}>
                        <Text>News</Text>
                        <Text>CIÊNCIA</Text> 
                        <Science />
                    </View>
                </ScrollView>

                <ScrollView tabLabel='Desporto'> 
                    <View style={styles.card}>
                        <Text>News</Text>
                        <Text>DESPORTO</Text> 
                        <Sport />
                    </View> 
                </ScrollView >

                <ScrollView tabLabel='Entretenimento' > 
                    <View style={styles.card}>
                        <Text>News</Text>
                        <Text>ENTRETENIMENTO</Text> 
                        <Entertainment />
                    </View> 
                </ScrollView >
            </ScrollableTabView>
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