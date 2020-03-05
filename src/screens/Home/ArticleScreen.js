import React from 'react';

import { View , Text} from 'react-native';

 import styles from './styles';
import { Image } from 'react-native-elements';

const ArticleScreen = ({ article }) => {
    <View style={styles.container}> 
        <View style={styles.imgContainer}> 

            <Image source={{uri: article.urlToImage}} />
            
        </View>
        <View>
            <Text> {article.title}</Text>
        </View>
        <View></View>

    </View>  
}

export default ArticleScreen;
