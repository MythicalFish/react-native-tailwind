import colors from "./lib/colors";
import borderRadius from "./lib/borderRadius";
import borderStyle from "./lib/borderStyle";
import borderWidth from "./lib/borderWidth";
import position from "./lib/position";
import spacing from "./lib/spacing";
import width from "./lib/width";
import flex from "./lib/flex";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  ...colors,
  ...borderRadius,
  ...borderStyle,
  ...borderWidth,
  hidden: {
    display: "none",
  },
  ...flex,
  "font-sans": {
    fontFamily:
      "system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  "font-serif": {
    fontFamily:
      "Constantia, Lucida Bright, Lucidabright, Lucida Serif, Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif",
  },
  "font-mono": {
    fontFamily:
      "Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  "font-hairline": {
    fontWeight: "100",
  },
  "font-thin": {
    fontWeight: "200",
  },
  "font-light": {
    fontWeight: "300",
  },
  "font-normal": {
    fontWeight: "400",
  },
  "font-medium": {
    fontWeight: "500",
  },
  "font-semibold": {
    fontWeight: "600",
  },
  "font-bold": {
    fontWeight: "700",
  },
  "font-extrabold": {
    fontWeight: "800",
  },
  "font-black": {
    fontWeight: "900",
  },
  "h-1": {
    height: 4,
  },
  "h-2": {
    height: 8,
  },
  "h-3": {
    height: 12,
  },
  "h-4": {
    height: 16,
  },
  "h-5": {
    height: 20,
  },
  "h-6": {
    height: 24,
  },
  "h-8": {
    height: 32,
  },
  "h-10": {
    height: 40,
  },
  "h-12": {
    height: 48,
  },
  "h-16": {
    height: 64,
  },
  "h-20": {
    height: 80,
  },
  "h-24": {
    height: 96,
  },
  "h-32": {
    height: 128,
  },
  "h-48": {
    height: 192,
  },
  "h-64": {
    height: 256,
  },
  "h-auto": {
    height: "auto",
  },
  "h-px": {
    height: 1,
  },
  "h-full": {
    height: "100%",
  },
  "leading-none": {
    lineHeight: 1,
  },
  "leading-tight": {
    lineHeight: 1.25,
  },
  "leading-snug": {
    lineHeight: 1.375,
  },
  "leading-normal": {
    lineHeight: 1.5,
  },
  "leading-relaxed": {
    lineHeight: 1.625,
  },
  "leading-loose": {
    lineHeight: 2,
  },
  "max-h-full": {
    maxHeight: "100%",
  },
  "max-w-xs": {
    maxWidth: 320,
  },
  "max-w-sm": {
    maxWidth: 480,
  },
  "max-w-md": {
    maxWidth: 640,
  },
  "max-w-lg": {
    maxWidth: 800,
  },
  "max-w-xl": {
    maxWidth: 960,
  },
  "max-w-2xl": {
    maxWidth: 1120,
  },
  "max-w-3xl": {
    maxWidth: 1280,
  },
  "max-w-4xl": {
    maxWidth: 1440,
  },
  "max-w-5xl": {
    maxWidth: 1600,
  },
  "max-w-full": {
    maxWidth: "100%",
  },
  "min-h-0": {
    minHeight: 0,
  },
  "min-h-full": {
    minHeight: "100%",
  },
  "min-w-0": {
    minWidth: 0,
  },
  "min-w-full": {
    minWidth: "100%",
  },
  "opacity-0": {
    opacity: 0,
  },
  "opacity-25": {
    opacity: 0.25,
  },
  "opacity-50": {
    opacity: 0.5,
  },
  "opacity-75": {
    opacity: 0.75,
  },
  "opacity-100": {
    opacity: 1,
  },
  ...spacing,
  ...position,
  "text-left": {
    textAlign: "left",
  },
  "text-center": {
    textAlign: "center",
  },
  "text-right": {
    textAlign: "right",
  },
  "text-justify": {
    textAlign: "justify",
  },
  "text-xs": {
    fontSize: 12,
  },
  "text-sm": {
    fontSize: 14,
  },
  "text-base": {
    fontSize: 16,
  },
  "text-lg": {
    fontSize: 18,
  },
  "text-xl": {
    fontSize: 20,
  },
  "text-2xl": {
    fontSize: 24,
  },
  "text-3xl": {
    fontSize: 30,
  },
  "text-4xl": {
    fontSize: 36,
  },
  "text-5xl": {
    fontSize: 48,
  },
  italic: {
    fontStyle: "italic",
  },
  roman: {
    fontStyle: "normal",
  },
  "tracking-tight": {
    letterSpacing: -0.8,
  },
  "tracking-normal": {
    letterSpacing: 0,
  },
  "tracking-wide": {
    letterSpacing: 0.8,
  },
  ...width,
});
