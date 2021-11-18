import React from 'react';

import Carousel from 'react-native-snap-carousel';

import {
  View,
  Text
} from 'react-native';
import { Line } from '../Line';

import { styles } from './styles';



export function CarouselContainer() {

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <Text
          style={styles.title}
        >{item.title} {index}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Line />
      <View style={styles.divLabel}>
        <Text style={styles.label}>
          Entrega as terças e sábados
        </Text>
      </View>
      <Carousel
        data={entities}
        renderItem={_renderItem}
        layout={"default"}
      />
    </View>
  );
}