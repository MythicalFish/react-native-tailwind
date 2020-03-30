import colors from "./lib/colors";
import borderWidth from "./lib/borderWidth";
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
  "m-0": {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0
  },
  "m-1": {
    marginTop: 4,
    marginBottom: 4,
    marginRight: 4,
    marginLeft: 4
  },
  "m-2": {
    marginTop: 8,
    marginBottom: 8,
    marginRight: 8,
    marginLeft: 8
  },
  "m-3": {
    marginTop: 12,
    marginBottom: 12,
    marginRight: 12,
    marginLeft: 12
  },
  "m-4": {
    marginTop: 16,
    marginBottom: 16,
    marginRight: 16,
    marginLeft: 16
  },
  "m-6": {
    marginTop: 24,
    marginBottom: 24,
    marginRight: 24,
    marginLeft: 24
  },
  "m-8": {
    marginTop: 32,
    marginBottom: 32,
    marginRight: 32,
    marginLeft: 32
  },
  "m-auto": {
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: "auto",
    marginLeft: "auto"
  },
  "m-px": {
    marginTop: 1,
    marginBottom: 1,
    marginRight: 1,
    marginLeft: 1
  },
  "my-0": {
    marginTop: 0,
    marginBottom: 0
  },
  "mx-0": {
    marginLeft: 0,
    marginRight: 0
  },
  "my-1": {
    marginTop: 4,
    marginBottom: 4
  },
  "mx-1": {
    marginLeft: 4,
    marginRight: 4
  },
  "my-2": {
    marginTop: 8,
    marginBottom: 8
  },
  "mx-2": {
    marginLeft: 8,
    marginRight: 8
  },
  "my-3": {
    marginTop: 12,
    marginBottom: 12
  },
  "mx-3": {
    marginLeft: 12,
    marginRight: 12
  },
  "my-4": {
    marginTop: 16,
    marginBottom: 16
  },
  "mx-4": {
    marginLeft: 16,
    marginRight: 16
  },
  "my-6": {
    marginTop: 24,
    marginBottom: 24
  },
  "mx-6": {
    marginLeft: 24,
    marginRight: 24
  },
  "my-8": {
    marginTop: 32,
    marginBottom: 32
  },
  "mx-8": {
    marginLeft: 32,
    marginRight: 32
  },
  "my-auto": {
    marginTop: "auto",
    marginBottom: "auto"
  },
  "mx-auto": {
    marginLeft: "auto",
    marginRight: "auto"
  },
  "my-px": {
    marginTop: 1,
    marginBottom: 1
  },
  "mx-px": {
    marginLeft: 1,
    marginRight: 1
  },
  "mt-0": {
    marginTop: 0
  },
  "mr-0": {
    marginRight: 0
  },
  "mb-0": {
    marginBottom: 0
  },
  "ml-0": {
    marginLeft: 0
  },
  "mt-1": {
    marginTop: 4
  },
  "mr-1": {
    marginRight: 4
  },
  "mb-1": {
    marginBottom: 4
  },
  "ml-1": {
    marginLeft: 4
  },
  "mt-2": {
    marginTop: 8
  },
  "mr-2": {
    marginRight: 8
  },
  "mb-2": {
    marginBottom: 8
  },
  "ml-2": {
    marginLeft: 8
  },
  "mt-3": {
    marginTop: 12
  },
  "mr-3": {
    marginRight: 12
  },
  "mb-3": {
    marginBottom: 12
  },
  "ml-3": {
    marginLeft: 12
  },
  "mt-4": {
    marginTop: 16
  },
  "mr-4": {
    marginRight: 16
  },
  "mb-4": {
    marginBottom: 16
  },
  "ml-4": {
    marginLeft: 16
  },
  "mt-6": {
    marginTop: 24
  },
  "mr-6": {
    marginRight: 24
  },
  "mb-6": {
    marginBottom: 24
  },
  "ml-6": {
    marginLeft: 24
  },
  "mt-8": {
    marginTop: 32
  },
  "mr-8": {
    marginRight: 32
  },
  "mb-8": {
    marginBottom: 32
  },
  "ml-8": {
    marginLeft: 32
  },
  "mt-auto": {
    marginTop: "auto"
  },
  "mr-auto": {
    marginRight: "auto"
  },
  "mb-auto": {
    marginBottom: "auto"
  },
  "ml-auto": {
    marginLeft: "auto"
  },
  "mt-px": {
    marginTop: 1
  },
  "mr-px": {
    marginRight: 1
  },
  "mb-px": {
    marginBottom: 1
  },
  "ml-px": {
    marginLeft: 1
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
  "-m-0": {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0
  },
  "-m-1": {
    marginTop: -4,
    marginBottom: -4,
    marginRight: -4,
    marginLeft: -4
  },
  "-m-2": {
    marginTop: -8,
    marginBottom: -8,
    marginRight: -8,
    marginLeft: -8
  },
  "-m-3": {
    marginTop: -12,
    marginBottom: -12,
    marginRight: -12,
    marginLeft: -12
  },
  "-m-4": {
    marginTop: -16,
    marginBottom: -16,
    marginRight: -16,
    marginLeft: -16
  },
  "-m-6": {
    marginTop: -24,
    marginBottom: -24,
    marginRight: -24,
    marginLeft: -24
  },
  "-m-8": {
    marginTop: -32,
    marginBottom: -32,
    marginRight: -32,
    marginLeft: -32
  },
  "-m-px": {
    marginTop: -1,
    marginBottom: -1,
    marginRight: -1,
    marginLeft: -1
  },
  "-my-0": {
    marginTop: 0,
    marginBottom: 0
  },
  "-mx-0": {
    marginLeft: 0,
    marginRight: 0
  },
  "-my-1": {
    marginTop: -4,
    marginBottom: -4
  },
  "-mx-1": {
    marginLeft: -4,
    marginRight: -4
  },
  "-my-2": {
    marginTop: -8,
    marginBottom: -8
  },
  "-mx-2": {
    marginLeft: -8,
    marginRight: -8
  },
  "-my-3": {
    marginTop: -12,
    marginBottom: -12
  },
  "-mx-3": {
    marginLeft: -12,
    marginRight: -12
  },
  "-my-4": {
    marginTop: -16,
    marginBottom: -16
  },
  "-mx-4": {
    marginLeft: -16,
    marginRight: -16
  },
  "-my-6": {
    marginTop: -24,
    marginBottom: -24
  },
  "-mx-6": {
    marginLeft: -24,
    marginRight: -24
  },
  "-my-8": {
    marginTop: -32,
    marginBottom: -32
  },
  "-mx-8": {
    marginLeft: -32,
    marginRight: -32
  },
  "-my-px": {
    marginTop: -1,
    marginBottom: -1
  },
  "-mx-px": {
    marginLeft: -1,
    marginRight: -1
  },
  "-mt-0": {
    marginTop: 0
  },
  "-mr-0": {
    marginRight: 0
  },
  "-mb-0": {
    marginBottom: 0
  },
  "-ml-0": {
    marginLeft: 0
  },
  "-mt-1": {
    marginTop: -4
  },
  "-mr-1": {
    marginRight: -4
  },
  "-mb-1": {
    marginBottom: -4
  },
  "-ml-1": {
    marginLeft: -4
  },
  "-mt-2": {
    marginTop: -8
  },
  "-mr-2": {
    marginRight: -8
  },
  "-mb-2": {
    marginBottom: -8
  },
  "-ml-2": {
    marginLeft: -8
  },
  "-mt-3": {
    marginTop: -12
  },
  "-mr-3": {
    marginRight: -12
  },
  "-mb-3": {
    marginBottom: -12
  },
  "-ml-3": {
    marginLeft: -12
  },
  "-mt-4": {
    marginTop: -16
  },
  "-mr-4": {
    marginRight: -16
  },
  "-mb-4": {
    marginBottom: -16
  },
  "-ml-4": {
    marginLeft: -16
  },
  "-mt-6": {
    marginTop: -24
  },
  "-mr-6": {
    marginRight: -24
  },
  "-mb-6": {
    marginBottom: -24
  },
  "-ml-6": {
    marginLeft: -24
  },
  "-mt-8": {
    marginTop: -32
  },
  "-mr-8": {
    marginRight: -32
  },
  "-mb-8": {
    marginBottom: -32
  },
  "-ml-8": {
    marginLeft: -32
  },
  "-mt-px": {
    marginTop: -1
  },
  "-mr-px": {
    marginRight: -1
  },
  "-mb-px": {
    marginBottom: -1
  },
  "-ml-px": {
    marginLeft: -1
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
  "p-0": {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0
  },
  "p-1": {
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 4,
    paddingLeft: 4
  },
  "p-2": {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 8
  },
  "p-3": {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 12,
    paddingLeft: 12
  },
  "p-4": {
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16
  },
  "p-6": {
    paddingTop: 24,
    paddingBottom: 24,
    paddingRight: 24,
    paddingLeft: 24
  },
  "p-8": {
    paddingTop: 32,
    paddingBottom: 32,
    paddingRight: 32,
    paddingLeft: 32
  },
  "p-px": {
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 1,
    paddingLeft: 1
  },
  "py-0": {
    paddingTop: 0,
    paddingBottom: 0
  },
  "px-0": {
    paddingLeft: 0,
    paddingRight: 0
  },
  "py-1": {
    paddingTop: 4,
    paddingBottom: 4
  },
  "px-1": {
    paddingLeft: 4,
    paddingRight: 4
  },
  "py-2": {
    paddingTop: 8,
    paddingBottom: 8
  },
  "px-2": {
    paddingLeft: 8,
    paddingRight: 8
  },
  "py-3": {
    paddingTop: 12,
    paddingBottom: 12
  },
  "px-3": {
    paddingLeft: 12,
    paddingRight: 12
  },
  "py-4": {
    paddingTop: 16,
    paddingBottom: 16
  },
  "px-4": {
    paddingLeft: 16,
    paddingRight: 16
  },
  "py-6": {
    paddingTop: 24,
    paddingBottom: 24
  },
  "px-6": {
    paddingLeft: 24,
    paddingRight: 24
  },
  "py-8": {
    paddingTop: 32,
    paddingBottom: 32
  },
  "px-8": {
    paddingLeft: 32,
    paddingRight: 32
  },
  "py-px": {
    paddingTop: 1,
    paddingBottom: 1
  },
  "px-px": {
    paddingLeft: 1,
    paddingRight: 1
  },
  "pt-0": {
    paddingTop: 0
  },
  "pr-0": {
    paddingRight: 0
  },
  "pb-0": {
    paddingBottom: 0
  },
  "pl-0": {
    paddingLeft: 0
  },
  "pt-1": {
    paddingTop: 4
  },
  "pr-1": {
    paddingRight: 4
  },
  "pb-1": {
    paddingBottom: 4
  },
  "pl-1": {
    paddingLeft: 4
  },
  "pt-2": {
    paddingTop: 8
  },
  "pr-2": {
    paddingRight: 8
  },
  "pb-2": {
    paddingBottom: 8
  },
  "pl-2": {
    paddingLeft: 8
  },
  "pt-3": {
    paddingTop: 12
  },
  "pr-3": {
    paddingRight: 12
  },
  "pb-3": {
    paddingBottom: 12
  },
  "pl-3": {
    paddingLeft: 12
  },
  "pt-4": {
    paddingTop: 16
  },
  "pr-4": {
    paddingRight: 16
  },
  "pb-4": {
    paddingBottom: 16
  },
  "pl-4": {
    paddingLeft: 16
  },
  "pt-6": {
    paddingTop: 24
  },
  "pr-6": {
    paddingRight: 24
  },
  "pb-6": {
    paddingBottom: 24
  },
  "pl-6": {
    paddingLeft: 24
  },
  "pt-8": {
    paddingTop: 32
  },
  "pr-8": {
    paddingRight: 32
  },
  "pb-8": {
    paddingBottom: 32
  },
  "pl-8": {
    paddingLeft: 32
  },
  "pt-px": {
    paddingTop: 1
  },
  "pr-px": {
    paddingRight: 1
  },
  "pb-px": {
    paddingBottom: 1
  },
  "pl-px": {
    paddingLeft: 1
  },
  absolute: {
    position: "absolute"
  },
  relative: {
    position: "relative"
  },
  "pin-none": {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  },
  pin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  "pin-y": {
    top: 0,
    bottom: 0
  },
  "pin-x": {
    right: 0,
    left: 0
  },
  "pin-t": {
    top: 0
  },
  "pin-r": {
    right: 0
  },
  "pin-b": {
    bottom: 0
  },
  "pin-l": {
    left: 0
  },
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
  "w-1": {
    width: 4
  },
  "w-2": {
    width: 8
  },
  "w-3": {
    width: 12
  },
  "w-4": {
    width: 16
  },
  "w-6": {
    width: 24
  },
  "w-8": {
    width: 32
  },
  "w-10": {
    width: 40
  },
  "w-12": {
    width: 48
  },
  "w-16": {
    width: 64
  },
  "w-24": {
    width: 96
  },
  "w-32": {
    width: 128
  },
  "w-48": {
    width: 192
  },
  "w-64": {
    width: 256
  },
  "w-auto": {
    width: "auto"
  },
  "w-px": {
    width: 1
  },
  "w-1/2": {
    width: "50%"
  },
  "w-1/3": {
    width: "33.33333%"
  },
  "w-2/3": {
    width: "66.66667%"
  },
  "w-1/4": {
    width: "25%"
  },
  "w-3/4": {
    width: "75%"
  },
  "w-1/5": {
    width: "20%"
  },
  "w-2/5": {
    width: "40%"
  },
  "w-3/5": {
    width: "60%"
  },
  "w-4/5": {
    width: "80%"
  },
  "w-1/6": {
    width: "16.66667%"
  },
  "w-5/6": {
    width: "83.33333%"
  },
  "w-full": {
    width: "100%"
  },
  "w-screen": {
    width: "100vw"
  }
});
