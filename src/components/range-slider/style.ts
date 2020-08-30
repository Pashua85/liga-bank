import styled from 'styled-components';

export const Container = styled.div`
  outline: 1px solid red;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const RangeInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #2C36F2;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6.5px;
    height: 14px;
    width: 14px;
  }

  &::-moz-range-thumb {
    background-color: #2C36F2;
    border-radius: 50%;
    cursor: pointer;
    height: 14px;
    width: 14px;
  }

  &::-ms-thumb {
    background-color: #2C36F2;
    border-radius: 50%;
    cursor: pointer;
    height: 14px;
    width: 14px;
  }

  &::-webkit-slider-runnable-track {
    height: 1px;
    background-color: #C1C2CA;
  }

  &::-ms-track {
    background: transparent; 
    border-color: transparent;
    cursor: pointer;
    color: transparent;
    width: 100%;
  }
`;
