import React from "react";
import styled from "styled-components";
import { ImMoveDown, ImMoveUp, ImZoomIn, ImZoomOut } from "react-icons/im";
import { useMapContext } from "../hooks/useMapContext";
import { useBgioG } from "../bgio-contexts/useBgioG";
import { ExportMapAsImgButton } from "./ExportMapAsImgButton";
import { StyledMapButton } from "../layout/buttons";

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
      <StyledMapButton aria-label="Zoom out" onClick={handleClickZoomOut}>
        <ImZoomOut color="var(--black)" />
        <span>Zoom out</span>
      </StyledMapButton>
      <StyledMapButton aria-label="Zoom in" onClick={handleClickZoomIn}>
        <ImZoomIn color="var(--black)" />
        <span>Zoom in</span>
      </StyledMapButton>
      <StyledMapButton onClick={goDownAltitudeViewer}>
        <ImMoveDown color="var(--black)" />
        <span>Go Down</span>
      </StyledMapButton>
      <StyledMapButton onClick={handleUp}>
        <ImMoveUp color="var(--black)" />
        <span>Go Up</span>
      </StyledMapButton>
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

const StyledAltitudeSpan = styled.span`
  font-size: 0.8rem;
  align-self: center;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;
