import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/esm/Button";
import { ImUndo, ImRedo } from "react-icons/im";

import { useBgioMoves } from "bgio-contexts";

export const UndoRedo = () => {
  const { undo, redo } = useBgioMoves();
  return (
    <StyledUndoRedo>
      <Button aria-label="Undo" size="sm" variant="dark" onClick={undo}>
        <ImUndo color="var(--player-color)" />
      </Button>
      <Button aria-label="Redo" size="sm" variant="dark" onClick={redo}>
        <ImRedo color="var(--player-color)" />
      </Button>
    </StyledUndoRedo>
  );
};

const StyledUndoRedo = styled.span`
  position: absolute;
  top: 60px;
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
