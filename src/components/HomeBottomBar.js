import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native'
import { Router, Scene } from 'react-native-router-flux';

import { Ionicons } from '@expo/vector-icons';

import {TopNews, Science, Technology, Sport, Entertainment} from '../screens/Home/Content';
import { fonts, colors, metrics } from '../constants';


export default class HomeBottomBar extends Component {
    render() {
        return (
            <Router>
                {/* Tab Container */}
                <Scene key="tabbar" icon={TabIcon} tabs={true} tabBarStyle={styles.container} hideNavBar  activeTintColor={colors.accent} >
                    {/* Tab and it's scenes */}
                    <Scene key="top" component={TopNews} title="Top" />
                    
                    <Scene key="technology" component={Technology} title="Tecnologia"  />
                    
                    <Scene key="science" component={Science} title="Ciência"  />
                    
                    <Scene key="entertainment" component={Entertainment} title="Entretenimento"  />
                    
                    <Scene key="sport" component={Sport} title="Desporto"  />
                </Scene>
            </Router>
        )
    }
}

// Simple component to render something in place of icon
const TabIcon = ({ focused, title }) => {
    const iconName = 
        title === 'Top' ? 'ios-trending-up' :
        title === 'Tecnologia' ? 'ios-radio' : 
        title === 'Ciência' ? 'ios-flask' :
        title === 'Desporto' ? 'ios-football' :
        title === 'Entretenimento' ? 'md-film' : '';

    const activeTabStyle = focused ? styles.activeTabText : styles.inactiveTabText;

    return (
        <View style={styles.tab}>
            <Ionicons size={30} name={iconName} style={activeTabStyle} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderTopColor: 'darkgrey',
        borderTopWidth: 1,
        opacity: 0.98,
        justifyContent:'space-between',
        color: colors.primaryDark,
        height: 55
    },
    item: {
        marginHorizontal: metrics.baseMargin,
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        width: metrics.screenWidth / 5 - 10,
        height: '100%'
    },
    activeTabText: { 
        fontWeight: 'bold',
        color: colors.accent,
    },
    inactiveTabText: { 
        color: colors.grayDark,
    },

})
