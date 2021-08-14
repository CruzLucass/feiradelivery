import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
}

export function Card({
    title,
    icon: Icon,
    ...rest
}: Props) {
    const { secondary50, secondary70 } = theme.color;

    return (
        <RectButton {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[secondary50, secondary70]}
            >
                <Icon
                    width={48}
                    height={48}
                />

                <Text style={styles.title}>
                    {title}
                </Text>
            </LinearGradient>
        </RectButton>
    );
}