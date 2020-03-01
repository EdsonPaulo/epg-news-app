import React, {useState} from 'react';
import {
    View, 
    Text, 
    Image, 
    TouchableOpacity,
    FlatList,
    StyleSheet, 
    ActivityIndicator, 
    TouchableNativeFeedback,
     ImageBackground 
    } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {general, colors, fonts, metrics} from '../constants';

const NewsList = ({ data, isLoading, error }) => 
{
    let topArticlesData, restArticlesData;
    const { visible, setVisible } = useState(false); 

    if (!data) 
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
            <View style={{alignSelf: 'center'}}>
                <ActivityIndicator size="large" color={colors.primaryDark} />
            </View>
        );
            
    const horizonatalListItem = (data) =>
    {
        const item = data.item;
        return (  
            <TouchableOpacity activeOpacity={0.1} key={data.index} onPress={() => {alert(item.content)}}>
                <ImageBackground borderRadius={20} source={{uri: item.urlToImage}} style={styles.horizontalItemContainer}>
                    <View style={styles.horizontalItemTitleContainer}>
                        <Text style={styles.horizontalItemTitle}> { item.title } </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const verticalListItem = (data) =>
    {
        let isFavorite = false;
        const item = data.item;
        return (         
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple()}
                key={data.index}  onPress={() => {alert(item.content)}}>
            
                <View style={styles.verticalItemContainer}>
                    <View style={styles.img}>
                        <Image loadingIndicatorSource={require('../assets/icon.png')} source={{uri: item.urlToImage}} />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}> { item.title } </Text>

                        <View style={styles.infoBottomContainer}>
                            <Text style={styles.date}> { item.publishedAt } </Text>
                            <View>
                                <TouchableOpacity activeOpacity={0.3} onPress={() => {isFavorite = true}}> 
                                    <Ionicons name={isFavorite  ? 'ios-star' : 'ios-star-outline'} style={styles.infoIcon} /> 
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.3}>  
                                    <Ionicons name='md-share' style={styles.infoIcon} /> 
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }

    function topArticles (articles) {
        let top = [];
        for (let i = 0; i < 10; ++i)
            top.push( articles[i] );
        return top;
    }

    function restArticles (articles) {
        let rest = [];
        for (let i = 10; i <= articles.length; ++i)
            rest.push( articles[i] );
        return rest;
    }

    return (
        <View style={styles.container}> 
          

            
            <FlatList 
                style={{height: 300}}
                data={  this.topArticlesData =  topArticles(data) }
                renderItem={horizonatalListItem} 
                horizontal
                showsHorizontalScrollIndicator={false}
            />


            <FlatList 
                style={{margin: 10}}
                data={ this.restArticlesData = restArticles(data) }
                renderItem={verticalListItem} 
                showsVerticalScrollIndicator={false}
                 />
        
        </View>
    )


}





const styles = StyleSheet.create({

    container: {
        height: '100%',
        justifyContent: 'center',
        paddingVertical: metrics.baseMargin
    },
    horizontalItemContainer: {
        backgroundColor: 'white',
        width: metrics.screenWidth - 50,
        height: '100%',
        elevation: 4,
        borderRadius: 20,
        marginHorizontal: metrics.smallMargin
    },
    horizontalItemTitleContainer: {
        position: 'absolute',
        paddingHorizontal: metrics.baseMargin,
        bottom: 0,
        padding: metrics.smallMargin,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgba(4, 4, 4, 0.6)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    horizontalItemTitle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'whitesmoke'
    },

    verticalItemContainer: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        elevation: metrics.smallMargin,
        borderRadius: metrics.baseRadius,
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: metrics.baseMargin
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
        fontSize: 30,
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

export default NewsList;