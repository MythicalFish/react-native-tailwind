import config from "../defaultConfig-1.2.0";

const styles = {
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
  // NOTE: flex-auto etc. as defined in the config can't be used in RN.
  "flex-1": {
    flex: 1
  },
  "flex-2": {
    flex: 2
  },
  "flex-3": {
    flex: 3
  },
  "flex-4": {
    flex: 4
  }
};

Object.entries(config.theme.flexGrow).forEach(([key, value]) => {
  const suffix = key === "default" ? "" : `-${key}`;
  styles[`flex-grow${suffix}`] = { flexGrow: parseInt(value) };
});

Object.entries(config.theme.flexShrink).forEach(([key, value]) => {
  const suffix = key === "default" ? "" : `-${key}`;
  styles[`flex-shrink${suffix}`] = { flexShrink: parseInt(value) };
});

export default styles;
