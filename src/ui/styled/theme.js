import { contourLinesBG } from "../../assets/contourLinesBG";

const contourLinesBgDataUrlStr = contourLinesBG({
  color: "#E4572E",
  opacity: "0.5",
});

export const theme = {
  playerColor: "#E4572E",
  bg: contourLinesBgDataUrlStr,
};
