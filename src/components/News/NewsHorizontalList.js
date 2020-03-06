import React from 'react';

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


const HorizontalListItem = ({ item, index }) => {

    const {isFavorite, setFavorite} =  React.useState(false);

    return (         
        <TouchableScale key={index} onPress={() => {Actions.article(item.content)}}>
      
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
        </TouchableScale>
    )
}


const NewsHorizontalList = ({ articles }) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            articles.map ( item, index => ( HorizontalListItem(item, index) ))
        }
    </ScrollView>
);


const styles = StyleSheet.create({

    horizontalItemContainer: {
        backgroundColor: 'white',
        width: metrics.screenWidth - 50,
        height: '90%',
        elevation: 5,
        borderRadius: 15,
        margin: metrics.baseMargin
    },
    horizontalItemImageContainer: {
        height: '65%', 
        width: '100%', 
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    horizontalItemTitleContainer: {
        height: '30%',   
        padding: metrics.baseMargin,
        width: '100%',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    horizontalItemTitle: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
    },
})

export default NewsHorizontalList;