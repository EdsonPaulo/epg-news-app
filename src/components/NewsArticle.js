import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {general, colors, fonts} from '../constants';

const NewsArticle = ({ data, isLoading, error }) => 
{
    
    const { visible, setVisible } = useState(false);
    const { imageVisible, setImageVisible } = useState(false);
    const { infoVisible, setInfoVisible } = useState(false);

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
/** 
          <ShimmerPlaceHolder
                        style={styles.shimmerComponent}
                        autoRun={true}
                        visible={isLoading} >
                    </ShimmerPlaceHolder>

                        
  */ 
    return (
        <View>  
        {
            data.map( (article , index) => {
                let isFavorite = false;
                
                return (
                    
                    <TouchableOpacity key={index} style={styles.container} activeOpacity={0.3}  onPress={() => {alert(article.content)}} >
                      
                        <Image style={styles.img}  source={{uri: article.urlToImage}} key={index}/>
                        <View style={styles.infoContainer} key={index}>
                            <Text style={styles.title} key={index}> { article.title.trim() } </Text>
                            <Text style={styles.date} key={index}> { article.publishedAt } </Text>
                        </View>
                    </TouchableOpacity>
                )
            })
        }
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        elevation: 5,
        margin: 5,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    img: {
        width: '30%',
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,

    },

    infoContainer: {
        padding: 10,
        textAlign: 'justify',

        width: '75%',
    },
    title: {
        color: colors.primaryDark,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,

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

export default NewsArticle;