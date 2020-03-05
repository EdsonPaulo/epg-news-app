import React, { Component } from 'react'
import { StatusBar, View, ScrollView, Text, Button, TouchableNativeFeedback } from 'react-native';

import { Actions, Tabs, Scene, Router} from 'react-native-router-flux'

import { Header, Icon } from 'react-native-elements';

import {general, colors} from '../../constants';

import styles from './styles'

import NewsAPI from '../../services/NewsAPI'


export default class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            generalArticles: [],
            techArticles: [],
            scienceArticles: [],
            sportsArticles: [],
            entertainmentArticles: [],

            isLoading: false,
            error: null,
        };
    }
    
    render() {
        return (
            <View style={styles.container}>

            {

            
            }
            
                
              
             {/**
                <Header 
                    placement="center"
                    backgroundColor={colors.primaryDark}
                    leftComponent={{ icon: 'text', type: 'material-community', color: 'white', underlayColor: 'transparent', onPress: () => { Actions.push('welcome') } }}
                    centerComponent={{ text: 'EPG NEWS',  style: { color: '#fff', fontSize: 18, fontWeight: 'bold' } }}
                    rightComponent={{ icon: 'search', color: 'white', underlayColor: 'transparent', onPress: () => {Actions.push('search') } }}
                />
            */} 

                <Text>HOME SCREEN</Text>
        </View>
        )
    }
}