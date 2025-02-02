import { View, StyleSheet, Text } from 'react-native';

import React from 'react';
import { PickerItem } from './PickerItem';

type Props = {
  items: string[] | number[];
  onPress: (item: string | number) => void;
  activeItem: string | number;
};

export const Picker = ({ items, onPress, activeItem }: Props) => {
  return (
    <View style={styles.container}>
      {items.map((i) => {
        return (
          <PickerItem
            title={i}
            key={i}
            onPress={onPress.bind(null, i)}
            isActive={!!(activeItem === i)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'green',
  },
});
