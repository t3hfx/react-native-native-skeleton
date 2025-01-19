// import * as React from 'react';
import React, { useEffect, useState } from 'react';

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeSkeletonViewWrapper } from 'react-native-native-skeleton';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <NativeSkeletonViewWrapper
        baseBackgroundColor={'#363636'}
        secondaryBackgroundColor={'#6e6b6b'}
        visible={isVisible}
        style={styles.box}
        duration={5000}
        direction={'topRightBottomLeft'}
      >
        <View>
          <Text style={styles.itemTitle}>This is native skeleton!</Text>
        </View>
      </NativeSkeletonViewWrapper>

      <NativeSkeletonViewWrapper
        baseBackgroundColor={'#363636'}
        secondaryBackgroundColor={'#6e6b6b'}
        visible={isVisible}
        style={styles.box}
        duration={5000}
      >
        <Text style={{}}>This is native skeleton!</Text>
      </NativeSkeletonViewWrapper>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'green',
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemTitle: {
    textAlign: 'center',
    color: 'black',
    marginVertical: 100,
    marginHorizontal: 100,
  },
});
