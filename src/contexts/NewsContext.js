import React from 'react'

export const NewsContext = React.createContext();

export default class NewsContextProvider extends React.Component {

    state = {
        generalArticles: [],
        techArticles: [{title: 'Eu sou mau'}, {title: 'Eu sou crack'}],
        scienceArticles: [],
        sportsArticles: [],
        entertainmentArticles: [],
    
        isLoading: false,
        error: null
    }

    render() {
        return (
            <NewsContext.Provider value={{...this.state}}>
                {this.props.children}
            </NewsContext.Provider>
        )
    }
}
