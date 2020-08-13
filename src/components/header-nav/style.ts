import styled from 'styled-components';
import {MAIN_FONT_COLOR} from '../app/style';

export const Nav = styled.nav`
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
  }
`;

export const NavLink = styled.a`
  color: ${MAIN_FONT_COLOR};
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;
`;

