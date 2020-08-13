import React, {FunctionComponent, useState} from 'react';
import {HeaderStyled, Container, Logo, Login, BurgerIcon, BurgerWrapper} from './style';
import HeaderNav from '../header-nav/header-nav';

const Header: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleBurgerClick() {
    setIsOpen(!isOpen);
  }

  return (
    <HeaderStyled>
      <Container>
        <BurgerWrapper onClick={handleBurgerClick}>
          <BurgerIcon />
        </BurgerWrapper>
        <Logo>ЛИГА Банк</Logo>
        <HeaderNav isOpen={isOpen} />
        <Login href="#">Войти в Интернет-банк</Login>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
