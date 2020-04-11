# ⚡ React Native Tailwind ⚡

The fantastic [Tailwind CSS](https://github.com/tailwindcss/tailwindcss), for React Native!

[![npm version](https://badge.fury.io/js/react-native-tailwind.svg)](https://badge.fury.io/js/react-native-tailwind)

## Getting started

### 1. Install the package

```shell
yarn add react-native-tailwind
```

### 2. Import the components

```js
import { View, Text } from "react-native-tailwind";
```

### 3. Use utility classes!

```js
const RocketShip = ({ textForAliens }) => (
  <View className="flex-1 items-center justify-center bg-gray-200">
    <Text className="text-white p-4">{textForAliens}</Text>
  </View>
);
```

To see which classes are supported, see [tailwind.js](https://github.com/MythicalFish/react-native-tailwind/blob/master/src/tailwind/index.js).

---

## License

[MIT](https://github.com/taylorbryant/crna-tailwind/blob/master/LICENSE.md)
