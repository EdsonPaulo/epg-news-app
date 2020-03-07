import React, { Component, Fragment } from 'react'
import { Text, View, ScrollView } from 'react-native'

import { NewsContext } from '../../../services/NewsAPI';

import {VerticalList, FetchStatus} from '../../../components/News';

import styles from './styles'


export default class Technology extends Component {
   // static contextType = NewsContext;
    state = {
       
    }

    render() {
       

        return (
            <NewsContext.Consumer>
                { (context) => {

                    const { techArticles, isLoading, error } = context;

                    console.log(isLoading);



                    return (
                        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                            <Text>TECNOLOGIA</Text>
                            {

                            }

                            <FetchStatus articles={techArticles} isLoading={isLoading} error={error}  />

                            <VerticalList articles={techArticles} />
                        </ScrollView>
                    )

                     // <VerticalList articles={this.state.articles} />
                    }
                }
            </NewsContext.Consumer>
        )
    }
}

