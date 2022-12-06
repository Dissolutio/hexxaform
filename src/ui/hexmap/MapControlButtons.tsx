import React from "react";
import styled from "styled-components";
import { ImMoveDown, ImMoveUp, ImZoomIn, ImZoomOut } from "react-icons/im";
import { useMapContext } from "../hooks/useMapContext";
import { useBgioG } from "../bgio-contexts";
export const MapControlButtons = ({
  handleClickZoomIn,
  handleClickZoomOut,
  htmlId,
}: {
  handleClickZoomIn: () => void;
  handleClickZoomOut: () => void;
  htmlId: string;
}) => {
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
    <StyledMapZoomControls id={htmlId}>
      <StyledButton aria-label="Zoom out" onClick={handleClickZoomOut}>
        <ImZoomOut color="var(--black)" />
        <span>Zoom out</span>
      </StyledButton>
      <StyledButton aria-label="Zoom in" onClick={handleClickZoomIn}>
        <ImZoomIn color="var(--black)" />
        <span>Zoom in</span>
      </StyledButton>
      <StyledButton onClick={goDownAltitudeViewer}>
        <ImMoveDown color="var(--black)" />
        <span>Go Down</span>
      </StyledButton>
      <StyledButton onClick={handleUp}>
        <ImMoveUp color="var(--black)" />
        <span>Go Up</span>
      </StyledButton>
      <StyledAltitudeSpan>
        Altitude:{" "}
        <span
          style={{
            fontWeight: 900,
          }}
        >
          {altitudeViewer}
        </span>
      </StyledAltitudeSpan>
      <button type="button" onClick={() => {}}>
        Download as Image
      </button>
    </StyledMapZoomControls>
  );
};
export const StyledMapZoomControls = styled.span`
  position: absolute;
  top: 0%;
  left: 0%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 36px;
  padding-left: 36px;
  @media screen and (max-width: 1100px) {
    padding-top: 14px;
    padding-left: 14px;
  }
  z-index: 2;
`;
const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 0.8rem;
  @media screen and (max-width: 1100px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.4rem;
  }
  svg {
    width: 20px;
    height: 20px;
    @media screen and (max-width: 1100px) {
      width: 18px;
      height: 18px;
    }
    @media screen and (max-width: 600px) {
      width: 14px;
      height: 14px;
    }
  }
`;
const StyledAltitudeSpan = styled.span`
  font-size: 0.8rem;
  align-self: center;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;
