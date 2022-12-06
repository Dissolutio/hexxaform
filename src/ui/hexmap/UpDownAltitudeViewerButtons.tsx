import React from "react";
import styled from "styled-components";
import { ImMoveDown, ImMoveUp } from "react-icons/im";
import { useMapContext } from "../hooks/useMapContext";
import { useBgioG } from "../bgio-contexts";

export const UpDownAltitudeViewerButtons = () => {
  const { G } = useBgioG();
  const { boardHexes } = G;
  const maxHeightHex = Object.values(boardHexes).reduce((prev, curr) => {
    if (curr.altitude > prev) {
      return curr.altitude;
    } else {
      return prev;
    }
  }, 0);
  const { altitudeViewer, goUpAltitudeViewer, goDownAltitudeViewer } =
    useMapContext();
  // Handling this case here instead of in context, so as not to access context in context
  const handleUp = () => {
    if (altitudeViewer > maxHeightHex) {
      return;
    }
    goUpAltitudeViewer();
  };

  return (
    <StyledUpDownAltitudeViewer>
      <button aria-label="Zoom out" onClick={goDownAltitudeViewer}>
        <ImMoveDown color="var(--player-color)" />
      </button>
      <span>{altitudeViewer}</span>
      <button aria-label="Zoom in" onClick={handleUp}>
        <ImMoveUp color="var(--player-color)" />
      </button>
    </StyledUpDownAltitudeViewer>
  );
};
export const StyledUpDownAltitudeViewer = styled.span`
  position: absolute;
  top: 120px;
  left: 0%;
  padding-top: 36px;
  padding-left: 36px;
  @media screen and (max-width: 1100px) {
    padding-top: 14px;
    padding-left: 14px;
  }
  z-index: 2;
  button {
    background-color: var(--gunmetal-transparent);
    cursor: pointer;
  }
  svg {
    width: 30px;
    height: 30px;
    @media screen and (max-width: 1100px) {
      width: 18px;
      height: 18px;
    }
  }
`;
