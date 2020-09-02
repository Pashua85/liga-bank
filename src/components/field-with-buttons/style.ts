import styled from 'styled-components';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
import {DEVICE} from '../../variables';

export const Container = styled.div`
  margin-bottom: 20px;

  @media ${DEVICE.TABLET} {
    margin-bottom: 15px;
  }

  @media ${DEVICE.MOBILE} {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h4`
  color: #394959;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  margin-bottom: 9px;
`;

export const Field = styled.div<{errorMessage: string}>`
  align-items: center;
  border: 1px solid #1F1E25;
  border-color: ${({errorMessage}) => errorMessage.length === 0 ? `#1F1E25` : `red`};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  height: 60px;
  position: relative;
  user-select: none;
`;

export const InnerField = styled.div`
  align-items: flex-end;
  display: flex;
  flex-grow: 2;
`;

export const Input = styled.input`
  appearance: textfield;
  border: none;
  margin-right: 5px;
  font-weight: 500;
  font-size: 17.8px;
  font-family: 'Roboto', sans-serif;
  outline: none;
  padding: 0%;
  text-align: right;
  width: 50%;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
  }

  &:focus {
    outline: none;
  }
`;

export const Span = styled.span`
  font-size: 17.8px;
  font-weight: 500;
`;

export const ErrorSpan = styled.span`
  bottom: 0;
  color: red;
  left: calc(50% + 5px);
  font-size: 8px;
  position: absolute;
  text-transform: uppercase;
`;

export const Button = styled.div<{name: string, isDisabled: boolean}>`
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  border: 4px solid white;
  border-radius: 50%;
  box-sizing: content-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: ${({isDisabled}) => isDisabled ? `` : `pointer`} ;
  height: 16px;
  position: relative;
  width: 16px;

  &[name="increase"] {
    background-image: url(${plus});
    margin-right: 19px;
  }

  &[name="decrease"] {
    background-image: url(${minus});
    margin-left: 19px;
    margin-top: -2px;
  }

  &:hover {
    box-shadow: ${({isDisabled}) => isDisabled ? `` : `1px 2px 7px rgba(0,0,0,0.5)`};
    transform: ${({isDisabled}) => isDisabled ? `` : `translateY(-1px)`};
  }

  &:active {
    box-shadow: none;
    transform: none;
  }

  &:before {
    background-color: ${({isDisabled}) => isDisabled ? `rgba(255, 255, 255, .5)` : ``};
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export const Subtitle = styled.div`
  color: #707C87;
  font-size: 14px;
  line-height: 20px;
`;
