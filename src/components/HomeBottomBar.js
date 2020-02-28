import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { colors, metrics } from '../constants'

export default class HomeBottomBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        color: colors.primaryDark,
        flexDirection: 'row',

    },
    item: {
        marginHorizontal: metrics.baseMargin,
    }

})
