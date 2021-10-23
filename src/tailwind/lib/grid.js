import config from "../defaultConfig-1.2.0";

const styles = {
  "grid-cols-1": {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))"
  },
  "grid-cols-2": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
  },
  "grid-cols-3": {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
  },
  "grid-cols-4": {
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))"
  },
  "grid-cols-5": {
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))"
  },
  "grid-cols-6": {
    gridTemplateColumns: "repeat(6, minmax(0, 1fr))"
  },
  "grid-cols-7": {
    gridTemplateColumns: "repeat(7, minmax(0, 1fr))"
  },
  "grid-cols-8": {
    gridTemplateColumns: "repeat(8, minmax(0, 1fr))"
  },
  "grid-cols-9": {
    gridTemplateColumns: "repeat(9, minmax(0, 1fr))"
  },
  "grid-cols-10": {
    gridTemplateColumns: "repeat(10, minmax(0, 1fr))"
  },
  "grid-cols-11": {
    gridTemplateColumns: "repeat(11, minmax(0, 1fr))"
  },
  "grid-cols-12": {
    gridTemplateColumns: "repeat(12, minmax(0, 1fr))"
  },
  "grid-cols-none": {
    gridTemplateColumns: "none"
  },
  "col-auto": {
    gridColumn: "auto"
  },
  "col-span-1": {
    gridColumn: "span 1 / span 1"
  },
  "col-span-2": {
    gridColumn: "span 2 / span 2"
  },
  "col-span-3": {
    gridColumn: "span 3 / span 3"
  },
  "col-span-4": {
    gridColumn: "span 4 / span 4"
  },
  "col-span-5": {
    gridColumn: "span 5 / span 5"
  },
  "col-span-6": {
    gridColumn: "span 6 / span 6"
  },
  "col-span-7": {
    gridColumn: "span 7 / span 7"
  },
  "col-span-8": {
    gridColumn: "span 8 / span 8"
  },
  "col-span-9": {
    gridColumn: "span 9 / span 9"
  },
  "col-span-10": {
    gridColumn: "span 10 / span 10"
  },
  "col-span-11": {
    gridColumn: "span 11 / span 11"
  },
  "col-span-12": {
    gridColumn: "span 12 / span 12"
  },
  "col-span-full": {
    gridColumn: "1 / -1"
  },
  "col-start-1": {
    gridColumnStart: "1"
  },
  "col-start-2": {
    gridColumnStart: "2"
  },
  "col-start-3": {
    gridColumnStart: "3"
  },
  "col-start-4": {
    gridColumnStart: "4"
  },
  "col-start-5": {
    gridColumnStart: "5"
  },
  "col-start-6": {
    gridColumnStart: "6"
  },
  "col-start-7": {
    gridColumnStart: "7"
  },
  "col-start-8": {
    gridColumnStart: "8"
  },
  "col-start-9": {
    gridColumnStart: "9"
  },
  "col-start-10": {
    gridColumnStart: "10"
  },
  "col-start-11": {
    gridColumnStart: "11"
  },
  "col-start-12": {
    gridColumnStart: "12"
  },
  "col-start-auto": {
    gridColumnStart: "auto"
  },
  "col-end-1": {
    gridColumnEnd: "1"
  },
  "col-end-2": {
    gridColumnEnd: "2"
  },
  "col-end-3": {
    gridColumnEnd: "3"
  },
  "col-end-4": {
    gridColumnEnd: "4"
  },
  "col-end-5": {
    gridColumnEnd: "5"
  },
  "col-end-6": {
    gridColumnEnd: "6"
  },
  "col-end-7": {
    gridColumnEnd: "7"
  },
  "col-end-8": {
    gridColumnEnd: "8"
  },
  "col-end-9": {
    gridColumnEnd: "9"
  },
  "col-end-10": {
    gridColumnEnd: "10"
  },
  "col-end-11": {
    gridColumnEnd: "11"
  },
  "col-end-12": {
    gridColumnEnd: "12"
  },
  "col-end-auto": {
    gridColumnEnd: "auto"
  },
  "grid-rows-1": {
    gridTemplateRows: "repeat(1, minmax(0, 1fr))"
  },
  "grid-rows-2": {
    gridTemplateRows: "repeat(2, minmax(0, 1fr))"
  },
  "grid-rows-3": {
    gridTemplateRows: "repeat(3, minmax(0, 1fr))"
  },
  "grid-rows-4": {
    gridTemplateRows: "repeat(4, minmax(0, 1fr))"
  },
  "grid-rows-5": {
    gridTemplateRows: "repeat(5, minmax(0, 1fr))"
  },
  "grid-rows-6": {
    gridTemplateRows: "repeat(6, minmax(0, 1fr))"
  },
  "grid-rows-none": {
    gridTemplateRows: "none"
  },
  "row-auto": {
    gridRow: "auto"
  },
  "row-span-1": {
    gridRow: "span 1 / span 1"
  },
  "row-span-2": {
    gridRow: "span 2 / span 2"
  },
  "row-span-3": {
    gridRow: "span 3 / span 3"
  },
  "row-span-4": {
    gridRow: "span 4 / span 4"
  },
  "row-span-5": {
    gridRow: "span 5 / span 5"
  },
  "row-span-6": {
    gridRow: "span 6 / span 6"
  },
  "row-span-7": {
    gridRow: "span 7 / span 7"
  },
  "row-span-8": {
    gridRow: "span 8 / span 8"
  },
  "row-span-9": {
    gridRow: "span 9 / span 9"
  },
  "row-span-10": {
    gridRow: "span 10 / span 10"
  },
  "row-span-11": {
    gridRow: "span 11 / span 11"
  },
  "row-span-12": {
    gridRow: "span 12 / span 12"
  },
  "row-span-full": {
    gridRow: "1 / -1"
  },
  "row-start-1": {
    gridRowStart: "1"
  },
  "row-start-2": {
    gridRowStart: "2"
  },
  "row-start-3": {
    gridRowStart: "3"
  },
  "row-start-4": {
    gridRowStart: "4"
  },
  "row-start-5": {
    gridRowStart: "5"
  },
  "row-start-6": {
    gridRowStart: "6"
  },
  "row-start-7": {
    gridRowStart: "7"
  },
  "row-start-8": {
    gridRowStart: "8"
  },
  "row-start-9": {
    gridRowStart: "9"
  },
  "row-start-10": {
    gridRowStart: "10"
  },
  "row-start-11": {
    gridRowStart: "11"
  },
  "row-start-12": {
    gridRowStart: "12"
  },
  "row-start-auto": {
    gridRowStart: "auto"
  },
  "row-end-1": {
    gridRowEnd: "1"
  },
  "row-end-2": {
    gridRowEnd: "2"
  },
  "row-end-3": {
    gridRowEnd: "3"
  },
  "row-end-4": {
    gridRowEnd: "4"
  },
  "row-end-5": {
    gridRowEnd: "5"
  },
  "row-end-6": {
    gridRowEnd: "6"
  },
  "row-end-7": {
    gridRowEnd: "7"
  },
  "row-end-8": {
    gridRowEnd: "8"
  },
  "row-end-9": {
    gridRowEnd: "9"
  },
  "row-end-10": {
    gridRowEnd: "10"
  },
  "row-end-11": {
    gridRowEnd: "11"
  },
  "row-end-12": {
    gridRowEnd: "12"
  },
  "row-end-auto": {
    gridRowEnd: "auto"
  },
  "grid-flow-row": {
    gridAutoFlow: "row"
  },
  "grid-flow-col": {
    gridAutoFlow: "column"
  },
  "grid-flow-row-dense": {
    gridAutoFlow: "row dense"
  },
  "grid-flow-col-dense": {
    gridAutoFlow: "column dense"
  },
  "auto-cols-auto": {
    gridAutoColumns: "auto"
  },
  "auto-cols-min": {
    gridAutoColumns: "min-content"
  },
  "auto-cols-max": {
    gridAutoColumns: "max-content"
  },
  "auto-cols-fr": {
    gridAutoColumns: "minmax(0, 1fr)"
  },
  "auto-rows-auto": {
    gridAutoRows: "auto"
  },
  "auto-rows-min": {
    gridAutoRows: "min-content"
  },
  "auto-rows-max": {
    gridAutoRows: "max-content"
  },
  "auto-rows-fr": {
    gridAutoRows: "minmax(0, 1fr)"
  },
  "gap-0": {
    gap: "0px"
  },
  "gap-x-0": {
    columnGap: "0px"
  },
  "gap-y-0": {
    rowGap: "0px"
  },
  "gap-px": {
    gap: "1px"
  },
  "gap-x-px": {
    columnGap: "1px"
  },
  "gap-y-px": {
    rowGap: "1px"
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
  "justify-evenly": {
    justifyContent: "space-evenly"
  },
  "justify-items-start": {
    justifyItems: "start"
  },
  "justify-items-end": {
    justifyItems: "end"
  },
  "justify-items-center": {
    justifyItems: "center"
  },
  "justify-items-stretch": {
    justifyItems: "stretch"
  },
  "justify-self-auto": {
    justifySelf: "auto"
  },
  "justify-self-start": {
    justifySelf: "start"
  },
  "justify-self-end": {
    justifySelf: "end"
  },
  "justify-self-center": {
    justifySelf: "center"
  },
  "justify-self-stretch": {
    justifySelf: "stretch"
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
  "content-evenly": {
    alignContent: "space-evenly"
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
  "self-baseline": {
    alignSelf: "baseline"
  },
  "place-content-center": {
    placeContent: "center"
  },
  "place-content-start": {
    placeContent: "start"
  },
  "place-content-end": {
    placeContent: "end"
  },
  "place-content-between": {
    placeContent: "space-between"
  },
  "place-content-around": {
    placeContent: "space-around"
  },
  "place-content-evenly": {
    placeContent: "space-evenly"
  },
  "place-content-stretch": {
    placeContent: "stretch"
  },
  "place-items-start": {
    placeItems: "start"
  },
  "place-items-end": {
    placeItems: "end"
  },
  "place-items-center": {
    placeItems: "center"
  },
  "place-items-stretch": {
    placeItems: "stretch"
  },
  "place-self-auto": {
    placeSelf: "auto"
  },
  "place-self-start": {
    placeSelf: "start"
  },
  "place-self-end": {
    placeSelf: "end"
  },
  "place-self-center": {
    placeSelf: "center"
  },
  "place-self-stretch": {
    placeSelf: "stretch"
  }
};

function addGapStyles(styles, i) {
  let val = (i / 4) + "rem";
  styles["gap-" + i] = {gap: val};
  styles["gap-x-" + i] = {columnGap: val};
  styles["gap-y-" + i] = {rowGap: val};
}

for (let i = 0.5; i < 4; i += 0.5) {
  addGapStyles(styles, i);
}

for (let i = 4; i <= 12; i++) {
  addGapStyles(styles, i);
}

addGapStyles(styles, 14);

for (let i = 16; i <= 64; i += 4) {
  addGapStyles(styles, i);
}

addGapStyles(styles, 72);
addGapStyles(styles, 80);
addGapStyles(styles, 96);

export default styles;
