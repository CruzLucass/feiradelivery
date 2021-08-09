import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        paddingTop: 20,
        paddingHorizontal: 24,
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color: '#fff'
    }
});