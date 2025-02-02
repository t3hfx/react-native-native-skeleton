import React, { useEffect, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card } from './components/Card';
import { colors } from './constants/colors';
import { Picker } from './components/Picker';
import type { SkeletonDirections } from 'react-native-native-skeleton';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsVisible(false);
  //   }, 3000);
  // }, []);

  const [duration, setDuration] = useState<number>(3000);

  const [direction, setDirection] =
    useState<SkeletonDirections>('topLeftBottomRight');

  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <Text style={styles.setting}>Duration</Text>
        <Picker
          items={[1000, 2000, 3000, 5000]}
          onPress={setDuration}
          activeItem={duration}
        />

        <Text style={styles.setting}>Direction both platforms</Text>
        <Picker
          items={[
            // Both platforms
            'topLeftBottomRight',
            'bottomRightTopLeft',
          ]}
          onPress={setDirection}
          activeItem={direction}
        />
        <Text style={styles.setting}>Direction android only</Text>
        <Picker
          items={['bottomLeftTopRight', 'topRightBottomLeft']}
          onPress={setDirection}
          activeItem={direction}
        />
        <Text style={styles.setting}>Direction iOS only</Text>
        <Picker
          items={['bottomTop', 'topBottom', 'leftRight', 'rightLeft']}
          onPress={setDirection}
          activeItem={direction}
        />
        <Card
          loading={isVisible}
          skeletonBaseBackgroundColor={colors.grayLight2}
          skeletonSecondaryBackgroundColor={colors.white1}
          skeletonDuration={duration}
          skeletonDirection={direction}
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
          skeletonDuration={duration}
          skeletonDirection={direction}
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
          skeletonDuration={duration}
          skeletonDirection={direction}
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
            skeletonDuration={duration}
            skeletonDirection={direction}
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
            skeletonDuration={duration}
            skeletonDirection={direction}
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
            skeletonDuration={duration}
            skeletonDirection={direction}
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
    marginHorizontal: 16,
  },
  setting: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 16,
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
});
