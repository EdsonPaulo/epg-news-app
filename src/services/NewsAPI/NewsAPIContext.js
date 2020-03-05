import React from 'react'
import { View, Text } from 'react-native'

const NewsAPIContext = () => {

    let generalArticles = [];
    let techArticles = [];
    let scienceArticles = [];
    let sportsArticles = [];
    let entertainmentArticles = [];

    let isLoading = false;
    let error = null;

    const NewsApiContext = React.createContext();

    return (
        <NewsApiContext.Provider
            value={ 
                generalArticles,
                techArticles,
                scienceArticles,
                sportsArticles,
                entertainmentArticles,
                isLoading,
                error
        }>

        {this.props.children}

        { /* <NewsList  { ...this.props } { ...this.state } />  */ }

    </NewsApiContext.Provider>
    )
}

export default NewsAPIContext
