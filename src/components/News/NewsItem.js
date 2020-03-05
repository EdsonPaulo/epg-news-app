
import React, { Component } from 'react'
import {
    View, 
    Text, 
    TouchableOpacity,
    TouchableNativeFeedback,
    ImageBackground,
    ActivityIndicator
} from 'react-native';

import { Image, Card, Button, Icon } from 'react-native-elements';


import { Ionicons } from '@expo/vector-icons';
import {colors} from '../../constants';

import styles from './styles'    
import TouchableScale from 'react-native-touchable-scale';


const HorizontalListItem = ({ item }) => {
    ///console.log(item.item.toString());
    //item = item.item;
    let isFavorite = false;

    return (  
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple()} onPress={() => {alert(item.content)}}>
            <View borderRadius={10} style={styles.horizontalItemContainer}>
               
               <View style={styles.horizontalItemImageContainer}>
                    
                    <Image  
                        resizeMode='stretch'
                        source={{uri: item.urlToImage}}  
                        style={{ width: '100%', height: '100%'}}
                        PlaceholderContent={<ActivityIndicator size='large' />}
                    />
                        
               </View>


                <View style={styles.horizontalItemTitleContainer}>
                    <Text style={styles.horizontalItemTitle}> { item.title } </Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const VerticalListItem = ({ item }) => {

    let isFavorite = false;
    return (         
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple()} onPress={() => {alert(item.content)}}>
            <View style={styles.verticalItemContainer}>
                <View style={styles.img}>
                    <Image loadingIndicatorSource={require('../../assets/icon.png')}  source={{uri: item.urlToImage}} />
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

export { HorizontalListItem, VerticalListItem }