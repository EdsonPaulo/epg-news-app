import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

import API from '../../../services/NewsAPI' 


export default class Science extends Component {
    render() {
        return (
            <View style={styles.container}>
                <API style={styles.listContainer} category='science' />

            </View>
        )
    }
}
