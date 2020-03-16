import React from 'react';

import { View , Text, ScrollView, StyleSheet, ActivityIndicator} from 'react-native';

import { Image, Icon, Header, Divider } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import {Actions} from 'react-native-router-flux'

import globalStyles from './styles';
import { metrics, colors } from '../../constants';

import DateFormat from '../../util/DateFormat'


const OriginalArticleScreen = ( url ) => {
    
    return (
        <View style={{flex: 1, backgroundColor: colors.bgColor}}> 
                <Header backgroundColor={'gray'}
                statusBarProps={{ barStyle: 'light-content' }}
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

                <WebView
                    source={{uri: url}}
                    style={{marginTop: 20}}
                />

        </View> 
    )
}



const styles = StyleSheet.create({

    
})


export default OriginalArticleScreen;
