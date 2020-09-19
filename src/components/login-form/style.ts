import styled from 'styled-components';
import {DEVICE, CONTENT_WIDTH} from '../../variables';
import logo from '../../assets/logo-big.svg';
import eyeIcon from '../../assets/eye-icon.svg';

export const FormBackground = styled.div`
  background-color: rgba(255, 255, 255, .9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 200;
`;

export const Form = styled.form`
  background-color: #F6F7FF;
  border: 4px solid #2C36F2;
  display: flex;
  flex-direction: column;
  left: calc(50% - 272px);
  margin-top: -246.5px;
  position: relative;
  padding-left: 84px;
  padding-right: 84px;
  padding-top: 55px;
  padding-bottom: 56px;
  top: 50%;
  width: 544px;

  @media ${DEVICE.TABLET} {
    width: ${CONTENT_WIDTH.TAB};
    margin-top: 0;
    position: static;
    margin-left: 5.86%;
    margin-top: 10%;
  }

  @media ${DEVICE.MOBILE} {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 45px;
    padding-bottom: 41px;
    left: 4.685%;
    width: ${CONTENT_WIDTH.MOBILE};
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 37px;
  order: 1;

  @media ${DEVICE.MOBILE} {
    margin-bottom: 27px;
  }
`;

export const Logo = styled.div`
  display: flex;
`;

export const LogoIcon = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 6px;
  position: relative;
  left: -1px;
  width: 32px;
  height: 29px;

  @media ${DEVICE.MOBILE} {
    left: -6px;
    margin-right: 1px;
  }
`;

export const LogoText = styled.div`
  align-self: flex-start;
`;

export const LogoTitle = styled.h2`
  font-family: 'Work-Sans', 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 17px;
  letter-spacing: 0.9px;
  margin-bottom: 0;
`;

export const LogoSubtitle = styled.div`
  font-size: 12px;
  line-height: 14px;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  height: 17px;
  position: absolute;
  top: 1px;
  right: 0;
  width: 17px;

  @media ${DEVICE.MOBILE} {
    height: 12px;
    width: 12px;
    top: 1px;
    right: 0;
  }

  &:before,
  &:after {
    background-color: #1F1E25;
    content: '';
    height: 2px;
    left: -3.3px;
    top: 7px;
    position: absolute;
    width: 23.6px;

    @media ${DEVICE.MOBILE} {
      left: -2.5px;
      top: 5px;
      width: 18px;
    }
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const InputGroup = styled.div<{name?: string}>`
  margin-bottom: ${({name}) => name === `password` ? `7px` : `25px`};
  order: ${({name}) => name === `password` ? `3` : `2`};
  position: relative;

  @media ${DEVICE.MOBILE} {
    margin-bottom: ${({name}) => name === `password` ? `30px` : `20px`};
  }
`;

export const Label = styled.div`
  color: #394959;
  font-size: 15.9px;
  font-weight: normal;
  line-height: 22px;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  background-color: #F6F7FF;
  border: 1px solid #1F1E25;
  border-color:  #1F1E25;
  border-radius: 4px;
  height: 60px;
  padding-left: 23px;
  padding-right: 23px;
  width: 100%;

  &:-internal-autofill-selected {
    background-color: #F6F7FF !important;
  }
`;

export const PasswordInput = styled.input`
  background-color: #F6F7FF;
  border: 1px solid #1F1E25;
  border-color:  #1F1E25;
  border-radius: 4px;
  height: 60px;
  order: 3;
  padding-left: 23px;
  padding-right: 23px;
  width: 100%;
`;

export const PasswordButton = styled.div<{isShown: boolean}>`
  background-image: ${({isShown}) => isShown ? `` : `url(${eyeIcon})`};
  bottom: ${({isShown}) => isShown ? `20px` : `24px`};
  cursor: pointer;
  height: ${({isShown}) => isShown ? `` : `12px`};
  font-size: ${({isShown}) => isShown ? `8px` : `0px`};
  text-transform: uppercase;
  order: 4;
  position: absolute;
  right: 24px;
  width: ${({isShown}) => isShown ? `` : `22px`};
  user-select: none;

  @media ${DEVICE.MOBILE} {
    right: 16px;
  }
`;

export const ForgetLink = styled.a`
  color: #707C87;
  cursor: pointer;
  display: block;
  font-size: 12px;
  line-height: 17px;
  margin-bottom: 25px;
  text-align: right;
  order: 5;
  padding-right: 1px;

  @media ${DEVICE.MOBILE} {
    font-size: 14px;
    line-height: 20px;
    order: 6;
    margin-bottom: 0;
    text-align: center;
  }
`;

export const SubmitButton = styled.button`
  background-color: #2C36F2;
  border: none;
  border-radius: 4px;
  color: #F6F7FF;
  font-size: 18px;
  height: 60px;
  order: 6;
  outline: none;
  width: 100%;

  &:hover {
    filter: brightness(110%);
  }

  @media ${DEVICE.MOBILE} {
    font-size: 14px;
    height: 51px;
    margin-bottom: 10px;
    order: 5;
  }
`;

export const ErrorSpan = styled.span`
  bottom: 0; 
  left: 24px;
  letter-spacing: .1px;
  position: absolute;
  font-size: 9px;
  text-transform: uppercase;
  color: red;
`;
