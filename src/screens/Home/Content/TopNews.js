import React, { Component } from 'react'
import { Text, View } from 'react-native'

import API from '../../../services/NewsAPI' 

import styles from './styles'

export default class TopNews extends Component {
    render() {
        return (
            <View>
                <Text> Top </Text>

                <API />

            </View>
        )
    }
}
