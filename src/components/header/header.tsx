import React, {FunctionComponent} from 'react';
import {HeaderStyled, Container, Logo, Login} from './style';
import HeaderNav from '../header-nav/header-nav';

const Header: FunctionComponent = () => {
  return (
    <HeaderStyled>
      <Container>
        <Logo>ЛИГА Банк</Logo>
        <HeaderNav />
        <Login href="#">Войти в Интернет-банк</Login>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
