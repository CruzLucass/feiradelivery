import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        paddingHorizontal: 24,
        paddingTop: getStatusBarHeight(),
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
});