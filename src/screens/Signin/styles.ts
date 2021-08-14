import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        marginTop: -100,
        paddingHorizontal: 50
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    password: {
        textAlign: 'center',
        fontSize: 13,
        color: '#fff'
    },
    register: {
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleRegister: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
});