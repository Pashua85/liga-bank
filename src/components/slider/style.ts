import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const SliderContent = styled.div<{translate: number, transition: number}>`
  transform: ${({translate}) => `translateX(-${translate}%)`};
  transition: ${({transition}) => `transform ease-out ${transition}s`};
  height: 100%;
  width: 400%;
  display: flex;
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
`;
