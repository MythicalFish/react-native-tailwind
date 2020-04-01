import config from "../defaultConfig-1.2.0";

// TODO: facilitate theming
const getSpacing = () => {
  const spacing = {};
  Object.keys(config.theme.spacing).forEach((key) => {
    if (key === "px") return;
    spacing[key] = parseFloat(key) * 4;
  });
  return spacing;
};

const widths = config.theme.width(getSpacing);
const styles = {};

Object.entries(widths).forEach(([key, val]) => {
  styles[`w-${key}`] = { width: val };
});

export default styles;
