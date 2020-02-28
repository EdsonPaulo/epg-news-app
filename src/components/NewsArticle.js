import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

import {general, colors, fonts} from '../../constants';

const NewsArticle = ({ data, isLoading, error }) => 
{
    if (!data) return alert("Nenhum dado encontrado");
    if (error) return alert("ERRO: " + error.message);
    if (isLoading)
        return (
            <View style={{alignSelf: 'center'}}>
                <ActivityIndicator size="large" color={colors.primaryDark} />
            </View>
        )
   
    return (
        <View>  
        {
            data.map( article => {
                return (
                    <TouchableOpacity style={styles.container}  onPress={() => {alert(article.content)}} >
                        <Image style={styles.img}  source={{uri: article.urlToImage}} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}> { article.title.trim() } </Text>
                            <Text style={styles.date}> { article.publishedAt } </Text>
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
        width: '90%',
        height: 100,
        flexDirection: 'row',
        margin: 5,
        elevation: 5,
        alignItems: 'center'
    },
    img: {
        width: '30%',
        height: 100
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

    }
})

export default NewsArticle;