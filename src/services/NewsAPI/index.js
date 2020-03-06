import React, { Component } from 'react';
import axios from 'axios';

import {NewsList} from '../../components'

const API_KEY = '923fe32cc9b14b15989b4fb574bc57a9';

export const NewsContext = React.createContext();

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            generalArticles: [],
            techArticles: [],
            scienceArticles: [],
            sportsArticles: [],
            entertainmentArticles: [],

            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ 
            generalArticles: this.fetchGeneralArticles(),
            techArticles: this.fetchTechArticles(),
            scienceArticles: this.fetchScienceArticles(),
            sportsArticles: this.fetchSportsArticles(),
            entertainmentArticles: this.fetchEntertainmentArticles(),
        });
    }


    async fetchArticles(category, country) {
        const API = `http://newsapi.org/v2/top-headlines?category=${category}&country=${country}&pageSize=10&apiKey=${API_KEY}`;
        let articles = [];
        this.setState({ isLoading: true });
        try {
            const result = await axios.get(API)
            articles = result.data.articles;
            this.setState({isLoading: false });
            return articles;
        }
        catch (error) { 
            this.setState({ error, isLoading: false })
            return null;
        }
    }

    fetchGeneralArticles () {
        const category = 'general';
        const country = 'br';
        let articlesData = this.fetchArticles(category, country)
        return articlesData;
    }
    fetchTechArticles () {
        const category = 'technology';
        const country = 'pt';
        let articlesData = this.fetchArticles(category, country)
        return articlesData;
    }
    fetchScienceArticles () {
        const category = 'science';
        const country = 'pt';
        let articlesData = this.fetchArticles(category, country)
        return articlesData;
    }
    fetchSportsArticles () {
        const category = 'sports';
        const country = 'pt';
        let articlesData = this.fetchArticles(category, country)
        return articlesData;
    }
    fetchEntertainmentArticles () {
        const category = 'entertertainment';
        const country = 'br';
        let articlesData = this.fetchArticles(category, country)
        return articlesData;
    }

    async fetchSearchArcticles (query) {
        let articlesData = [];
        const API = `http://newsapi.org/v2/everything?q=${query}&language=pt&pageSize=10&apiKey=${API_KEY}`;
        this.setState({ isLoading: true });
        try {
            const result = await axios.get(API)
            articlesData = result.data.articles;
            this.setState({ error, isLoading: false })
            return articlesData;
        }
        catch (error) { 
            this.setState({ error, isLoading: false })
            return null
        }
    }

    render () {
        return (
            <NewsContext.Provider value={{...this.state}}>

                {this.props.children}

                { /* <NewsList  { ...this.props } { ...this.state } />  */ }

            </NewsContext.Provider>
           
        )
    }
}

export default index;
