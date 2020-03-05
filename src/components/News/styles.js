import { StyleSheet } from 'react-native';

import {general, colors, fonts, metrics} from '../../constants';


const styles = StyleSheet.create({

    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontalItemContainer: {
        backgroundColor: 'white',
        width: metrics.screenWidth - 50,
        height: '95%',
        elevation: 5,
        borderRadius: 15,
        margin: metrics.baseMargin
    },
    horizontalItemTitleContainer: {
        height: '20%',
        padding: metrics.baseMargin,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    horizontalItemTitle: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
    },

    verticalItemContainer: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        elevation: metrics.smallMargin,
        borderRadius: metrics.baseRadius,
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: metrics.baseMargin
    },
    imgContainer: {
        width: '30%',
        height: '100%',
        borderTopLeftRadius: metrics.baseRadius,
        borderBottomLeftRadius: metrics.baseRadius,
    },
    img: {
        resizeMode: 'stretch',
        width: '100%',
        height: 100,
        borderTopLeftRadius: metrics.baseRadius,
        borderBottomLeftRadius: metrics.baseRadius,
    },
    infoContainer: {
        padding: metrics.baseMargin,
        textAlign: 'justify',
        width: '70%',
    },
    title: {
        color: colors.primaryDark,
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'justify',
        marginBottom:  metrics.smallMargin,
    },
    infoBottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    infoIcon: {
        color: colors.accent,
        fontSize: 24,
    },
    date: {
        color: colors.grayDark,
        fontSize: 11,
    },
    shimmerComponent: {
        width: '90%',
        height: 100,
        margin: 5,
    }
})

export default styles;