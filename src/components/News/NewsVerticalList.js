import React, { useState } from 'react';

import {
    View, 
    Text, 
    StyleSheet,
    ActivityIndicator,
    ScrollView
} from 'react-native';

import { Image, Card, Button, Icon } from 'react-native-elements';

import TouchableScale from 'react-native-touchable-scale';

import {Actions} from 'react-native-router-flux'

import {general, colors, fonts, metrics} from '../../constants';


const VerticalListItem = ( item, index ) => {

    return (         
        <TouchableScale key={index} onPress={() => {Actions.article(item)}}>
            <View style={styles.itemContainer}>
               
                <View style={styles.imgContainer}>
                    <Image resizeMode='stretch'
                        borderTopLeftRadius={10}
                        borderBottomLeftRadius={10}
                        PlaceholderContent={ <ActivityIndicator size='large' color={colors.accent} />} 
                        source={{uri: item.urlToImage}}  
                        style={styles.img}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.title}> { item.title } </Text>
                </View>
            </View>
        </TouchableScale>
    )
}


function NewsVerticalList (props) {
    let articlesArray = [];
    articlesArray = props.articles
  //  console.log(articlesArray)
    return (
        <View style={{padding: 5}}>
        { 
            articlesArray.map((article , index) => {

                return VerticalListItem( article, index );

            })
        }
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        elevation: 4,
        borderRadius: 10,
        alignItems: 'center', 
        backgroundColor: 'white',
        marginVertical: metrics.smallMargin,
    },
    imgContainer: {
        width: '35%',
        height: '100%',
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: metrics.baseRadius,
    },
    infoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.baseMargin,
        width: '65%',
        height: '100%'
    },
    title: {
        color: colors.dark,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    infoBottomContainer: {

        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    infoIcon: {
        color: colors.accent,
        fontSize: 22,
        margin: 2
    },
    date: {
        color: colors.grayDark,
        fontSize: 11,
    },
    shimmerComponent: {
        width: '90%',
        height: 100,
        margin: 5,
    }
})

export default NewsVerticalList;