import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { styles } from "./styles";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { HorizontalList } from "../../components/HorizontalList";
import { Hero } from "../../components/Hero";
import { CarouselContainer } from "../../components/CarouselContainer";

export function Home() {
    return (
        <Background>
            <View>
                <Header title='Tela Home' />
                <ScrollView>
                    <Hero />
                    <CarouselContainer />
                    <View style={{ paddingTop: 24 }}>
                        <HorizontalList />
                    </View>

                </ScrollView>
            </View>
        </Background>
    );
}