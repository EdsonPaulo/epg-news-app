import React, {useState} from 'react';
import {
    StyleSheet,
    View, 
    Text,
    ActivityIndicator,
} from 'react-native';

import {colors} from '../../constants';

const NewsFetchStatus = ({articles, isLoading, error}) => {
    if (!articles) 
        return (
            <View style={styles.container}>
                <Text>Nenhum dado encontrado!</Text>
            </View>
        );

    if (error) 
        return ( 
            <View style={styles.container}>
                <Text>Ocorreu um erro!</Text>
                <Text>{error.message}</Text>
            </View>
        );

    if (isLoading)
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={colors.accent} />
            </View>
        );
        
    return <View />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center', 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150
    }
})

export default NewsFetchStatus;