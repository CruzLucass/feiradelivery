import React from 'react';

import {
    View,
    Text
} from 'react-native';
import { Button } from '../Button';
import { Line } from '../Line';

import { styles } from './styles';

export function Hero() {
    return (
        <View style={styles.container}>
            <Line />
            <View style={styles.bigLabel}>
                <Text style={styles.textFirst}>
                    Toda semana com produtos frescos e orgânicos.
                </Text>
            </View>
            <View style={styles.divTextSecondary}>
                <Text style={styles.textSecondary}>
                    Faça já seu pedido sem sair de casa!
                </Text>
            </View>
            <Button
                title='FAZER LOGIN'
            />
        </View>
    );
}