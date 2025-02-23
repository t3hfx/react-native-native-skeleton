import { Pressable, StyleSheet, Text } from 'react-native';

import React from 'react';
import { colors } from '../constants/colors';

type Props = {
  title: string | number;
  onPress: () => void;
  isActive: boolean;
};

export const PickerItem = ({ title, onPress, isActive }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isActive && styles.active]}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: colors.white1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    borderWidth: 2,
    borderColor: colors.blue1,
  },
});
