import React, { Component } from 'react'
import axios from 'axios';

import { Text, View, ScrollView } from 'react-native'

import { SearchBar, Icon, Input, Header  } from 'react-native-elements';

import { Actions } from 'react-native-router-flux';

import TouchableScale from 'react-native-touchable-scale'

import {VerticalList, FetchStatus} from '../../components/News';

import { fonts, colors, metrics } from '../../constants';

import styles from './styles'


export default class SearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',

            searchedArticles: [],

            isLoading: false,
            error: null,
        };
    }

    updateSearch = searchQuery => {
        this.setState({ searchQuery });
    };

    async fetchSearchArcticles (query) {
        const API_KEY = '923fe32cc9b14b15989b4fb574bc57a9';
        let articlesData = [];
        const API = `http://newsapi.org/v2/everything?q=${query}&language=pt&pageSize=10&apiKey=${API_KEY}`;
        this.setState({ isLoading: true });
        try {
            const result = await axios.get(API)
            articlesData = result.data.articles;
            this.setState({ searchedArticles: articlesData })
        }
        catch (error) { 
            this.setState({ error })
            //return null
        }
        finally { this.setState({ isLoading: false })  }
    }


    render() {

        const { searchQuery,searchedArticles, error, isLoading } = this.state;

        return (
            <View>

                <Header
                    placement="left"
                    containerStyle={{  borderBottomWidth: 0}}
                    backgroundColor={colors.white}
                    leftComponent={
                        <TouchableScale onPress={() => Actions.pop()} style={styles.headerButton} activeScale={1.3}>
                            <Icon name='ios-arrow-back' type='ionicon' color='black' />
                        </TouchableScale>
                    }  

                    centerComponent= {
                        <SearchBar
                            containerStyle={{width: '100%', backgroundColor: 'transparent', borderBottomWidth: 0, borderTopWidth: 0}}
                            inputContainerStyle={{elevation: 2,  backgroundColor: 'transparent', width: '100%', }}
                            inputStyle={{color: 'black'}}
                            placeholder="Pesquisar por..."
                            round
                            keyboardType='web-search'
                            returnKeyType='search'
                            onSubmitEditing={ () => this.fetchSearchArcticles(searchQuery) }
                            onChangeText={this.updateSearch}
                            value={searchQuery}
                        />
                    }
                />
                   
                <View  style={{ paddingHorizontal: metrics.baseMargin, }} >
                    <ScrollView showsVerticalScrollIndicator={false} >
                    {
                        searchedArticles.length !== 0 ? null :
                        <View style={{marginTop: 150, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                                <Icon name='warning' size={50} color={colors.accent} />
                                <Text>Nada a mostrar!</Text>
                                <Text> Informe um novo termo a pesquisar...</Text>
                        </View>
                    }
                        <VerticalList articles={searchedArticles} />

                        <FetchStatus articles={searchedArticles} isLoading={isLoading} error={error}  />
                    </ScrollView>
                </View>
            </View>
        )
    }
}


