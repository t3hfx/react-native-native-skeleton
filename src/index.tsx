import React, { type PropsWithChildren } from 'react';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
  type StyleProp,
  View,
  StyleSheet,
  type ColorValue,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-native-skeleton' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ComponentName = 'NativeSkeletonView';

export const NativeSkeletonView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<NativeSkeletonProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

type Directions =
  // Both platforms
  | 'topLeftBottomRight'
  | 'bottomRightTopLeft'
  // Android only
  | 'bottomLeftTopRight'
  | 'topRightBottomLeft'
  // iOS only
  | 'bottomTop'
  | 'topBottom'
  | 'leftRight'
  | 'rightLeft';

type NativeSkeletonProps = {
  visible: boolean;
  style: StyleProp<ViewStyle>;
  baseBackgroundColor: ColorValue;
  secondaryBackgroundColor: ColorValue;
  duration?: number;
  direction?: Directions;
};

export const NativeSkeletonViewWrapper = ({
  baseBackgroundColor,
  secondaryBackgroundColor,
  visible,
  duration,
  direction,
  style,
  children,
}: PropsWithChildren<NativeSkeletonProps>) => {
  return (
    <View style={[styles.container, style]}>
      {children}
      <NativeSkeletonView
        baseBackgroundColor={baseBackgroundColor}
        secondaryBackgroundColor={secondaryBackgroundColor}
        visible={visible}
        duration={duration ?? 1500}
        direction={direction ?? 'topLeftBottomRight'}
        style={styles.nativeView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  nativeView: {
    ...StyleSheet.absoluteFillObject,
  },
});
