import styled from 'styled-components';
import {DEVICE} from '../../variables';
import logo from '../../assets/logo-big.svg';
import eyeIcon from '../../assets/eye-icon.svg';

export const Form = styled.form`
  background-color: #F6F7FF;
  border: 4px solid #2C36F2;
  min-height: 493px;
  padding-left: 56px;
  padding-right: 56px;
  padding-top: 55px;
  padding-bottom: 56px;
  width: 544px;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Logo = styled.div`
  display: flex;
  margin-bottom: 37px;
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
    top: 15px;
    right: 15px;
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
  margin-bottom: ${({name}) => name === `password` ? `5px` : `25px`};
  position: ${({name}) => name === `password` ? `relative` : ``};
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
`;

export const PasswordInput = styled.input`
  background-color: #F6F7FF;
  border: 1px solid #1F1E25;
  border-color:  #1F1E25;
  border-radius: 4px;
  height: 60px;
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
  position: absolute;
  right: 24px;
  width: ${({isShown}) => isShown ? `` : `22px`};
`;

export const SubmitButton = styled.button`
  background-color: #2C36F2;
  border: none;
  border-radius: 4px;
  color: #F6F7FF;
  height: 60px;
  outline: none;
  width: 100%;
`;
