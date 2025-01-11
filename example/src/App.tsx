import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { NativeSkeletonView } from 'react-native-native-skeleton';

export default function App() {
  return (
    <View style={styles.container}>
      <NativeSkeletonView visible style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
