import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

import NewsContextAPI from '../../../contexts/NewsContext' 

import styles from './styles'


export default class TopNews extends Component {
    render() {
        let articles= [];
        
        return (
            <Fragment>


                <View style={styles.container}>
                    <NewsContextAPI.Consumer>
                        {context => articles = context.generalArticles }
                    </NewsContextAPI.Consumer>
                
                
                </View>


            </Fragment>
        )
    }
}
