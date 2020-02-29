import React, { Component } from 'react';
import axios from 'axios';

import {NewsArticle} from '../../components'


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            error: null,
        };
    }
    async componentDidMount() {
        
        
        const API_KEY = '923fe32cc9b14b15989b4fb574bc57a9';

        let category = this.props.category

        const API = category ? `http://newsapi.org/v2/top-headlines?language=pt%pageSize=100&apiKey=${API_KEY}&category=${category}` : 
                    `http://newsapi.org/v2/top-headlines?language=pt%pageSize=100&apiKey=${API_KEY}`

        this.setState({ isLoading: true });
        try {
            const result = await axios.get(API)
            this.setState({ data: result.data.articles, isLoading: false });
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
