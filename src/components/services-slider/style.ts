import styled from 'styled-components';
import itemIcon from '../../assets/item-icon.svg';
import {MAIN_FONT_COLOR} from '../../variables';

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
`;

export const Column = styled.div`
  width: 52%;
`;

export const Title = styled.p`
  font-size: 17.9px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: .05px;
  margin-top: -6px;
  margin-bottom: 24px;
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
  }}
`;

export const ListItem = styled.li`
  font-size: 15.8px;
  line-height: 21px;
  letter-spacing: .1px;
  padding-left: 21px;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 15px;
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
`;

export const Text = styled.p`
  margin-bottom: 0;
  position: relative;
  top: -1px;
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
`;


