import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = '923fe32cc9b14b15989b4fb574bc57a9';

export const NewsContext = React.createContext();

export default class index extends Component {

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

      this.fetchAllCategory();

    }


    async fetchAllCategory () {
        console.log('REQUESTING API');
        this.setState({ isLoading: true });

        const urlsAPI = [
            axios.get(`http://newsapi.org/v2/top-headlines?category=general&country=br&pageSize=20&apiKey=${API_KEY}`), //general
            axios.get(`http://newsapi.org/v2/top-headlines?category=technology&country=pt&pageSize=20&apiKey=${API_KEY}`), //technology
            axios.get(`http://newsapi.org/v2/top-headlines?category=science&country=pt&pageSize=20&apiKey=${API_KEY}`),    //science
            axios.get(`http://newsapi.org/v2/top-headlines?category=sports&country=pt&pageSize=20&apiKey=${API_KEY}`),    //sports
            axios.get(`http://newsapi.org/v2/top-headlines?category=entertainment&country=br&pageSize=20&apiKey=${API_KEY}`) //entertertainment
        ];
        try {
            const responses = await axios.all(urlsAPI);
            this.setState({
                generalArticles: responses[0].data.articles,
                techArticles: responses[1].data.articles,
                scienceArticles: responses[2].data.articles,
                sportsArticles: responses[3].data.articles,
                entertainmentArticles: responses[4].data.articles,
            });
        }
        catch (error) { 
            console.log(error);
            this.setState({ error })
        }
        finally { this.setState({ isLoading: false }) }
    }
 


    render () {
        return (
            <NewsContext.Provider value={ {...this.state} }>
                {this.props.children}
            </NewsContext.Provider>
        )
    }
}