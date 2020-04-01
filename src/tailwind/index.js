import colors from "./lib/colors";
import borderWidth from "./lib/borderWidth";
import position from "./lib/position";
import spacing from "./lib/spacing";
import width from "./lib/width";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  ...colors,
  "rounded-none": {
    borderRadius: 0
  },
  "rounded-sm": {
    borderRadius: 2
  },
  rounded: {
    borderRadius: 4
  },
  "rounded-lg": {
    borderRadius: 8
  },
  "rounded-full": {
    borderRadius: 9999
  },
  "rounded-t-none": {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  "rounded-r-none": {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  "rounded-b-none": {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  "rounded-l-none": {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  "rounded-t-sm": {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2
  },
  "rounded-r-sm": {
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  },
  "rounded-b-sm": {
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2
  },
  "rounded-l-sm": {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2
  },
  "rounded-t": {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  "rounded-r": {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  },
  "rounded-b": {
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4
  },
  "rounded-l": {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  "rounded-t-lg": {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  "rounded-r-lg": {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  "rounded-b-lg": {
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8
  },
  "rounded-l-lg": {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  "rounded-t-full": {
    borderTopLeftRadius: 9999,
    borderTopRightRadius: 9999
  },
  "rounded-r-full": {
    borderTopRightRadius: 9999,
    borderBottomRightRadius: 9999
  },
  "rounded-b-full": {
    borderBottomRightRadius: 9999,
    borderBottomLeftRadius: 9999
  },
  "rounded-l-full": {
    borderTopLeftRadius: 9999,
    borderBottomLeftRadius: 9999
  },
  "rounded-tl-none": {
    borderTopLeftRadius: 0
  },
  "rounded-tr-none": {
    borderTopRightRadius: 0
  },
  "rounded-br-none": {
    borderBottomRightRadius: 0
  },
  "rounded-bl-none": {
    borderBottomLeftRadius: 0
  },
  "rounded-tl-sm": {
    borderTopLeftRadius: 2
  },
  "rounded-tr-sm": {
    borderTopRightRadius: 2
  },
  "rounded-br-sm": {
    borderBottomRightRadius: 2
  },
  "rounded-bl-sm": {
    borderBottomLeftRadius: 2
  },
  "rounded-tl": {
    borderTopLeftRadius: 4
  },
  "rounded-tr": {
    borderTopRightRadius: 4
  },
  "rounded-br": {
    borderBottomRightRadius: 4
  },
  "rounded-bl": {
    borderBottomLeftRadius: 4
  },
  "rounded-tl-lg": {
    borderTopLeftRadius: 8
  },
  "rounded-tr-lg": {
    borderTopRightRadius: 8
  },
  "rounded-br-lg": {
    borderBottomRightRadius: 8
  },
  "rounded-bl-lg": {
    borderBottomLeftRadius: 8
  },
  "rounded-tl-full": {
    borderTopLeftRadius: 9999
  },
  "rounded-tr-full": {
    borderTopRightRadius: 9999
  },
  "rounded-br-full": {
    borderBottomRightRadius: 9999
  },
  "rounded-bl-full": {
    borderBottomLeftRadius: 9999
  },
  "border-solid": {
    borderStyle: "solid"
  },
  "border-dashed": {
    borderStyle: "dashed"
  },
  "border-dotted": {
    borderStyle: "dotted"
  },
  ...borderWidth,
  hidden: {
    display: "none"
  },
  flex: {
    display: "flex"
  },
  "flex-row": {
    flexDirection: "row"
  },
  "flex-row-reverse": {
    flexDirection: "row-reverse"
  },
  "flex-col": {
    flexDirection: "column"
  },
  "flex-col-reverse": {
    flexDirection: "column-reverse"
  },
  "flex-wrap": {
    flexWrap: "wrap"
  },
  "flex-no-wrap": {
    flexWrap: "nowrap"
  },
  "items-start": {
    alignItems: "flex-start"
  },
  "items-end": {
    alignItems: "flex-end"
  },
  "items-center": {
    alignItems: "center"
  },
  "items-baseline": {
    alignItems: "baseline"
  },
  "items-stretch": {
    alignItems: "stretch"
  },
  "self-auto": {
    alignSelf: "auto"
  },
  "self-start": {
    alignSelf: "flex-start"
  },
  "self-end": {
    alignSelf: "flex-end"
  },
  "self-center": {
    alignSelf: "center"
  },
  "self-stretch": {
    alignSelf: "stretch"
  },
  "justify-start": {
    justifyContent: "flex-start"
  },
  "justify-end": {
    justifyContent: "flex-end"
  },
  "justify-center": {
    justifyContent: "center"
  },
  "justify-between": {
    justifyContent: "space-between"
  },
  "justify-around": {
    justifyContent: "space-around"
  },
  "content-center": {
    alignContent: "center"
  },
  "content-start": {
    alignContent: "flex-start"
  },
  "content-end": {
    alignContent: "flex-end"
  },
  "content-between": {
    alignContent: "space-between"
  },
  "content-around": {
    alignContent: "space-around"
  },
  "flex-1": {
    flex: 1
  },
  "font-sans": {
    fontFamily:
      "system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
  },
  "font-serif": {
    fontFamily:
      "Constantia, Lucida Bright, Lucidabright, Lucida Serif, Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif"
  },
  "font-mono": {
    fontFamily:
      "Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
  },
  "font-hairline": {
    fontWeight: "100"
  },
  "font-thin": {
    fontWeight: "200"
  },
  "font-light": {
    fontWeight: "300"
  },
  "font-normal": {
    fontWeight: "400"
  },
  "font-medium": {
    fontWeight: "500"
  },
  "font-semibold": {
    fontWeight: "600"
  },
  "font-bold": {
    fontWeight: "700"
  },
  "font-extrabold": {
    fontWeight: "800"
  },
  "font-black": {
    fontWeight: "900"
  },
  "h-1": {
    height: 4
  },
  "h-2": {
    height: 8
  },
  "h-3": {
    height: 12
  },
  "h-4": {
    height: 16
  },
  "h-6": {
    height: 24
  },
  "h-8": {
    height: 32
  },
  "h-10": {
    height: 40
  },
  "h-12": {
    height: 48
  },
  "h-16": {
    height: 64
  },
  "h-24": {
    height: 96
  },
  "h-32": {
    height: 128
  },
  "h-48": {
    height: 192
  },
  "h-64": {
    height: 256
  },
  "h-auto": {
    height: "auto"
  },
  "h-px": {
    height: 1
  },
  "h-full": {
    height: "100%"
  },
  "leading-none": {
    lineHeight: 1
  },
  "leading-tight": {
    lineHeight: 1
  },
  "leading-normal": {
    lineHeight: 1
  },
  "leading-loose": {
    lineHeight: 2
  },
  "max-h-full": {
    maxHeight: "100%"
  },
  "max-w-xs": {
    maxWidth: 320
  },
  "max-w-sm": {
    maxWidth: 480
  },
  "max-w-md": {
    maxWidth: 640
  },
  "max-w-lg": {
    maxWidth: 800
  },
  "max-w-xl": {
    maxWidth: 960
  },
  "max-w-2xl": {
    maxWidth: 1120
  },
  "max-w-3xl": {
    maxWidth: 1280
  },
  "max-w-4xl": {
    maxWidth: 1440
  },
  "max-w-5xl": {
    maxWidth: 1600
  },
  "max-w-full": {
    maxWidth: "100%"
  },
  "min-h-0": {
    minHeight: 0
  },
  "min-h-full": {
    minHeight: "100%"
  },
  "min-w-0": {
    minWidth: 0
  },
  "min-w-full": {
    minWidth: "100%"
  },
  "opacity-0": {
    opacity: 0
  },
  "opacity-25": {
    opacity: 0.25
  },
  "opacity-50": {
    opacity: 0.5
  },
  "opacity-75": {
    opacity: 0.75
  },
  "opacity-100": {
    opacity: 1
  },
  ...spacing,
  ...position,
  "text-left": {
    textAlign: "left"
  },
  "text-center": {
    textAlign: "center"
  },
  "text-right": {
    textAlign: "right"
  },
  "text-justify": {
    textAlign: "justify"
  },
  "text-xs": {
    fontSize: 12
  },
  "text-sm": {
    fontSize: 14
  },
  "text-base": {
    fontSize: 16
  },
  "text-lg": {
    fontSize: 18
  },
  "text-xl": {
    fontSize: 20
  },
  "text-2xl": {
    fontSize: 24
  },
  "text-3xl": {
    fontSize: 30
  },
  "text-4xl": {
    fontSize: 36
  },
  "text-5xl": {
    fontSize: 48
  },
  italic: {
    fontStyle: "italic"
  },
  roman: {
    fontStyle: "normal"
  },
  "tracking-tight": {
    letterSpacing: -0.8
  },
  "tracking-normal": {
    letterSpacing: 0
  },
  "tracking-wide": {
    letterSpacing: 0.8
  },
  ...width
});
