import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import { SearchBar, Icon, Input, Header  } from 'react-native-elements';

import TouchableScale from 'react-native-touchable-scale'

import { fonts, colors, metrics } from '../../constants';
import { Actions } from 'react-native-router-flux';



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
                    containerStyle={{ flexDirection:    "row", paddingHorizontal: 15}}
                    backgroundColor={colors.white}
                    leftComponent={{ icon: 'ios-arrow-back', type:'ionicon', onPress: () => {Actions.pop()} }}
                    centerComponent={() => 
                        
                        <Input
                            inputContainerStyle={{flexGrow: 1}}
                            placeholder="Digite o termo a pesquisar..."
                            onChangeText={this.updateSearch}
                            value={search}
                            keyboardType='web-search'
                        />}

                    rightComponent={
                        <TouchableScale
                            style={{padding: 10}}
                            activeScale={1.3}>
                            <Icon
                                name='search'
                            />
                        </TouchableScale>
                    }
                />




                <View>

                    <TouchableScale
                        style={{borderRadius: 10, backgroundColor: 'green', margin: 10, padding: 10 }}
                        activeScale={0.9}>
                    <Text>EDSON</Text> 
                    </TouchableScale>


                </View>
            </View>
        )
    }
}

