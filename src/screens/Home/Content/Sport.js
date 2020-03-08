import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

import { NewsContext } from '../../../services/NewsAPI';

import {VerticalList, FetchStatus} from '../../../components/News';

import styles from './styles'
import { colors } from '../../../constants';

export default class Sport extends Component {
    render() {
        return (
            <NewsContext.Consumer>
            { (context) => {

                const { sportsArticles, isLoading, error } = context;

                return (
                    <View  style={styles.container} >
                        
                        <ScrollView showsVerticalScrollIndicator={false} style={{ }}>
                        
                            <Text style={styles.title}>DESPORTO</Text>
                        
                            <FetchStatus articles={sportsArticles} isLoading={isLoading} error={error}  />

                            <VerticalList articles={sportsArticles} />
                        
                        </ScrollView>
                     
                    </View>
                )

                    }
                }
            </NewsContext.Consumer>

        )
    }
}
