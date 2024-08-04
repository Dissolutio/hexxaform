import { ImMinus, ImPlus } from "react-icons/im";
import { useMapContext } from "../hooks/useMapContext";
import { StyledMapButton } from "../layout/buttons";

export const DevMapPanButtons = () => {
  const {
    onIncrementX,
    onDecrementX,
    onIncrementY,
    onDecrementY,
    onIncreaseLength,
    onDecreaseLength,
    onIncreaseHeight,
    onDecreaseHeight,
  } = useMapContext();
  return (
    <>
      <StyledMapButton aria-label="- X" onClick={onDecrementX}>
        <ImMinus color="var(--black)" />
        <span>X</span>
      </StyledMapButton>
      <StyledMapButton aria-label="+ X" onClick={onIncrementX}>
        <ImPlus color="var(--black)" />
        <span>X</span>
      </StyledMapButton>
      <StyledMapButton aria-label="- Y" onClick={onDecrementY}>
        <ImMinus color="var(--black)" />
        <span>Y</span>
      </StyledMapButton>
      <StyledMapButton aria-label="+ Y" onClick={onIncrementY}>
        <ImPlus color="var(--black)" />
        <span>Y</span>
      </StyledMapButton>
      <StyledMapButton aria-label="- length" onClick={onDecreaseLength}>
        <ImMinus color="var(--black)" />
        <span>Length</span>
      </StyledMapButton>
      <StyledMapButton aria-label="+ length" onClick={onIncreaseLength}>
        <ImPlus color="var(--black)" />
        <span>Length</span>
      </StyledMapButton>
      <StyledMapButton aria-label="- height" onClick={onDecreaseHeight}>
        <ImMinus color="var(--black)" />
        <span>Height</span>
      </StyledMapButton>
      <StyledMapButton aria-label="+ height" onClick={onIncreaseHeight}>
        <ImPlus color="var(--black)" />
        <span>Height</span>
      </StyledMapButton>
    </>
  );
};
