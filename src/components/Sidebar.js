import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { colors } from '../constants'

const Sidebar = () => {
   
    return (
        <View style={styles.container}>
            <Text> textInComponent </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.primaryDark,
        height: '100%'

    },

})

export default Sidebar;