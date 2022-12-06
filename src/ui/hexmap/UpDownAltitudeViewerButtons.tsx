import React from "react";
import styled from "styled-components";
import { ImMoveDown, ImMoveUp } from "react-icons/im";
import { useMapContext } from "../hooks/useMapContext";
import { useBgioG } from "../bgio-contexts";
import { StyledButton } from "../controls";

type Props = {
  htmlId: string;
};

export const UpDownAltitudeViewerButtons = ({ htmlId }: Props) => {
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
    <StyledUpDownAltitudeViewer id={htmlId}>
      <StyledButton aria-label="Zoom out" onClick={goDownAltitudeViewer}>
        <ImMoveDown color="var(--black)" />
        <span>Go Down</span>
      </StyledButton>
      <StyledButton aria-label="Zoom in" onClick={handleUp}>
        <ImMoveUp color="var(--black)" />
        <span>Go Up</span>
      </StyledButton>
      <span style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}>
        Altitude:{" "}
        <span
          style={{
            fontWeight: 900,
          }}
        >
          {altitudeViewer}
        </span>
      </span>
    </StyledUpDownAltitudeViewer>
  );
};
const StyledUpDownAltitudeViewer = styled.span`
  position: absolute;
  top: 120px;
  left: 0%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 36px;
  padding-left: 36px;
  @media screen and (max-width: 1100px) {
    padding-top: 14px;
    padding-left: 14px;
  }
  z-index: 2;
  svg {
    width: 30px;
    height: 30px;
    @media screen and (max-width: 1100px) {
      width: 18px;
      height: 18px;
    }
  }
`;
