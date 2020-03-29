import config from "../defaultConfig-1.2.0";

const styles = {};

Object.entries(config.theme.colors).forEach(([colorName, colorValues]) => {
  if (typeof colorValues === "string") {
    styles[`border-${colorName}`] = { borderColor: colorValues };
    styles[`bg-${colorName}`] = { backgroundColor: colorValues };
    styles[`text-${colorName}`] = { color: colorValues };
    return;
  }
  Object.entries(colorValues).forEach(([gradientIndex, hexValue]) => {
    styles[`border-${colorName}-${gradientIndex}`] = { borderColor: hexValue };
    styles[`bg-${colorName}-${gradientIndex}`] = { backgroundColor: hexValue };
    styles[`text-${colorName}-${gradientIndex}`] = { color: hexValue };
  });
});

export default styles;
