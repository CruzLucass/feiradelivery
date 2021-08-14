import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type Props = {
    isCentered?: boolean;
}

export function MiniLine({ isCentered }: Props) {
    return (
        <View
            style={styles.container}
        />
    );
}
/*
style={[
    styles.container,
    isCentered ? {
        marginVertical: 12,
    } : {
        marginTop: 2,
        marginBottom: 31,
    }
]}
*/