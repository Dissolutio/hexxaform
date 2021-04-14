import React from "react";
import styled from "styled-components";

export const TurnCounter = () => {
  return <StyledTurnCounter>Cool Info?</StyledTurnCounter>;
};

const StyledTurnCounter = styled.span`
  position: absolute;
  top: 0%;
  right: 0%;
  padding-top: 36px;
  padding-right: 36px;
  @media screen and (max-width: 1100px) {
    padding-top: 14px;
    padding-left: 14px;
  }
  font-size: 0.8rem;
  z-index: 2;
`;
