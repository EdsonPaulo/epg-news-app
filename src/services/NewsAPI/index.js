import React, { Component } from 'react';
import {View, Text, Image,TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

import {NewsArticle} from '../../components'

const API_KEY = '923fe32cc9b14b15989b4fb574bc57a9';
const API = `http://newsapi.org/v2/top-headlines?language=pt&apiKey=${API_KEY}`;

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
            this.setState({ news: result.data.articles, isLoading: false });
        }
        catch (error) { 
            this.setState({ error, isLoading: false })
            alert(error);
        }
    }

    render () {
        return (
            <NewsArticle  { ...this.props } { ...this.state } />
        )
    }
}

export default index;
