import React from "react";
import styled from "styled-components";
import { ImUndo, ImRedo } from "react-icons/im";

import { useBgioMoves } from "../bgio-contexts";
import { StyledButton } from ".";
export const UndoRedo = () => {
  const { undo, redo } = useBgioMoves();
  return (
    <>
      <StyledButton aria-label="Undo" onClick={undo}>
        <ImUndo color="var(--black)" />
        <span>Undo</span>
      </StyledButton>
      <StyledButton aria-label="Redo" onClick={redo}>
        <ImRedo color="var(--black)" />
        <span>Redo</span>
      </StyledButton>
    </>
  );
};
