import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, Switch } from 'react-native'
import { colors, metrics } from '../constants'
import TouchableScale from 'react-native-touchable-scale'
import { Icon } from 'react-native-elements'

const Sidebar = () => {
   
    return (
        <View style={styles.container}>

            <View style={{backgroundColor: colors.primaryDark, height: 200}}>

            </View>

            <View style={styles.menuContainer}>

                <Switch
                    style={{ marginTop: 30 }}
                />
        
                <TouchableScale style={styles.menuItem}>
                    <Icon name='person' color={colors.primaryDark} />
                    <Text style={styles.menuItemText}> Perfil </Text> 
                </TouchableScale>

                <View style={styles.divider}/>

                <TouchableScale style={styles.menuItem}> 
                    <Icon name='star' color={colors.primaryDark} />
                    <Text style={styles.menuItemText}> Favoritos </Text> 
                </TouchableScale>

                <View style={styles.divider}/>

                <TouchableScale style={styles.menuItem}>
                    <Icon name='settings'  color={colors.primaryDark} />
                    <Text style={styles.menuItemText}> Definições </Text> 
                </TouchableScale>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: colors.white,
        height: '100%'
    },
    menuContainer: {
        padding: metrics.doubleBaseMargin,

    },
    menuItem: {
        borderRadius: 10, 
        alignItems: 'center', 
        padding: 5, 
        flexDirection:  'row'
    },
    menuItemText: {
        marginHorizontal: 10,
        fontSize: 15,
        color: colors.accent
    },

    divider: {
        alignSelf: 'center',
        width: '100%',
        height: 1,
        marginVertical: 5,
        backgroundColor: colors.grayLight,
    },

})

export default Sidebar;