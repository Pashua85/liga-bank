import styled from 'styled-components';
import icon from '../../assets/select-icon.svg';
import {DEVICE} from '../../variables';

export const Field = styled.div<{isOpen: boolean, state: string}>`
  border: 1px solid #1F1E25;
  border-radius: ${({isOpen}) => isOpen ? `4px 4px 0 0` : `4px 4px 4px 4px`};
  font-size: 16px;
  font-weight: 500;
  height: 60px;
  line-height: 60px;
  margin-bottom: 33px;
  padding-left: 23px;
  position: relative;
  user-select: none;
  vertical-align: middle;

  &:after {
    background-image: url(${icon});
    background-repeat: no-repeat;
    content: '';
    height: 11px;
    position: absolute;
    transform: ${({state}) => (state === `entering` || state === `entered`) ? `rotate(180deg)` : ``}; 
    transition: transform .2s;
    top: 24px;
    right: 22px;
    width: 18px;

    @media ${DEVICE.MOBILE} {
      right: 13px;
    }
  }

  @media ${DEVICE.TABLET} {
    margin-bottom: 34px;
  }

  @media ${DEVICE.MOBILE} {
    padding-left: 14px;
    margin-bottom: 25px;
  }
`;

export const List = styled.ul<{isOpen: boolean}>`
  background-color: #FFFFFF;
  border: 1px solid #1F1E25;
  border-radius: 0 0 4px 4px;
  display: ${({isOpen}) => isOpen ? `flex` : `none`};
  flex-direction: column;
  left: -1px;
  list-style: none;
  padding-left: 0;
  position: absolute;
  top: 100%;
  width: calc(100% + 2px);
  z-index: 100;
`;

export const Item = styled.li`
  height: 60px;
  padding-left: 24px;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid #C1C2CA;
  }
`;
