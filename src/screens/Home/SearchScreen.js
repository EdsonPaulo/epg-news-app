import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import { SearchBar, Icon, Input, Header  } from 'react-native-elements';

import TouchableScale from 'react-native-touchable-scale'

import { fonts, colors, metrics } from '../../constants';
import { Actions } from 'react-native-router-flux';

import styles from './styles'

export default class SearchScreen extends Component {

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });

    };

    render() {

        const { search } = this.state;

        return (
            <View>

                <Header
                    placement="center"
                    containerStyle={{paddingHorizontal: 0}}
                    backgroundColor={colors.white}
                    leftComponent={
                        <TouchableScale onPress={() => Actions.pop()} style={styles.headerButton} activeScale={1.3}>
                            <Icon name='ios-arrow-back' type='ionicon' color='black' />
                        </TouchableScale>
                    }                    
                  
                />
                
                    <SearchBar
                    containerStyle={{backgroundColor: 'transparent'}}
                        lightTheme
                        round
                        placeholder="Digite o termo a pesquisar..."
                        onChangeText={this.updateSearch}
                        value={search}
                    />
   
                      

                    <TouchableScale style={{ margin: 20,  borderRadius: 8,  backgroundColor: colors.accent, padding: 8 }}
                        activeScale={0.9}>
                        <Text style={{color: 'white', textAlign: 'center'}}>PESQUISAR</Text> 
                    </TouchableScale>




            </View>
        )
    }
}


