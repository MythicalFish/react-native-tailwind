import React from "react";
import {
  View as RnView,
  ScrollView as RnScrollView,
  Text as RnText,
  Image as RnImage,
  TextInput as RnTextInput,
  TouchableOpacity as RnTouchableOpacity,
  StyleSheet
} from "react-native";
import tw from "./tailwind";

export const buildComponent = Component => ({ className, style, ...rest }) => {
  const props = { ...rest, style: [] };

  if (className) {
    props.style = className.split(" ").map(c => tw[c]);
  }
  if (style) {
    // 'style' can be either an object or array.
    const inline = StyleSheet.flatten([ style ].flat());

    props.style.push(inline);
  }
  return <Component {...props} />;
};

export const View = buildComponent(RnView);
export const ScrollView = buildComponent(RnScrollView);
export const Text = buildComponent(RnText);
export const Image = buildComponent(RnImage);
export const TextInput = buildComponent(RnTextInput);
export const TouchableOpacity = buildComponent(RnTouchableOpacity);
