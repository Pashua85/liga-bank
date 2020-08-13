import React, {FunctionComponent} from 'react';
import {Nav, BurgerIcon, BurgerWrapper, NavItem, NavLink, NavList} from './style';

const HeaderNav: FunctionComponent = () => {
  return (
    <Nav>
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
