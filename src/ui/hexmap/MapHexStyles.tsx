import { Ref } from "react";
import styled from "styled-components";

type MapHexStylesProps = {
  hexSize: number;
  mapZoomScalePercentage: number;
  ref: Ref<HTMLDivElement> | null;
};
export const MapHexStyles = styled.div<MapHexStylesProps>`
  height: 100%;
  position: relative;
  /* svg {
    scale: ${(props) => `${props.mapZoomScalePercentage}%`};
  } */
  &::-webkit-scrollbar-corner {
    background: var(--black);
  }

  // Style Hex Text
  .maphex_text {
    fill: var(--white);
    font-size: ${(props) => `${props.hexSize / 60}rem`};
    /* transform: rotate(-30deg); */
  }

  // highlight all hexes
  svg g polygon {
    stroke: var(--white);
    stroke-width: 0.1;
  }
  .maphex__terrain--void {
    stroke: var(--white);
    stroke-width: 0.1;
    border: 3px dashed var(--white);
    fill: var(--white);
    fill-opacity: 0.02;
  }
  .maphex__terrain--water {
    fill: var(--water);
    fill-opacity: 0.4;
  }
  .maphex__terrain--grass {
    fill: var(--green);
    fill-opacity: 0.4;
  }
  .maphex__terrain--sand {
    fill: var(--sand);
    fill-opacity: 0.4;
  }
  .maphex__terrain--rock {
    fill: var(--rock);
    fill-opacity: 0.4;
  }
  // Opacify
  .maphex__terrain--opacify > g polygon {
    fill-opacity: 0.01;
  }
  // Selected Map Hex
  .maphex__selected--active > g polygon {
    stroke: var(--white);
    stroke-width: 0.6;
  }

  // HIGHLIGHT ALL PLAYER STARTZONES
  .maphex__startzone--player0 {
    fill: ${(props) => props.theme.playerColors["0"]};
    stroke-width: 0.3;
    @media screen and (max-width: 1100px) {
      stroke-width: 0.4;
    }
  }
  .maphex__startzone--player1 {
    fill: ${(props) => props.theme.playerColors["1"]};
    stroke-width: 0.3;
    @media screen and (max-width: 1100px) {
      stroke-width: 0.4;
    }
  }
  .maphex__startzone--player2 {
    fill: ${(props) => props.theme.playerColors["2"]};
    stroke-width: 0.3;
    @media screen and (max-width: 1100px) {
      stroke-width: 0.4;
    }
  }
  .maphex__startzone--player3 {
    fill: ${(props) => props.theme.playerColors["3"]};
    stroke-width: 0.3;
    @media screen and (max-width: 1100px) {
      stroke-width: 0.4;
    }
  }
  .maphex__startzone--player4 {
    fill: ${(props) => props.theme.playerColors["4"]};
    stroke-width: 0.3;
    @media screen and (max-width: 1100px) {
      stroke-width: 0.4;
    }
  }
  .maphex__startzone--player5 {
    fill: ${(props) => props.theme.playerColors["5"]};
    stroke-width: 0.3;
    @media screen and (max-width: 1100px) {
      stroke-width: 0.4;
    }
  }
`;
