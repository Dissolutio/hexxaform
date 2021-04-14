import styled from "styled-components";

type MapHexStylesProps = {
  hexSize: number;
};
export const MapHexStyles = styled.div<MapHexStylesProps>`
  height: 100%;
  position: relative;
  overflow: scroll;
  //🛠 Style Map Scrollbars
  scrollbar-width: thin;
  scrollbar-color: var(--player-color) var(--black);
  &::-webkit-scrollbar {
    height: 0.2rem;
    width: 0.2rem;
    background: var(--black);
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 1px var(--player-color);
    background: var(--black);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--player-color);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-corner {
    background: var(--black);
  }
  //🛠 Style Hex Text
  .maphex_text {
    fill: var(--sub-white);
    font-size: ${(props) => `${props.hexSize / 75}rem`};
  }

  // highlight all hexes

  /* svg g polygon {
    stroke: var(--white);
    stroke-width: 0.1;
  } */

  // paint all hexes

  /* .hexagon-group {
    fill: var(--white);
    g polygon {
      @media (hover: hover) {
        &:hover {
          fill: var(--neon-orange);
          fill-opacity: 0.6;
        }
      }
    }
  } */

  .maphex__terrain--void-0 {
    stroke: var(--white);
    stroke-width: 0.1;
    border: 1px solid red;
    fill: transparent;
  }
  .maphex__terrain--grass-0 {
    fill: var(--green);
    fill-opacity: 0.4;
  }
  //
  //🛠 Selected Map Hex
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
