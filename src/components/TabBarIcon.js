
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { fonts, colors, metrics } from '../constants';
import TouchableScale from 'react-native-touchable-scale';


// Simple component to render something in place of icon
const TabBarIcon = ({ focused, title }) => {
    const iconName =
        title === 'Tecnologia' ? 'network-outline' : 
        title === 'Ciência' ? 'flask-outline' :
        title === 'Desporto' ? 'soccer' :
        title === 'Entretenimento' ? 'play-box-outline' : '';

    const activeTabStyle = focused ? styles.activeTabText : styles.inactiveTabText;
    const homeTabColor = focused ? colors.accent : colors.primaryDark;

    return (
        <View>
        {
            title === 'Home' ?
            <View style={[styles.homeTabStyle, {backgroundColor: homeTabColor}]}>
                <MaterialCommunityIcons size={25} color='white' name={focused ? 'home' : 'home-outline'} />
            </View>
            :
            <View style={styles.tab}> 
                <MaterialCommunityIcons size={20} name={iconName} style={activeTabStyle} />
                <Text style={[activeTabStyle, {fontSize: 11} ]}>{title}</Text>
            </View>
        }
        </View>
    );
}

const styles = StyleSheet.create({
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: metrics.screenWidth / 4 - 20,
    },
    activeTabText: { 
        color: colors.accent,
        
    },
    inactiveTabText: { 
        color: colors.grayDark,
    },
    homeTabStyle: {
        borderRadius: 15,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default TabBarIcon;