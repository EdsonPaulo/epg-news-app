import { StyleSheet } from 'react-native'

import {general, colors, fonts, metrics} from '../../constants';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: metrics.baseMargin,
        backgroundColor: colors.bgColor,
    },

    header: {
        backgroundColor: colors.primaryDark,

    },
    
    headerButton: {
        width: 35,
        height: '100%', 
        justifyContent:  'center',
        alignItems: 'center',
    },

    
})

export default styles;

