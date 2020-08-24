import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const SliderContent = styled.div<{translateNumber: number, transitionNumber: number}>`
  transform: ${({translateNumber}) => `translateX(-${translateNumber}%)`};
  transition: ${({transitionNumber}) => `transform ease-out ${transitionNumber}s`};
  height: 100%;
  width: 400%;
  display: flex;
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
`;
