import styled from 'styled-components';
import itemIcon from '../../assets/item-icon.svg';
import {MAIN_FONT_COLOR, DEVICE} from '../../variables';

export const Container = styled.div`
  width: 88.28%;
  margin: 0 auto;
`;

export const Slide = styled.div`
  background-color: #F6F7FF;
  display: flex;
  justify-content: space-between;
  min-height: 380px;
  padding-left: 5.86%;
  padding-right: 5.86%;
  padding-top: 60px;

  @media ${DEVICE.MOBILE} {
    min-height: 362px;
    position: relative;
    padding-left: 4.685%;
    padding-right: 4.685%;
    padding-top: 55px;
  }
`;

export const Column = styled.div`
  width: 52%;

  @media ${DEVICE.MOBILE} {
    width: 100%;
    z-index: 10;
  }
`;

export const Title = styled.p<{service?: string}>`
  font-size: 17.9px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: .05px;
  margin-top: -6px;
  margin-bottom: 24px;

  @media ${DEVICE.MOBILE} {
    font-size: 15.9px;
    line-height: 22px;
    margin-top: 0;
    margin-bottom: 20px;
    width: ${({service}) => {
    if (service === `online`) {
      return `85%`;
    } else {
      return ``;
    }
  }}
  }
`;

export const List = styled.ul<{service?: string}>`
  list-style: none;
  margin-bottom: 30px;
  width: ${({service}) => {
    if (service === `online`) {
      return `95%`;
    } else {
      return ``;
    }
  }};

  @media ${DEVICE.MOBILE} {
    margin-bottom: 26px;
    width: 80%;
  }
`;

export const ListItem = styled.li`
  font-size: 15.8px;
  line-height: 21px;
  letter-spacing: .1px;
  padding-left: 21px;
  position: relative;

  @media ${DEVICE.MOBILE} {
    font-size: 13.8px;
    line-height: 18px;
    padding-left: 15px;
  }

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &:before {
    background-image: url(${itemIcon});
    background-size: contain;
    content: '';
    height: 10px;
    left: -1px;
    position: absolute;
    top: 5px;
    width: 13px;

    @media ${DEVICE.MOBILE} {
      height: 8px;
      width: 10px;
    }
  }
`;

export const Button = styled.a`
  background-color: #2C36F2;
  border-radius: 4px;
  color: #F6F7FF;
  display: inline-block;
  font-size: 15.9px;
  font-weight: 500;
  height: 48px;
  line-height: 48px;
  letter-spacing: .1px;
  text-align: center;
  width: 198px;
  vertical-align: middle;

  &:hover {
    text-decoration: none;
  }

  @media ${DEVICE.MOBILE} {
    font-size: 13.9px;
    height: 43px;
    line-height: 43px;
    width: 100%;
  }
`;

export const Text = styled.p`
  margin-bottom: 0;
  position: relative;
  top: -1px;

  @media ${DEVICE.MOBILE} {
    top: -4px;
  }
`;

export const Link = styled.a`
  color: ${MAIN_FONT_COLOR};
  font-weight: 500;
  text-decoration: underline;
`;

export const Image = styled.div<{imageUrl: string}>`
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-repeat: no-repeat;
  background-size: contain;
  height: 260px;
  width: 289px;

  @media ${DEVICE.MOBILE} {
    height: 113px;
    position: absolute;
    right: 0;    
    top: 98px;
    width: 87px;
  }
`;


