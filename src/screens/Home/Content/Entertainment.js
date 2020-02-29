import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

import API from '../../../services/NewsAPI' 

export default class Entertainment extends Component {
    render() {
        return (
            <View>
                <Text> Entertainment </Text>
                <API category='entertainment' />

            </View>
        )
    }
}

