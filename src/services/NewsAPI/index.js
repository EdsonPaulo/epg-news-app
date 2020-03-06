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

            searchArticles: [],

            isLoading: false,
            error: null,
        };
    }

    async componentDidMount() {

        /** 
        if(!this.state.isLoading)
            this.setState({ 
            generalArticles: await this.fetchGeneralArticles(),
            techArticles: await this.fetchTechArticles(),
            scienceArticles: await this.fetchScienceArticles(),
            sportsArticles: await this.fetchSportsArticles(),
            entertainmentArticles: await this.fetchEntertainmentArticles(),
        });

       // console.log(this.state.techArticles)

       */

      this.fetchAllCategory();
        
       
    }


    //rEUI
    
    async fetchAllCategory () {
        console.log('REQUESTING API');
        this.setState({ isLoading: true });

        const urlsAPI = [
            axios.get(`http://newsapi.org/v2/top-headlines?category=general&country=br&pageSize=10&apiKey=${API_KEY}`), //general
            axios.get(`http://newsapi.org/v2/top-headlines?category=technology&country=pt&pageSize=10&apiKey=${API_KEY}`), //technology
            axios.get(`http://newsapi.org/v2/top-headlines?category=science&country=pt&pageSize=10&apiKey=${API_KEY}`),    //science
            axios.get(`http://newsapi.org/v2/top-headlines?category=sports&country=pt&pageSize=10&apiKey=${API_KEY}`),    //sports
            axios.get(`http://newsapi.org/v2/top-headlines?category=entertertainment&country=pt&pageSize=10&apiKey=${API_KEY}`) //entertertainment
        ];
        try {
            const responses = await axios.all(urlsAPI);
            this.setState({
                generalArticles: responses[0].data.articles,
                techArticles: responses[1].data.articles,
                scienceArticles: responses[2].data.articles,
                sportsArticles: responses[3].data.articles,
                entertainmentArticles: responses[4].data.articles
            });
        }
        catch (errors) { 
            console.log(errors);
            this.setState({ error })
        }
        finally {
            this.setState({ isLoading: false })
        }
    }
 
    async fetchSearchArcticles (query) {
        let articlesData = [];
        const API = `http://newsapi.org/v2/everything?q=${query}&language=pt&pageSize=10&apiKey=${API_KEY}`;
        this.setState({ isLoading: true });
        try {
            const result = await axios.get(API)
            articlesData = result.data.articles;
            this.setState({ searchArticles: articlesData })
            //return articlesData;
        }
        catch (error) { 
            this.setState({ error })
            //return null
        }
        finally {
            this.setState({ isLoading: false })
        }
    }

    render () {
        return (
            <NewsContext.Provider value={{...this.state}}>
                {this.props.children}
            </NewsContext.Provider>
        )
    }
}

export default index;
