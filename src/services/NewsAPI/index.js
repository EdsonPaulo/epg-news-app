import React, { Component } from 'react';
import axios from 'axios';

import {NewsList} from '../../components'


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            isLoading: false,
            error: null,
        };
    }
    async componentDidMount() {
        const API_KEY = '923fe32cc9b14b15989b4fb574bc57a9';
        const tempCategory = this.props.category === 'Top' ? 'general' :
                this.props.category === 'Tecnologia' ? 'technology' : 
                this.props.category === 'Ciência' ? 'science' :
                this.props.category === 'Desporto' ? 'sports' :
                this.props.category === 'ENTRETIMENTO ' ? 'entertertainment' : 'general';
        //this.setState({ category:  this.props.category});


        const API = `http://newsapi.org/v2/top-headlines?country=br&category=${tempCategory}&pageSize=100&apiKey=${API_KEY}`;
        const API2 = `http://newsapi.org/v2/top-headlines?country=pt&category=${tempCategory}&pageSize=100&apiKey=${API_KEY}`;

        this.setState({ isLoading: true });
        try {
            const result = await axios.get(API)
            const result2 = await axios.get(API2)
            const totalArticles = result.data.articles.concat(result2.data.articles)
            this.setState({ articles: totalArticles, isLoading: false });
        }
        catch (error) { 
            this.setState({ error, isLoading: false })
            //alert(error);
        }
    }

    render () {
        return (
            <NewsList  { ...this.props } { ...this.state } />
        )
    }
}

export default index;
