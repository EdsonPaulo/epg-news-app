import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

import { NewsContext } from '../../../services/NewsAPI';

import {VerticalList, FetchStatus} from '../../../components/News';

import styles from './styles'
import { colors } from '../../../constants';

export default class Entertainment extends Component {
    render() {
        let articles= [];

        return (
            <NewsContext.Consumer>
            { (context) => {

                const { entertainmentArticles, isLoading, error } = context;

                return (
                    <View  style={styles.container} >
                        
                        <ScrollView showsVerticalScrollIndicator={false} style={{ }}>
                        
                            <Text style={styles.title}>ENTRETENIMENTO</Text>
                        
                            <FetchStatus articles={entertainmentArticles} isLoading={isLoading} error={error}  />
                            <VerticalList articles={entertainmentArticles} />
                        
                        </ScrollView>
                     
                    </View>
                )
                    }
                }
            </NewsContext.Consumer>
        )
    }
}

