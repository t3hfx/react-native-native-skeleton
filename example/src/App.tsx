import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
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
      <ScrollView style={styles.container}>
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

        <View style={styles.blackContainer}>
          <Text style={[styles.title, styles.titleWhite]}>Black version</Text>
          <Card
            loading={isVisible}
            skeletonBaseBackgroundColor={colors.gray1}
            skeletonSecondaryBackgroundColor={colors.grayLight1}
            title={'This is a post title'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            }
            style={styles.card}
            dark
          />
          <Card
            loading={isVisible}
            skeletonBaseBackgroundColor={colors.gray1}
            skeletonSecondaryBackgroundColor={colors.grayLight1}
            title={'This is a post title'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            }
            style={styles.card}
            dark
          />
          <Card
            loading={isVisible}
            skeletonBaseBackgroundColor={colors.gray1}
            skeletonSecondaryBackgroundColor={colors.grayLight1}
            title={'This is a post title'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            }
            style={styles.card}
            dark
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  titleWhite: {
    color: colors.white1,
  },
  blackContainer: {
    backgroundColor: colors.black1,
    marginTop: 30,
    paddingTop: 16,
    paddingBottom: 30,
  },
  blackCard: {
    backgroundColor: colors.grayDark1,
  },
});
