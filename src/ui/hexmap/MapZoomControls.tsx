import React from "react";
import styled from "styled-components";
import { ImZoomIn, ImZoomOut } from "react-icons/im";
import { StyledButton } from "../controls";

export const MapZoomControls = ({
  handleClickZoomIn,
  handleClickZoomOut,
  htmlId,
}: {
  handleClickZoomIn: () => void;
  handleClickZoomOut: () => void;
  htmlId: string;
}) => {
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
    </StyledMapZoomControls>
  );
};
export const StyledMapZoomControls = styled.span<{ x?: string; y?: string }>`
  position: absolute;
  top: ${(props) => props?.y ?? "0%"};
  left: ${(props) => props?.x ?? "0%"};
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
  button {
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
