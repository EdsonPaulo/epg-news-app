import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import API from '../../../services/NewsAPI' 

export default class Technology extends Component {
    render() {
        return (
            <View>
                <Text> TECHNOLOGY </Text>
                <API />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
