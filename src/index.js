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

const buildComponent = Component => ({ className, style, ...rest }) => {
  const props = { ...rest, style: [] };
  if (className) {
    props.style = className.split(" ").map(c => tw[c]);
  }
  if (style) {
    const inline = StyleSheet.create({ style });
    props.style.push(inline.style);
  }
  return <Component {...props} />;
};

export const View = buildComponent(RnView);
export const ScrollView = buildComponent(RnScrollView);
export const Text = buildComponent(RnText);
export const Image = buildComponent(RnImage);
export const TextInput = buildComponent(RnTextInput);
export const TouchableOpacity = buildComponent(RnTouchableOpacity);
