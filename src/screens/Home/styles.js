import { StyleSheet } from 'react-native'

import {general, colors, fonts} from '../../constants';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
    },

    header: {
        backgroundColor: colors.primaryDark,

    },
    
    headerButton: {
        width: 30,
        height: '100%', 
        justifyContent:  'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },

    
})

export default styles;

