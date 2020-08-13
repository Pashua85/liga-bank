import styled from 'styled-components';
import {MAIN_FONT_COLOR, DEVICE} from '../../style-consts';

export const Nav = styled.nav`
  @media ${DEVICE.TABLET} {
    padding-bottom: 2px;
  }
`;

export const BurgerWrapper = styled.div`
  display: none;
`;

export const BurgerIcon = styled.div`
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li`
  
  &:not(:last-child) {
    margin-right: 25px;

    @media ${DEVICE.TABLET} {
      margin-right: 20px;
    }
  }
`;

export const NavLink = styled.a`
  display: inline-block;
  color: ${MAIN_FONT_COLOR};
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;

  @media ${DEVICE.TABLET} {
    font-size: 13.5px;
    line-height: 16px;
  }
`;

