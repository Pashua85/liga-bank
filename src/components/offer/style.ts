import styled from 'styled-components';
import {DEVICE} from '../../variables';

export const Container = styled.div`
  background-color: #F6F7FF;
  margin-top: 8px;
  padding-top: 52px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 60px;
  width: 42.735%;
  height: fit-content;

  @media ${DEVICE.TABLET} {
    padding-top: 53px;
    width: 100%;
  }
`;

export const Header = styled.h3`
  font-size: 22px;
  font-weight: 500;
  line-height: 31px;
  margin-bottom: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;

  @media ${DEVICE.TABLET} {
    justify-content: flex-start;
    margin-bottom: 8px;
  }
  
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  margin-right: 10px;

  @media ${DEVICE.TABLET} {
    margin-right: 50px;
    margin-bottom: 26px;
  }

  &:nth-child(3) {
    margin-right: 62px;
  }
`;

export const ValueNumber = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 31px;
  margin-bottom: 2px;
`;

export const Label = styled.div`
  font-size: 15.9px;
  line-height: 22px;
`;

export const Button = styled.a<{onClick: () => void}>`
  background-color: #2C36F2;
  border-radius: 4px;
  color: #F6F7FF;
  cursor: pointer;
  display: inline-block;
  height: 51px;
  font-weight: 500;
  font-size: 16px;
  line-height: 51px;
  text-decoration: none;
  text-align: center;
  width: 100%;
  vertical-align: middle;
  user-select: none;

  &:hover {
    filter: brightness(110%);
    color: #F6F7FF;
    text-decoration: none;
  }

  &:active {
    filter: none;
  }
`;

