import React, { useState } from 'react';

import {
    View, 
    Text, 
    StyleSheet,
    ActivityIndicator,
    ScrollView
} from 'react-native';

import { Image, Card, Button, Icon, ListItem } from 'react-native-elements';

import TouchableScale from 'react-native-touchable-scale';

import {Actions} from 'react-native-router-flux'

import {general, colors, fonts, metrics} from '../../constants';

import DateFormat from '../../util/DateFormat'


const VerticalListItem = ( article, index ) => {
    return (         
        <ListItem
            key={index}
            onPress={() => {Actions.article(article)}}
            title={article.title.toString().trim()}
            titleStyle={styles.articleTitle}
            
            subtitle={ DateFormat(article.publishedAt) } 
            subtitleStyle={styles.articleSubtitle}
            
            leftElement={
                <View style={styles.imgContainer}>
                    <Image resizeMode='stretch' 
                        borderRadius={35}
                        PlaceholderContent={<ActivityIndicator size='small' color={colors.accent} />} 
                        placeholderStyle={{backgroundColor: colors.grayLight}}
                        source={{uri: article.urlToImage}}  
                        style={styles.img}
                    />
                </View>
            }
            Component={TouchableScale}
            activeScale={0.9}
        />
    )
}


function NewsVerticalList (props) {
    let articlesArray = [];
    articlesArray = props.articles
    return (
        <View>
            {  articlesArray.map((article , index) => VerticalListItem(article, index) )  }
        </View>
    )
}

const styles = StyleSheet.create({

    imgContainer: {
        width: 100, 
        height: 100, 
        justifyContent: 'center',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 15
    },

    articleTitle: { 
        color: 'black', 
        fontWeight: 'bold', 
        textAlign: 'justify', 
        fontSize: 14 
    },
    articleSubtitle: {
        textAlign: 'right', 
        fontSize: 11
    }
})

export default NewsVerticalList;