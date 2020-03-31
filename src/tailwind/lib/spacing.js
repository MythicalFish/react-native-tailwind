import config from "../defaultConfig-1.2.0";

const makeSpace = (negative = false) => {
  const styles = {};
  Object.keys({ ...config.theme.spacing, auto: "auto" }).forEach((key) => {
    let value = 1;
    let prefix = "";
    if (key === "auto") {
      value = "auto";
    } else if (key !== "px") value = parseFloat(key) * 4;

    if (negative && value === ("auto" || 0)) return;

    if (negative) {
      prefix = "-";
      value = parseFloat(`-${value}`);
    }

    styles[`${prefix}m-${key}`] = { margin: value };
    styles[`${prefix}mx-${key}`] = { marginLeft: value, marginRight: value };
    styles[`${prefix}my-${key}`] = { marginTop: value, marginBottom: value };
    styles[`${prefix}mt-${key}`] = { marginTop: value };
    styles[`${prefix}mr-${key}`] = { marginRight: value };
    styles[`${prefix}mb-${key}`] = { marginBottom: value };
    styles[`${prefix}ml-${key}`] = { marginLeft: value };

    if (!negative) {
      styles[`p-${key}`] = { padding: value };
      styles[`px-${key}`] = {
        paddingLeft: value,
        paddingRight: value
      };
      styles[`py-${key}`] = {
        paddingTop: value,
        paddingBottom: value
      };
      styles[`pt-${key}`] = { paddingTop: value };
      styles[`pr-${key}`] = { paddingRight: value };
      styles[`pb-${key}`] = { paddingBottom: value };
      styles[`pl-${key}`] = { paddingLeft: value };
    }
  });
  return styles;
};

export default {
  ...makeSpace(),
  ...makeSpace(true)
};
