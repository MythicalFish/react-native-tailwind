import config from "../defaultConfig-1.2.0";

const styles = {};

Object.entries(config.theme.borderRadius).forEach(([key, val]) => {
  const suffix = key === "default" ? "" : `-${key}`;
  const value =
    typeof val === "string" && val.includes("rem")
      ? parseFloat(val) * 16
      : parseFloat(val);
  styles[`rounded${suffix}`] = { borderRadius: value };
  styles[`rounded-t${suffix}`] = {
    borderTopLeftRadius: value,
    borderTopRightRadius: value,
  };
  styles[`rounded-r${suffix}`] = {
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
  };
  styles[`rounded-b${suffix}`] = {
    borderBottomLeftRadius: value,
    borderBottomRightRadius: value,
  };
  styles[`rounded-l${suffix}`] = {
    borderBottomLeftRadius: value,
    borderTopLeftRadius: value,
  };
  styles[`rounded-tr${suffix}`] = { borderTopRightRadius: value };
  styles[`rounded-br${suffix}`] = { borderBottomRightRadius: value };
  styles[`rounded-bl${suffix}`] = { borderBottomLeftRadius: value };
  styles[`rounded-tl${suffix}`] = { borderTopLeftRadius: value };
});

console.log({ styles });

export default styles;
