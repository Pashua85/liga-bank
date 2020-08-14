import React, {FunctionComponent, useState} from 'react';
import {Transition} from 'react-transition-group';
import {HeaderStyled, Container, Logo, Login, BurgerIcon, BurgerWrapper} from './style';
import HeaderNav from '../header-nav/header-nav';

const Header: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleBurgerClick() {
    setIsOpen(!isOpen);
  }

  function handleLinkClick() {
    setIsOpen(false);
  }

  return (
    <HeaderStyled>
      <Container>
        <BurgerWrapper onClick={handleBurgerClick}>
          <Transition in={isOpen} timeout={200}>
            {(state: string) => (
              <BurgerIcon state={state} />
            )}
          </Transition>
        </BurgerWrapper>
        <Logo>ЛИГА Банк</Logo>
        <HeaderNav isOpen={isOpen} onLinkClick={handleLinkClick} />
        <Login href="#">Войти в Интернет-банк</Login>
      </Container>
    </HeaderStyled>
  );
};

export default Header;