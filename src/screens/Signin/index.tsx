import React from 'react';

import {
    View,
    Text,
    TextInput
} from 'react-native';

import { styles } from './styles';

export function Signin() {
    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
            <TextInput />
        </View>
    );
}