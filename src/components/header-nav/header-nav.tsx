import React, {FunctionComponent} from 'react';
import {Nav, NavItem, NavLink, NavList} from './style';

interface HeaderNavProps {
  isOpen: boolean
  onLinkClick: () => void
}

const HeaderNav: FunctionComponent<HeaderNavProps> = ({isOpen, onLinkClick}) => {
  function handleClick(e: React.SyntheticEvent) {
    e.preventDefault();
    onLinkClick();
  }

  return (
    <Nav isOpen={isOpen}>
      <NavList>
        <NavItem>
          <NavLink href="#" onClick={handleClick}>Услуги</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={handleClick}>Рассчитать кредит</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={handleClick}>Контакты</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={handleClick}>Задать вопрос</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default HeaderNav;
