import styled from "styled-components";
import { FaEraser } from "react-icons/fa";
import { GiUpCard } from "react-icons/gi";

import { useMapContext } from "ui/hooks/useMapContext";

export const Controls = () => {
  const {
    showStartzones,
    toggleShowStartzones,
    showTerrain,
    toggleShowTerrain,
    isEraser,
    toggleEraserMode,
    isIncAltitudePen,
    toggleIncAltitudePen,
    isDecAltitudePen,
    toggleDecAltitudePen,
  } = useMapContext();
  const greenOnRedOff = (state) => {
    return state
      ? {
          color: "green",
        }
      : {
          color: "black",
        };
  };

  return (
    <>
      <StyledSection>
        <h4>Set Pen Mode:</h4>
        <button style={greenOnRedOff(isEraser)} onClick={toggleEraserMode}>
          <FaEraser />
          Eraser
        </button>
        <button onClick={toggleIncAltitudePen}>
          <GiUpCard />
          Increase Altitude
        </button>
        <button onClick={toggleDecAltitudePen}>
          <GiUpCard style={{ transform: "translateY(0.2em) rotate(180deg)" }} />
          Decrease Altitude
        </button>
      </StyledSection>
      <StyledSection>
        <h4>Toggle Lenses:</h4>
        <button
          style={greenOnRedOff(showStartzones)}
          onClick={toggleShowStartzones}
        >
          STARTZONES
        </button>
        <button style={greenOnRedOff(showTerrain)} onClick={toggleShowTerrain}>
          TERRAIN
        </button>
      </StyledSection>
    </>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em 0;
  h4 {
    padding: 5px;
    margin: 0;
    font-size: 1rem;
  }
`;
