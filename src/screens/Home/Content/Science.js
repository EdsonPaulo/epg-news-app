import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

import { NewsContext } from '../../../services/NewsAPI';

import {VerticalList, FetchStatus} from '../../../components/News';

import styles from './styles'
import { colors } from '../../../constants';

export default class Science extends Component {
    render() {
        return (
            <NewsContext.Consumer>
            { (context) => {

                const { scienceArticles, isLoading, error } = context;

                return (
                    <View  style={styles.container} >
                        
                        <ScrollView showsVerticalScrollIndicator={false} style={{ }}>
                        
                            <Text style={styles.title}>CIÊNCIA</Text>
                        
                            <FetchStatus articles={scienceArticles} isLoading={isLoading} error={error}  />

                            <VerticalList articles={scienceArticles} />
                        
                        </ScrollView>
                     
                    </View>
                )

                }
            }
        </NewsContext.Consumer>
        )
    }
}
