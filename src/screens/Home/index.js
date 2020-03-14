import React, { Component } from 'react'
import { StatusBar, View, ScrollView, Text, Button, TouchableNativeFeedback } from 'react-native';

import { Actions, Tabs, Scene, Router} from 'react-native-router-flux'

import { Header, Icon } from 'react-native-elements';

import {general, colors} from '../../constants';

import styles from './styles'

import { NewsContext } from '../../services/NewsAPI';

import {VerticalList, FetchStatus} from '../../components/News';


export default class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
       
        };
    }
    
    render() {
        return (
            <NewsContext.Consumer>
                { (context) => {
                    const { generalArticles, isLoading, error } = context;

                    return (
                        <ScrollView style={styles.container}>
                            <Text>HOME SCREEN</Text>
                            {
                            /** 
                                isLoading ? null :
                                !generalArticles 
                                    ? <Text>Sem dados</Text> :
                                
                                generalArticles.map((article, index) => {
                                    return (
                                        <View style={{width: '100%', elevation: 3, backgroundColor: 'whitesmoke', margin:10}}>
                                            <Text>{index}. Título: {article.title}</Text>
                                            <Text>Imagem: {article.urlToImage}</Text>
                                        </View>
                                    )
                                })
                            */
                            }

                            <FetchStatus articles={generalArticles} isLoading={isLoading} error={error}  />

                        </ScrollView>
                    )
                     // <VerticalList articles={this.state.articles} />
                    }
                }
            </NewsContext.Consumer>
        )
    }
}