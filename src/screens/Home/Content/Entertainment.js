import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

import NewsContextAPI from '../../../contexts/NewsContext' 


export default class Entertainment extends Component {
    render() {
        let articles= [];

        return (
            <Fragment>


                <View style={styles.container}>
                    
                    <NewsContextAPI.Consumer>
                        { context => articles = context.techArticles }
                    </NewsContextAPI.Consumer>
                    


                
                </View>


            </Fragment>
        )
    }
}

