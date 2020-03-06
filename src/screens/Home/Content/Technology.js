import React, { Component, Fragment } from 'react'
import { Text, View } from 'react-native'

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
                        <View style={styles.container}>
                            <Text>TECNOLOGIA</Text>
                            {
                               

                            }
                            <VerticalList articles={techArticles} />
                        </View>
                    )

                     // <VerticalList articles={this.state.articles} />
                    }
                }
            </NewsContext.Consumer>
        )
    }
}

