import React, {useState} from 'react';
import {
    View, 
    Text, 
    FlatList, 
    ActivityIndicator,
} from 'react-native';

import { ListItem} from 'react-native-elements'
import { HorizontalListItem, VerticalListItem } from './NewsItem';
import {colors} from '../../constants';
import styles from './styles'   

const renderFetchStatus = (articles, isLoading, error) => {

    if (!articles) 
        return ( 
            <View>
                <Text>Nenhum dado encontrado</Text>
            </View>
        );

    if (error) 
        return ( 
            <View>
                <Text>Ocorreu um erro: {error.message}</Text>
            </View>
        );

    if (isLoading)
        return (
            <View style={{alignSelf: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size="large" color={colors.accent} />
            </View>
        );

}

//metodo para obter os 10 primeiros artigos da lista
function topArticles (articles) {
    let top = [];
    articles.map(( item, index) => {
        if(index <= 9) 
            top.push( item );
    })
    return top;
}

//metodo para obter todos  artigos da lista menos os 10 primeiros
function restArticles (articles) {
    let rest = [];
    articles.map(( item, index) => {
        if(index > 9) 
            rest.push( item );
    })
    return rest;
}

//renderiza uma flat list na horizontal
export function renderHorizontalList (articles)
{
    const topArticlesData = topArticles (articles);
    return (
        <FlatList 
            style={{height: 250}}
            data={ topArticlesData }
            renderItem={ HorizontalListItem } 
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    )
}

export function renderVerticalList (articles, category)
{
    const articlesData = restArticles (articles);
    return (
        <FlatList 
            style={{padding: 10}}
            data={ articlesData }
            renderItem={ VerticalListItem } 
            ListHeaderComponent={() => {
            return (<Text style={{fontWeight: 'bold', fontSize: 14, textTransform: 'uppercase'}}>{category}</Text>)}}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
        /> 
    )
}

const NewsList = ({ articles, isLoading, error }) => 
{
    return (
        <View style={styles.container}> 


            { renderHorizontalList(articles) }
            
            { renderFetchStatus(articles, isLoading, error) } 

           
            {
                articles.map((article, i) => (
                <ListItem
                    
                    key={i}
                    leftAvatar={{ source: { uri: article.urlToImage } }}
                    title={article.title}
                    subtitle={article.date}
                    bottomDivider
                    
                />
                ))
            }


            {// renderVerticalList(articles, category)
             } 

        </View>
    )
}

export default NewsList;