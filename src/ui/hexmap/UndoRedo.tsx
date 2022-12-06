import React from "react";
import styled from "styled-components";
import { ImUndo, ImRedo } from "react-icons/im";

import { useBgioMoves } from "../bgio-contexts";
type Props = {
  htmlId: string;
};
export const UndoRedo = ({ htmlId }: Props) => {
  const { undo, redo } = useBgioMoves();
  return (
    <StyledUndoRedo id={htmlId}>
      <button aria-label="Undo" onClick={undo}>
        <ImUndo color="var(--player-color)" />
      </button>
      <button aria-label="Redo" onClick={redo}>
        <ImRedo color="var(--player-color)" />
      </button>
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
