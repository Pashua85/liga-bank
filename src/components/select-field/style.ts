import styled from 'styled-components';
import icon from '../../assets/select-icon.svg';

export const Field = styled.div<{isOpen: boolean, state: string}>`
  border: 1px solid #1F1E25;
  border-radius: ${({isOpen}) => isOpen ? `4px 4px 0 0` : `4px 4px 4px 4px`};
  height: 60px;
  line-height: 60px;
  margin-bottom: 40px;
  padding-left: 24px;
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
    top: 26px;
    right: 24px;
    width: 18px;
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
