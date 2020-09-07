import React, {FunctionComponent, useState} from 'react';
import {Transition} from 'react-transition-group';
import {HeaderStyled, Container, Logo, Login, BurgerIcon, BurgerWrapper} from './style';
import LoginForm from '../login-form/login-form';
import HeaderNav from '../header-nav/header-nav';

const Header: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginShown, setIsLoginShown] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const openLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoginShown(true);
  };

  const closeLogin = () => {
    setIsLoginShown(false);
  };

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
        <Login href="#" onClick={openLogin}>Войти в Интернет-банк</Login>
      </Container>
      {
        isLoginShown &&
        <LoginForm onCloseClick={closeLogin} />
      }
    </HeaderStyled>
  );
};

export default Header;
