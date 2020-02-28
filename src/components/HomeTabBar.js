import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import { Ionicons } from '@expo/vector-icons';


import {Science, Technology, Sport} from '../screens/Home/Content';
import { fonts, colors } from '../constants';


class CustomTabBar extends Component  {

    render() {
        return (
            
            <ScrollView style={styles.tabs} horizontal showsHorizontalScrollIndicator={false}>
                
                
                {

                    this.props.tabs.map((tab , page) => {
                        
                        const iconName = 
                            tab === 'TOP' ? 'ios-trending-up' :
                            tab === 'Tecnologia' ? 'ios-radio' : 
                            tab === 'Ciência' ? 'ios-flask' :
                            tab === 'Desporto' ? 'ios-football' :
                            tab === 'Entretenimento' ? 'md-film' : '';

                        const isTabActive = this.props.activeTab === page;
                        const activeTabStyle = isTabActive ? styles.activeTabText : styles.inactiveTabText;

                        return (
                            <TouchableOpacity key={tab} onPress={() => this.props.goToPage(page)} style={styles.tab}>
                                <Ionicons name={iconName} style={activeTabStyle} />
                                <Text style={activeTabStyle}> {tab} </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

export default class HomeTabBar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ScrollableTabView
                style={{ marginTop: 20 }}
                initialPage={0}
                onScroll={() => {
                 //   scrollTo({x: 0, y: 0, animated: true})
                }}
                renderTabBar={() => <CustomTabBar onScroll /> }>

                <ScrollView tabLabel='TOP' > 
                    <View style={styles.card}>
                        <Text>News</Text>
                        <Text>TECNOLOGIA</Text> 
                    </View>
                </ScrollView>

                <ScrollView tabLabel='Tecnologia' > 
                    <View style={styles.card}>
                        <Text>News</Text>
                        <Text>TECNOLOGIA</Text> 
                    </View>
                </ScrollView>

                <ScrollView tabLabel='Ciência'> 
                    <View style={styles.card}>
                        <Text>News</Text>
                        <Text>CIÊNCIA</Text> 
                    </View>
                </ScrollView>

                <ScrollView tabLabel='Desporto'> 
                    <View style={styles.card}>
                        <Text>News</Text>
                        <Text>DESPORTO</Text> 
                    </View> 
                </ScrollView >

                <ScrollView tabLabel='Entretenimento' > 
                    <View style={styles.card}>
                        <Text>News</Text>
                        <Text>ENTRETENIMENTO</Text> 
                    </View> 
                </ScrollView >


            </ScrollableTabView>
        )
    }
}


const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        width: '100%',
        overflow: "scroll"
        
    },
    tab: {
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    activeTabText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.primaryDark,
    },
    inactiveTabText: {
        fontSize: 18,
        color: colors.grayDark,
    },
});
