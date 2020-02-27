import { StyleSheet } from 'react-native'

import {general, colors, fonts} from '../../constants';


const styles = StyleSheet.create({

    header: {
        backgroundColor: colors.primaryDark,

    },

    tabStyle: {
        backgroundColor: colors.primaryDark,
        
    },
    activeTabStyle: {
        backgroundColor: colors.primaryDark,
    },

    tabTextStyle: {
        fontSize: 16,
    },
    activeTabTextStyle: {
        fontWeight: 'bold',
    }



})

export default styles;

