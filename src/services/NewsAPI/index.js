import React, { Component } from 'react';
import {View, Text, Image,TouchableOpacity } from 'react-native';
import axios from 'axios';


import { StyleSheet } from 'react-native'

import {general, colors, fonts} from '../../constants';

const API_KEY = '923fe32cc9b14b15989b4fb574bc57a9';

const API = `http://newsapi.org/v2/top-headlines?language=pt&apiKey=${API_KEY}`;

const DEFAULT_QUERY = 'redux';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            isLoading: false,
            error: null,
        };
    }
    async componentDidMount() {
        this.setState({ isLoading: true });
        
        try {
            const result = await axios.get(API)
            this.setState({
                news: result.data.articles,
                isLoading: false
            });
        }
        catch (error) { 
            this.setState({
                error,
                isLoading: false,
            })
            alert(error);
        }
    }

    render () {
        return (
            <View>  
            {
                this.state.news.map( article => {
                    return (
                        <TouchableOpacity style={styles.container} onPress={() => {alert(article.content)}} >
                            <Image style={styles.img}  source={{uri: article.urlToImage}} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.title}> { article.title.trim() } </Text>
                                <Text style={styles.date}> { article.publishedAt } </Text>
                            </View>
                        </TouchableOpacity>
                    
                    )
                })
            
            /**
                const App = ({ data, isLoading, error }) => {
                    if (!data) return <p>No data yet ...</p>;
                    if (error) return <p>{error.message}</p>;
                    if (isLoading) return <p>Loading ...</p>;
                    return (
                        {data.hits.map(hit =>
                          <li key={hit.objectID}>
                            <a href={hit.url}>{hit.title}</a>
                          </li>
                        )}
                    );
                  }
             */

            }
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        width: '90%',
        height: 100,
        flexDirection: 'row',
        margin: 5,
        elevation: 5,
        alignItems: 'center'
    },
    img: {
        width: '30%',
        height: 100
    },

    infoContainer: {
        padding: 10,
        textAlign: 'justify',

        width: '75%',
    },
    title: {
        color: colors.primaryDark,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,

    },
    date: {
        color: colors.grayDark,
        fontSize: 11,

    },
    activeTabTextStyle: {
    },

})

export default index;
