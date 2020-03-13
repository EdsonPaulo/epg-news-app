import React from 'react';

import { View , Text, ScrollView, StyleSheet, ActivityIndicator} from 'react-native';

import { Image, Icon, Header } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import {Actions} from 'react-native-router-flux'

import globalStyles from './styles';
import { metrics, colors } from '../../constants';


const ArticleScreen = ( article ) => {

    return (
        <View style={globalStyles.container}> 
                <Header backgroundColor={'white'}
                    leftComponent={
                        <TouchableScale onPress={() => Actions.pop()} style={globalStyles.headerButton} activeScale={1.3}>
                            <Icon name='ios-arrow-back' type='ionicon' color='black' />
                        </TouchableScale>
                    }                    
                />

                <ScrollView>
                    <View  style={{ height: '100%'}}>

                        <View style={styles.imgContainer}>

                            <Image resizeMode='stretch' borderRadius={15} 
                                source={{uri: article.urlToImage}} 
                                PlaceholderContent={ <ActivityIndicator size='large' color={colors.accent} />} 
                                style={{width: '100%', height: '100%'}} />

                            <View style={styles.articleActionContainer}>
                                <TouchableScale activeScale={1.3} style={[styles.articleActionButton, { marginRight: 15}]}>
                                    <Icon name='ios-star' type='ionicon' color='white' />
                                </TouchableScale>

                                <TouchableScale activeScale={1.3} style={styles.articleActionButton}>
                                    <Icon name='md-share' type='ionicon' color='white' />
                                </TouchableScale>
                            </View>
                            
                        </View>


                        <View style={styles.divider} />


                        <View  style={styles.content}>
                        
                            <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}> {article.title}</Text>
                            
                            <Text style={{fontSize: 16, textAlign: 'justify'}}> {'\n'+article.description + '\n\n' + article.content}</Text>
                            
                            <Text style={{fontSize: 13, textAlign: 'right', marginVertical: 30, color: colors.grayDark}}> {article.publishedAt}</Text>
                
                        </View>
                    
                    </View>

                </ScrollView>

        </View> 
    )
}



const styles = StyleSheet.create({

    imgContainer: {
        elevation: 5, 
        height: '35%', 
        borderRadius: 15,
        marginHorizontal: 20, 
    },
    articleActionContainer: {
        flexDirection: 'row',
        position: 'absolute', 
        bottom: 10, 
        right: 10,
        zIndex: 1,
        borderRadius: 15,
    },
    articleActionButton: {          
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: colors.accent, 
        width: 40, height: 40,
        elevation: 3,
        borderRadius: 20,
    },

    divider: { 
        height: 2, 
        margin: 20, 
        backgroundColor: colors.grayLight 
    },

    content: {
        borderRadius: 15,
        marginHorizontal: 20,
        elevation: 5, 
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        backgroundColor: 'white', 
    },
    
})


export default ArticleScreen;
