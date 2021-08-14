import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Card } from '../Card';

import { styles } from './styles';
import { categories } from '../../utils/categories';

export function HorizontalList() {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Card
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                    />
                ))
            }
        </ ScrollView >
    );
}