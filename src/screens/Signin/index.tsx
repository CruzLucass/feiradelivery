import React from 'react';

import {
    View,
    Text,
    TextInput,
} from 'react-native';
import { Background } from '../../components/Background';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function Signin() {
    return (
        <Background>
            <Header title='Tela de Login' />
            <View style={styles.container}>



                <TextInput
                    style={styles.input}
                    placeholder='Login'
                />

                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder='Senha'
                />

                <Button
                    title="Logar"
                />

            </View>


        </Background>

    );
}