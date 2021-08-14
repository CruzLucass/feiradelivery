import React from "react";
import { Text, Image, View } from 'react-native';

import { RectButton, RectButtonProps } from "react-native-gesture-handler";

/* 
    TouchableOpacity, //elemento de clique,
    TouchableOpacityProps 
*/

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
    image?: Image;
}

// ? é opcional
//activeOpacity muda a opacidade do botao ao clicar/entrar
//...rest todo o resto de propriedades do Touchable

export function ButtonIcon({ title, image, ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    );
}