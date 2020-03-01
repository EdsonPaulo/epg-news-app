import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

import API from '../../../services/NewsAPI' 

export default class Entertainment extends Component {
    render() {
        return (
            <View style={styles.container}>
                <API category='entertainment' />

            </View>
        )
    }
}

