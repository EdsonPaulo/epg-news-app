
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { fonts, colors, metrics } from '../constants';


// Simple component to render something in place of icon
const TabBarIcon = ({ focused, title }) => {
    const iconName = 
        title === 'HOME' ? 'home-outline' :
        title === 'TECNOLOGIA' ? 'network-outline' : 
        title === 'CIÊNCIA' ? 'flask-outline' :
        title === 'DESPORTO' ? 'soccer' :
        title === 'ENTRETIMENTO ' ? 'play-box-outline' : '';

    const activeTabStyle = focused ? styles.activeTabText : styles.inactiveTabText;

    return (
        <View style={styles.tab}>
            <MaterialCommunityIcons size={25} name={iconName} style={activeTabStyle} />
            <Text style={[activeTabStyle, {fontSize: 10} ]}> {title} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    activeTabText: { 
        color: colors.primaryDark,
        
    },
    inactiveTabText: { 
        color: colors.grayMedium,

    },
})

export default TabBarIcon;