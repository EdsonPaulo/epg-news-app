import React, { Component } from 'react'
import { Text, View } from 'react-native'

import API from '../../../services/NewsAPI' 

                
import styles from './styles'


export default class Technology extends Component {
    render() {
        return (
            <View style={styles.container}>
                <API category='Tecnologia' />

            </View>
        )
    }
}

