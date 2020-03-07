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
    const {favorite, setFavorite} = useState(true);

    return (         
        <TouchableScale key={index} onPress={() => {Actions.article(item)}}>
            <View style={styles.itemContainer}>
               
                <View style={styles.imgContainer}>
                    <Image resizeMode='stretch'
                        PlaceholderContent={ <ActivityIndicator size='large' color={colors.accent} />} 
                        source={{uri: item.urlToImage}}  
                        style={{ width: '100%', height: '100%'}}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.title}> { item.title } </Text>

                    <View style={styles.infoBottomContainer}>
                        <Text style={styles.date}> { item.publishedAt } </Text>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableScale activeScale={0.7} onPress={ () => {setFavorite(true)} }> 
                                <Icon name={favorite ? 'ios-star' : 'ios-star-outline'} type='ionicon' style={styles.infoIcon} /> 
                            </TouchableScale>

                            <TouchableScale activeScale={0.7} style={{marginHorizontal: 10}}>  
                                <Icon name='md-share' type='ionicon' style={styles.infoIcon} /> 
                            </TouchableScale>
                        </View>
                    </View>
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
        
        <View>
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
        elevation: metrics.smallMargin,
        borderRadius: metrics.baseRadius,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        margin: metrics.baseMargin
    },
    imgContainer: {
        width: '30%',
        height: '100%',
        borderTopLeftRadius: metrics.baseRadius,
        borderBottomLeftRadius: metrics.baseRadius,
    },
    img: {
        resizeMode: 'stretch',
        width: '100%',
        height: 100,
        borderTopLeftRadius: metrics.baseRadius,
        borderBottomLeftRadius: metrics.baseRadius,
    },
    infoContainer: {
        padding: metrics.baseMargin,
        textAlign: 'justify',
        width: '70%',
    },
    title: {
        color: colors.primaryDark,
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'justify',
        marginBottom:  metrics.smallMargin,
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