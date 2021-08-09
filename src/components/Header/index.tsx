import React, { ReactNode } from "react";
import { Text, View } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({ title, action }: Props) {


    return (
        <View
            style={styles.container}
        >
            <Text style={styles.title}>
                {title}
            </Text>

            {
                action
                    ?
                    <View>
                        {action}
                    </View>
                    :
                    <View style={{ width: 24 }} />
            }
        </View>
    );
}