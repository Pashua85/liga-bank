import styled from 'styled-components';
import {MAIN_FONT_COLOR, HOVER_FONT_COLOR, DEVICE} from '../../style-consts';

export const Nav = styled.nav<{isOpen: boolean}>`
  @media ${DEVICE.TABLET} {
    padding-bottom: 2px;
  }

  @media ${DEVICE.MOBILE} {
    display: ${({isOpen}) => isOpen ? `block` : `none`};
    padding-bottom: 0;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;

  @media ${DEVICE.MOBILE} {
    border-bottom: 1px solid rgba(31,30,37,.3);
    flex-direction: column;
    width: 100vw;
  }
`;

export const NavItem = styled.li`
  
  &:not(:last-child) {
    margin-right: 25px;

    @media ${DEVICE.TABLET} {
      margin-right: 20px;
    }
  }

  @media ${DEVICE.MOBILE} {
    border-top: 1px solid rgba(31,30,37,.3);
    height: 43px;
    width: 100%;
  }
`;

export const NavLink = styled.a`
  display: inline-block;
  color: ${MAIN_FONT_COLOR};
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;
  user-select: none;

  &:hover {
    color: ${HOVER_FONT_COLOR};
  }

  @media ${DEVICE.TABLET} {
    font-size: 13.5px;
    line-height: 16px;
  }

  @media ${DEVICE.MOBILE} {
    display: block;
    height: 100%;
    line-height: 43px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }
`;

