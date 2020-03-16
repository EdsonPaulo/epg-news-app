import React from 'react';

import { View , Text, ScrollView, StyleSheet, ActivityIndicator} from 'react-native';

import { Image, Icon, Header, Divider } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import {Actions} from 'react-native-router-flux'

import globalStyles from './styles';
import { metrics, colors } from '../../constants';

import DateFormat from '../../util/DateFormat'


const ArticleScreen = ( article ) => {
    

    return (
        <View style={{flex: 1, backgroundColor: colors.bgColor}}> 
                <Header backgroundColor={'gray'}
                    leftComponent={
                        <TouchableScale activeScale={1.3} onPress={() => Actions.pop()} 
                            style={[globalStyles.headerButton, {
                                justifyContent:  'center',
                                alignItems: 'center',
                                backgroundColor: 'green',
                                borderRadius: 10,
                                width: 40,
                                height: 40

                            }]} >
                            <Icon name='ios-arrow-back' type='ionicon' color='black' />
                        </TouchableScale>
                    }                    
                />

                <ScrollView showsVerticalScrollIndicator={false}
                    style={{overflow: 'scroll'}}>
                   

                        <View style={styles.imgContainer}>

                            <Image resizeMode='stretch' borderRadius={10} 
                                source={{uri: article.urlToImage}} 
                                PlaceholderContent={ <ActivityIndicator size='large' color={colors.accent} />} 
                                style={{width: '100%', height: '100%'}} />

                            <View style={styles.articleActionContainer}>
                                <TouchableScale activeScale={1.3} style={[styles.articleActionButton, { marginRight: 15}]}>
                                    <Icon name='ios-star-outline' type='ionicon' color='white' size={15} />
                                </TouchableScale>

                                <TouchableScale activeScale={1.3} style={styles.articleActionButton}>
                                    <Icon name='md-share' type='ionicon' color='white' size={15} />
                                </TouchableScale>
                            </View>
                            
                        </View>


                        <Divider style={styles.divider} />


                        <View  style={styles.content}>
                        
                            <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}> {article.title}</Text>
                            
                            <Text style={{fontSize: 16, textAlign: 'justify'}}> {'\n'+article.description + '\n\n' + article.content}</Text>
                            
                            <Text style={{fontSize: 13, textAlign: 'right', marginVertical: 30, color: colors.grayDark}}> 
                                { DateFormat(article.publishedAt) } 
                            </Text>
                          
                        </View>
                  

                </ScrollView>

        </View> 
    )
}



const styles = StyleSheet.create({

    imgContainer: {
        elevation: 5, 
        height: '30%', 
        borderRadius: 10,
        marginHorizontal: 20, 
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
        margin: 20, 
        backgroundColor: colors.grayLight 
    },

    content: {
        textAlign: 'justify',
        paddingHorizontal: 30, 
    },
    
})


export default ArticleScreen;
