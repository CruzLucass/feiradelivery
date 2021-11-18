import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 240,
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    bigLabel: {
        height: 70,
        width: 150,
        justifyContent: 'center',
        marginTop: 25,

    },
    textFirst: {
        /*fontFamily: theme.fonts.title500,*/
        fontSize: 18,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
    divTextSecondary: {
        height: 40,
        width: 130,
        justifyContent: 'center',
        marginTop: 10,
    },
    textSecondary: {
        fontSize: 12,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        fontWeight: 'bold'
    },

});