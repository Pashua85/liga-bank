import React, {FunctionComponent} from 'react';
import {Nav, NavItem, NavLink, NavList} from './style';

interface HeaderNavProps {
  isOpen: boolean
}

const HeaderNav: FunctionComponent<HeaderNavProps> = ({isOpen}) => {
  return (
    <Nav isOpen={isOpen}>
      <NavList>
        <NavItem>
          <NavLink href="#">Услуги</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Рассчитать кредит</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Контакты</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Задать вопрос</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default HeaderNav;
