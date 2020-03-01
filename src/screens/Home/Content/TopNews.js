import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

import API from '../../../services/NewsAPI' 

import styles from './styles'
import {  } from 'react-native-gesture-handler'

export default class TopNews extends Component {
    render() {
        return (
            <View style={styles.container}>
                <API category='general' />
            </View>
        )
    }
}
