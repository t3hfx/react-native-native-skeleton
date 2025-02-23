import React, { useState } from 'react';
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

const durations = [1000, 2000, 3000, 5000];
const bothPlatformsDirections = ['topLeftBottomRight', 'bottomRightTopLeft'];
const androidDirections = ['bottomLeftTopRight', 'topRightBottomLeft'];
const iosDirections = ['bottomTop', 'topBottom', 'leftRight', 'rightLeft'];

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  const [duration, setDuration] = useState<number>(3000);

  const [skeletonDirection, setDirection] =
    useState<SkeletonDirections>('topLeftBottomRight');

  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <Text style={styles.setting}>Duration</Text>
        <Picker items={durations} onPress={setDuration} activeItem={duration} />

        <Text style={styles.setting}>Direction both platforms</Text>
        <Picker
          items={
            // Both platforms
            bothPlatformsDirections
          }
          onPress={setDirection}
          activeItem={skeletonDirection}
        />
        <Text style={styles.setting}>Direction android only</Text>
        <Picker
          items={androidDirections}
          onPress={setDirection}
          activeItem={skeletonDirection}
        />
        <Text style={styles.setting}>Direction iOS only</Text>
        <Picker
          items={iosDirections}
          onPress={setDirection}
          activeItem={skeletonDirection}
        />
        <Card
          loading={isVisible}
          skeletonBaseBackgroundColor={colors.grayLight2}
          skeletonSecondaryBackgroundColor={colors.white1}
          skeletonDuration={duration}
          skeletonDirection={skeletonDirection}
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
          skeletonDirection={skeletonDirection}
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
          skeletonDirection={skeletonDirection}
          title={'This is a post title'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          }
          style={styles.card}
        />

        <View style={styles.blackContainer}>
          <Text style={[styles.title, styles.titleWhite]}>Black version</Text>
          <Pressable
            style={styles.button}
            onPress={setIsVisible.bind(null, !isVisible)}
          >
            <Text>{isVisible ? 'Stop loading' : 'Start loading'}</Text>
          </Pressable>
          <Card
            loading={isVisible}
            skeletonBaseBackgroundColor={colors.gray1}
            skeletonSecondaryBackgroundColor={colors.grayLight1}
            skeletonDuration={duration}
            skeletonDirection={skeletonDirection}
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
            skeletonDirection={skeletonDirection}
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
            skeletonDirection={skeletonDirection}
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
  button: {
    marginTop: 16,
    backgroundColor: colors.white1,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 4,
  },
});
