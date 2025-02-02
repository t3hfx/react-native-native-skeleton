import {
  Image,
  StyleSheet,
  Text,
  type ColorValue,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import React from 'react';

import { View } from 'react-native';
import { NativeSkeletonViewWrapper } from 'react-native-native-skeleton';
import { colors } from '../constants/colors';
import { shadows } from '../constants/shadows';

type Props = {
  loading: boolean;
  skeletonBaseBackgroundColor: ColorValue;
  skeletonSecondaryBackgroundColor: ColorValue;
  title: string;
  description: string;
  style: StyleProp<ViewStyle>;
};

export const Card = ({
  loading,
  skeletonBaseBackgroundColor,
  skeletonSecondaryBackgroundColor,
  title,
  description,
  style,
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <NativeSkeletonViewWrapper
        visible={loading}
        style={styles.avatar}
        baseBackgroundColor={skeletonBaseBackgroundColor}
        secondaryBackgroundColor={skeletonSecondaryBackgroundColor}
      >
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/45770866?v=4',
          }}
        />
      </NativeSkeletonViewWrapper>
      <View style={styles.textBlock}>
        <NativeSkeletonViewWrapper
          baseBackgroundColor={skeletonBaseBackgroundColor}
          secondaryBackgroundColor={skeletonSecondaryBackgroundColor}
          visible={loading}
          style={styles.textWrapper}
        >
          <Text style={styles.titleText}>{title}</Text>
        </NativeSkeletonViewWrapper>
        <NativeSkeletonViewWrapper
          baseBackgroundColor={skeletonBaseBackgroundColor}
          secondaryBackgroundColor={skeletonSecondaryBackgroundColor}
          visible={loading}
          style={[styles.textWrapper, styles.desc]}
        >
          <Text>{description}</Text>
        </NativeSkeletonViewWrapper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.grayLight4,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    ...shadows.medium,
  },
  avatar: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  textBlock: {
    marginLeft: 16,
    flex: 1,
  },
  desc: {
    marginTop: 4,
  },
  textWrapper: {
    borderRadius: 8,
  },
  titleText: {
    fontSize: 18,
  },
});
