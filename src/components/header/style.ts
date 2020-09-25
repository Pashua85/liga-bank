import styled from 'styled-components';
import enterImg from '../../assets/enter.svg';
import logoImg from '../../assets/logo.svg';
import {MAIN_FONT_COLOR, HOVER_FONT_COLOR, DEVICE} from '../../variables';

export const HeaderStyled = styled.div`
  background-color: #F6F7FF;
  
  @media ${DEVICE.MOBILE} {
    position: relative;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1645px;
  min-height: 91px;
  width: 85.652%;

  @media ${DEVICE.TABLET} {
    min-height: 69px;
    width: 88.28%;
  }

  @media ${DEVICE.MOBILE} {
    min-height: 48px;
    width: 90.63%;
  }
`;

export const BurgerWrapper = styled.div`
  display: none;
  width: 16px;
  height: 16px;
  margin-right: 15px;

  @media ${DEVICE.MOBILE} {
    display: block;
    position: relative;
  }
`;

export const BurgerIcon = styled.div<{state: string}>`
  background-color: ${({state}) => (state === `entering` || state === `entered`) ? `transparent` : MAIN_FONT_COLOR};;
  height: 1px;
  margin-top: -.5px;  
  position: absolute;
  top: 50%;
  width: 100%;

  &:before, &:after {
    background-color: ${MAIN_FONT_COLOR};
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }

  &:before {
    transition: all .2s;
    top: ${({state}) => (state === `entering` || state === `entered`) ? `0` : `-5px`};
    transform: ${({state}) => (state === `entering` || state === `entered`) ? `rotate(135deg)` : ``};
  }

  &:after {
    transition: all .2s;
    top: ${({state}) => (state === `entering` || state === `entered`) ? `0` : `5px`};
    transform: ${({state}) => (state === `entering` || state === `entered`) ? `rotate(-135deg)` : ``};
  }
`;

export const Logo = styled.div`
  font-family: 'Work-Sans', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: .05rem;
  line-height: 23px;
  margin-right: 59px;
  position: relative;
  user-select: none;

  @media ${DEVICE.TABLET} {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: -7px;
    margin-right: 67px;
    padding-left: 33px;
  }

  @media ${DEVICE.MOBILE} {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 0;
    padding-left: 24px;
  }

  &:before {
    background-image: url(${logoImg});
    background-size: cover;
    bottom: 4px;
    content: '';
    height: 27px;
    left: -38px;
    position: absolute;
    width: 30px;

    @media ${DEVICE.TABLET} {
      background-image: url(${logoImg});
      background-image: contain;
      bottom: 2px;
      height: 24px;
      left: 0;
      width: 26px;
    }

    @media ${DEVICE.MOBILE} {
      height: 18px;
      width: 19px;
      bottom: 4px;
    }
  }
`;

export const Login = styled.a`
  align-items: center;
  display: block;
  color: ${MAIN_FONT_COLOR};
  cursor: pointer;
  font-family: 'Roboto', 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 19px;
  margin-left: auto;
  text-decoration: none;
  padding-left: 40px;
  position: relative;
  user-select: none;

  &:hover {
    color: ${HOVER_FONT_COLOR};
  }

  @media ${DEVICE.TABLET} {
    font-size: 0;
    padding-left: 30px;
  }

  @media ${DEVICE.MOBILE} {
    padding-left: 14px;

    &:hover:after {
      background: rgba(246,247,255,.4);
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  &:before {
    background-image: url(${enterImg});
    content: '';
    height: 22px;
    left: 10px;
    margin-top: -12px;
    position: absolute;
    top: 50%;
    width: 20px;

    @media ${DEVICE.MOBILE} {
      background-size: contain;
      height: 16px;
      margin-top: -8px;
      width: 14px;
    }
  }
`;
