import styled from 'styled-components';
import {DEVICE} from '../../variables';

export const Container = styled.div`
  margin-bottom: 4px;

  @media ${DEVICE.TABLET} {
    margin-bottom: 6px;
  }

  @media ${DEVICE.MOBILE} {
    margin-bottom: 7px;
  }
`;

export const Title = styled.h4`
  color: #394959;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  margin-bottom: 9px;
`;

export const Field = styled.div`
  align-items: center;
  border: 1px solid #1F1E25;
  border-color:  #1F1E25;
  border-radius: 4px;
  display: flex;
  justify-content: center;
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
