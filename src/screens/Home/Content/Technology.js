import React, { Component, Fragment } from 'react'
import { Text, View } from 'react-native'

import { NewsContext } from '../../../services/NewsAPI';

import {VerticalList} from '../../../components/News';

import styles from './styles'


export default class Technology extends Component {
   // static contextType = NewsContext;
    state = {
        articles: [],
        isLoading: false,
        error: null
    }

    render() {
       

        return (
            <NewsContext.Consumer>
                { (context) => {

                    console.log(context);
                    const { techArticles, isLoading, error } = context;

                    this.setState({articles: techArticles, isLoading, error});

                    return (
                        <View style={styles.container}>
                            <Text>TECNOLOGIA</Text>
                        </View>
                    )

                     // <VerticalList articles={this.state.articles} />
                    }
                }
            </NewsContext.Consumer>
        )
    }
}

