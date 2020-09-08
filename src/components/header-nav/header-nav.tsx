import React, {FunctionComponent} from 'react';
import {Transition} from 'react-transition-group';
import {Nav, NavItem, NavLink, NavList} from './style';

interface HeaderNavProps {
  isOpen: boolean
  onLinkClick: () => void
}

const HeaderNav: FunctionComponent<HeaderNavProps> = ({isOpen, onLinkClick}) => {
  function handleClick() {
    onLinkClick();
  }

  return (
    <Transition in={isOpen} timeout={300}>
      {(state: string) => (
        <Nav isOpen={isOpen} state={state}>
          <NavList>
            <NavItem>
              <NavLink href="#services" onClick={handleClick}>Услуги</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#calculator" onClick={handleClick}>Рассчитать кредит</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#footer" onClick={handleClick}>Контакты</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleClick}>Задать вопрос</NavLink>
            </NavItem>
          </NavList>
        </Nav>
      )}
    </Transition>

  );
};

export default HeaderNav;
