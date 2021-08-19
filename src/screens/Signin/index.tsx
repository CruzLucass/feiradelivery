import React from 'react';

import {
    View,
    Text,
    TextInput,
    StatusBar
} from 'react-native';

import { Button } from '../../components/Button';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { Background } from '../../components/Background';
import { InputArea } from '../../components/InputArea';
import { MiniLine } from '../../components/MiniLine';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../routes';

/*StatusBar faz aparecer a barra de status corretamente, com o transparent melhora a visualização
porem fica branco ai com o traslucent ele fica por cima do Header*/

//Usou-se o *handle* para poder significar lidar com o signin - onde Handle é alavanca - puxador, etc.

//Quando o usuario usar o HandleSignIn ele vai navegar até a pagina HOME - usa-se isso para colocar em botoes

/*const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate(Routes);
    }
    no button
    onPress={"handleSignIn"}
*/

export function Signin() {
    const navigation = useNavigation();

    function handleSignIn() {
        //navigation.navigate('Home');
    }


    return (
        <Background>
            <Header title='Tela de Login' />
            <View style={styles.container}>

                <View style={styles.content}>

                    <Text style={styles.title}>
                        Faça seu Login
                    </Text>

                    <InputArea
                        placeholder='Login'
                    />

                    <InputArea
                        placeholder='Senha'
                        secureTextEntry={true}
                    />

                    <Text style={styles.password}>
                        Esqueci minha senha
                    </Text>

                    <Button
                        title="Entrar"
                        onPress={handleSignIn}
                    />

                    <View style={styles.register}>
                        <MiniLine />

                        <View>
                            <Text style={styles.titleRegister}>
                                CADASTRE-SE
                            </Text>
                        </View>

                        <MiniLine />
                    </View>

                    <Button
                        title="Sou Produtor"
                    />

                </View>

            </View>


        </Background>

    );
}