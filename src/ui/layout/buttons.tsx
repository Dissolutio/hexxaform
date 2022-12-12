import styled from "styled-components";

export const StyledMapButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 0.8rem;
  @media screen and (max-width: 1100px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.4rem;
  }
  svg {
    width: 20px;
    height: 20px;
    @media screen and (max-width: 1100px) {
      width: 18px;
      height: 18px;
    }
    @media screen and (max-width: 600px) {
      width: 14px;
      height: 14px;
    }
  }
`;
