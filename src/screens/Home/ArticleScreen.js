import React from 'react';

import { View , Text, ScrollView, StyleSheet, ActivityIndicator, StatusBar} from 'react-native';

import { Image, Icon, Divider } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import {Actions} from 'react-native-router-flux'

import { metrics, colors } from '../../constants';

import DateFormat from '../../util/DateFormat'


const ArticleScreen = ( article ) => {
    
    return (
        <View style={{flex: 1, backgroundColor: colors.bgColor}}> 
        
            <TouchableScale activeScale={0.8} onPress={() => Actions.pop()} 
                style={styles.headerButton}>
                <Icon name='ios-arrow-back' type='ionicon' color='black' />
            </TouchableScale>

            <ScrollView showsVerticalScrollIndicator={false} >

                        <View style={styles.topContainer}>
                            <Image resizeMode='stretch' 
                                source={{uri: article.urlToImage}} 
                                PlaceholderContent={ <ActivityIndicator size='large' color={colors.accent} />} 
                                style={{width: '100%', height: '100%'}}  />


                            <View style={styles.articleActionContainer}>
                                <TouchableScale activeScale={1.3} style={[styles.articleActionButton, { marginRight: 15}]}>
                                    <Icon name='ios-star-outline' type='ionicon' color='white' size={15} />
                                </TouchableScale>

                                <TouchableScale activeScale={1.3} style={styles.articleActionButton}>
                                    <Icon name='md-share' type='ionicon' color='white' size={15} />
                                </TouchableScale>
                            </View>
                        </View>

                        <View  style={styles.content}>
                            <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'justify'}}> {article.title}</Text>
                            
                            <Divider style={styles.divider} />

                            <Text style={{fontSize: 15, textAlign: 'justify'}}> {article.description + '\n\n' + article.content}</Text>
                            
                            <Text style={{fontSize: 13, textAlign: 'right', marginTop: 20, color: colors.grayDark}}> 
                                { DateFormat(article.publishedAt) } 
                            </Text>
                        </View>
                  
                    <TouchableScale 
                        style={{borderRadius: 10, 
                            backgroundColor: colors.accent, 
                            margin: 30, padding: 5, 
                            alignItems: 'center' 
                            }}>
                                
                        <Text style={{color: 'white'}}>Ler na página original</Text>
                    </TouchableScale>
                </ScrollView>
        </View> 
    )
}

const styles = StyleSheet.create({

    headerButton: {
        position: 'absolute',
        zIndex: 1,
        top: StatusBar.currentHeight + metrics.baseMargin,
        left: metrics.baseMargin,
        justifyContent:  'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        elevation: metrics.baseMargin,
        borderRadius: metrics.baseRadius,
        width: 35,
        height: 35
    },
    topContainer: {
        height: 250, 
        elevation: 10
    },
    articleActionContainer: {
        flexDirection: 'row',
        position: 'absolute', 
        bottom: 10, 
        right: 10,
        zIndex: 1,
    },
    articleActionButton: {          
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: colors.accent, 
        width: 30, height: 30,
        elevation: 2,
        borderRadius: 15,
    },

    divider: { 
        height: 2, 
        marginVertical: 15, 
        backgroundColor: colors.grayLight 
    },

    content: {
        margin: 15, 
        padding: 20, 
        borderRadius: 10,
        elevation:5,
    },
    
})


export default ArticleScreen;
