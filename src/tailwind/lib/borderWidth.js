import config from "../defaultConfig-1.2.0";

const styles = {};

Object.entries(config.theme.borderWidth).forEach(([key, val]) => {
  const suffix = key === "default" ? "" : `-${key}`;
  const value = parseInt(val);
  styles[`border${suffix}`] = { borderWidth: value };
  styles[`border-t${suffix}`] = { borderTopWidth: value };
  styles[`border-r${suffix}`] = { borderRightWidth: value };
  styles[`border-b${suffix}`] = { borderBottomWidth: value };
  styles[`border-l${suffix}`] = { borderLeftWidth: value };
});

export default styles;
