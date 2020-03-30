const styles = {};

["0", "auto"].forEach((variation) => {
  const value = variation === "auto" ? variation : parseInt(variation);
  styles[`inset-${variation}`] = {
    top: value,
    right: value,
    bottom: value,
    left: value
  };
  styles[`inset-y-${variation}`] = {
    top: value,
    bottom: value
  };
  styles[`inset-x-${variation}`] = {
    right: value,
    left: value
  };
  styles[`top-${variation}`] = { top: value };
  styles[`right-${variation}`] = { right: value };
  styles[`bottom-${variation}`] = { bottom: value };
  styles[`left-${variation}`] = { left: value };
});

export default {
  relative: { position: "relative" },
  absolute: { position: "absolute" },
  ...styles
};
