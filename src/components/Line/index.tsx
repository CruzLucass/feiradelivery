import React from 'react';

import { View } from 'react-native';

import { styles } from './styles';

type Props = {
    isCentered?: boolean;
}

export function Line({ isCentered }: Props) {
    return (
        <View style={styles.container} />
    );
}