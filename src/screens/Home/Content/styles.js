import { StyleSheet } from 'react-native'

import { general, colors, fonts, metrics } from '../../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        paddingHorizontal: metrics.baseMargin,
    },
    title: { 
        width: '50%',
        color: colors.white, 
        elevation: 5,
        backgroundColor: colors.primaryDark,
        textAlign: 'center',
        borderRadius: 5,
        alignSelf: 'center',

        fontWeight: 'bold', 
        fontSize: 16, 
        padding: 8 ,
        marginTop: 30
    }
})

export default styles;