import React from 'react';

import { View , Text, ScrollView} from 'react-native';

import { Image, Icon, Header } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import {Actions} from 'react-native-router-flux'

import styles from './styles';
import { metrics, colors } from '../../constants';


const ArticleScreen = ( article ) => {

    return (
        <View style={styles.container}> 
                <Header backgroundColor={'white'}
                    leftComponent={
                        <TouchableScale onPress={() => Actions.pop()} style={styles.headerButton} activeScale={1.3}>
                            <Icon name='ios-arrow-back' type='ionicon' color='black' />
                        </TouchableScale>
                    }                    
                />

                <View style={{ width: '100%', height: '100%'}}>

                    <View style={{ width: '100%', height: '30%'}}>
                        <Image resizeMode='stretch' 
                            source={{uri: article.urlToImage}} 
                            style={{width: '100%', height: '100%'}} />

                        <View style={{
                            flexDirection: 'row',
                            position: 'absolute', 
                            bottom: -20, 
                            right: 10,
                            borderRadius: 20,
                        }}>

                        <TouchableScale activeScale={1.3} style={{
                            marginRight: 15,
                            alignItems: 'center', 
                            justifyContent: 'center',
                            backgroundColor: colors.primaryDark, 
                            width: 40, height: 40,
                            elevation: 3,
                            borderRadius: 20,
                        }}>
                                
                            <Icon name='ios-star' type='ionicon' color='white' />
                        </TouchableScale>

                        <TouchableScale activeScale={1.3} style={{
                            alignItems: 'center', 
                            justifyContent: 'center',
                            backgroundColor: colors.primaryDark, 
                            width: 40, height: 40,
                            elevation: 3,
                            borderRadius: 20,
                        }}>
                                
                            <Icon name='md-share' type='ionicon' color='white' />
                        </TouchableScale>
                            
                        </View>

                      
                    </View>

                    <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 50, width: '100%', height: '70%' }}>

                        <Text style={{color: colors.primaryDark, fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}> {article.title}</Text>
                        
                        <Text style={{fontSize: 16, textAlign: 'justify'}}> {'\n'+article.description + '\n\n' + article.content}</Text>
                        
                        <Text style={{fontSize: 13, textAlign: 'right', marginVertical: 30, color: colors.grayDark}}> {article.publishedAt}</Text>
                        
                    </ScrollView>

                </View>

        </View> 
    )
}

export default ArticleScreen;
