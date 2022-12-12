import React from "react";
import styled from "styled-components";
import {
  ImMinus,
  ImMoveDown,
  ImMoveUp,
  ImPlus,
  ImZoomIn,
  ImZoomOut,
} from "react-icons/im";
import { useMapContext } from "../hooks/useMapContext";
import { useBgioG } from "../bgio-contexts/useBgioG";
import { ExportMapAsImgButton } from "./ExportMapAsImgButton";

export const DevMapPanButtons = () => {
  const {
    onIncrementX,
    onDecrementX,
    onIncrementY,
    onDecrementY,
    onIncreaseLength,
    onDecreaseLength,
    onIncreaseHeight,
    onDecreaseHeight,
  } = useMapContext();
  return (
    <StyledMapZoomControls style={{ bottom: "20%", top: "initial" }}>
      <StyledButton aria-label="- X" onClick={onDecrementX}>
        <ImMinus color="var(--black)" />
        <span>X</span>
      </StyledButton>
      <StyledButton aria-label="+ X" onClick={onIncrementX}>
        <ImPlus color="var(--black)" />
        <span>X</span>
      </StyledButton>
      <StyledButton aria-label="- Y" onClick={onDecrementY}>
        <ImMinus color="var(--black)" />
        <span>Y</span>
      </StyledButton>
      <StyledButton aria-label="+ Y" onClick={onIncrementY}>
        <ImPlus color="var(--black)" />
        <span>Y</span>
      </StyledButton>
      <StyledButton aria-label="- length" onClick={onDecreaseLength}>
        <ImMinus color="var(--black)" />
        <span>Length</span>
      </StyledButton>
      <StyledButton aria-label="+ length" onClick={onIncreaseLength}>
        <ImPlus color="var(--black)" />
        <span>Length</span>
      </StyledButton>
      <StyledButton aria-label="- height" onClick={onDecreaseHeight}>
        <ImMinus color="var(--black)" />
        <span>Height</span>
      </StyledButton>
      <StyledButton aria-label="+ height" onClick={onIncreaseHeight}>
        <ImPlus color="var(--black)" />
        <span>Height</span>
      </StyledButton>
    </StyledMapZoomControls>
  );
};
export const MapControlButtons = ({
  handleClickZoomIn,
  handleClickZoomOut,
  htmlId,
  printRef,
}: {
  handleClickZoomIn: () => void;
  handleClickZoomOut: () => void;
  htmlId: string;
  printRef: React.RefObject<HTMLDivElement>;
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
      <ExportMapAsImgButton
        printRef={printRef}
        imgType={"png"}
        htmlIdMapControls={htmlId}
      />
      <ExportMapAsImgButton
        printRef={printRef}
        imgType={"jpg"}
        htmlIdMapControls={htmlId}
      />
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
