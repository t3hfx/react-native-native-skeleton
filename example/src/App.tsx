import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from './components/Card';
import { colors } from './constants/colors';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView
        contentContainerStyle={styles.content}
        style={styles.container}
      >
        <Text style={styles.title}>
          Hey, this is a new native skeleton solution
        </Text>
        <Card
          loading={isVisible}
          skeletonBaseBackgroundColor={colors.grayLight2}
          skeletonSecondaryBackgroundColor={colors.white1}
          title={'This is a post title'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          }
          style={styles.card}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  card: {
    marginTop: 16,
  },
});
