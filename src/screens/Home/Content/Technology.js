import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

import { NewsContext } from '../../../services/NewsAPI';

import {VerticalList, FetchStatus} from '../../../components/News';

import styles from './styles'
import { colors } from '../../../constants';


export default class Technology extends Component {
    render() {
        return (
            <NewsContext.Consumer>
            { (context) => {

                const { techArticles, isLoading, error } = context;

                return (
                    <View  style={styles.container} >
                        
                        <ScrollView showsVerticalScrollIndicator={false} style={{ }}>
                        
                            <Text style={styles.title}>TECNOLOGIA</Text>
                        
                            <FetchStatus articles={techArticles} isLoading={isLoading} error={error}  />

                            <VerticalList articles={techArticles} />
                        
                        </ScrollView>
                        
                    </View>
                )
                }
            }
            </NewsContext.Consumer>
        )
    }
}