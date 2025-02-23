# react-native-native-skeleton

![](assets/header.gif)

This library is a cross-platform wrapper for native skeleton loading libraries, designed specifically for React Native applications. It provides an efficient and seamless way to implement skeleton screens in both iOS and Android environments by leveraging platform-specific native libraries for optimal performance and flexibility. It still uses the old arch though. No more lagging JS skeletons! This library wraps around [SkeletonView on iOS](https://github.com/Juanpe/SkeletonView) and [shimmer-android from Meta on Android](https://github.com/facebookarchive/shimmer-android?tab=readme-ov-file)

## Running example

You could try to play with different settings in example/ project. To do this you would need to:

```sh
cd example
yarn
cd ios && pod install
cd ..
yarn ios //or yarn android
```

## Installation

1. Install

```sh
npm install react-native-native-skeleton
```

or

```sh
yarn add react-native-native-skeleton
```

2. Install pods

```sh
cd ios && pod install
```

## Usage

```js
import { NativeSkeletonViewWrapper } from 'react-native-native-skeleton';

// ...

<NativeSkeletonViewWrapper
  visible={true}
  baseBackgroundColor={'#2e2e2e'}
  secondaryBackgroundColor={'#d9d9d9'}
  duration={2500}
  skeletonDirection={'bottomRightTopLeft'}
/>;
```

| Property                     | Type                                    | Default   |
| ---------------------------- | --------------------------------------- | --------- |
| **visible**                  | `boolean`                               | `false`   |
| **baseBackgroundColor**      | `ColorValue`                            | undefined |
| **secondaryBackgroundColor** | `ColorValue`                            | undefined |
| **duration**                 | `number`                                | `1500`    |
| **skeletonDirection**        | `SkeletonDirections ( // Both platforms |
| 'topLeftBottomRight'         |
| 'bottomRightTopLeft'         |

// Android only
| 'bottomLeftTopRight'
| 'topRightBottomLeft'
// iOS only
| 'bottomTop'
| 'topBottom'
| 'leftRight'
| 'rightLeft')`|`topLeftBottomRight`

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
