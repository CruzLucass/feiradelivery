import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { HorizontalList } from "../../components/HorizontalList";
import { ScrollView } from "react-native-gesture-handler";

export function Home() {
    return (
        <Background>
            <View>
                <Header title='Tela Home' />
                <ScrollView>
                    <View style={{ paddingTop: 24 }}>
                        <HorizontalList />
                    </View>

                </ScrollView>
            </View>
        </Background>
    );
}