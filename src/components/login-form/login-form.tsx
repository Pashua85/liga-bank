import React, {FunctionComponent, useState, useEffect} from 'react';
import {FormBackground, Form, HeaderRow, Logo, LogoIcon, LogoText, LogoTitle, LogoSubtitle, CloseButton,
  SubmitButton, Input, InputGroup, Label, PasswordInput, ForgetLink, PasswordButton, ErrorSpan} from './style';

interface LoginFormProps {
  onCloseClick: () => void
  onFormSubmit: () => void
}

const LoginForm: FunctionComponent<LoginFormProps> = ({onCloseClick, onFormSubmit}) => {
  const [login, setLogin] = useState(``);
  const [password, setPassword] = useState(``);
  const [isShown, setIsShown] = useState(false);
  const [loginError, setLoginError] = useState(``);
  const [passwordError, setPasswordError] = useState(``);

  useEffect(() => {
    const closeForm = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        onCloseClick();
      }
    };
    window.addEventListener(`keydown`, closeForm);
    return () => {
      window.removeEventListener(`keydown`, closeForm);
    };
  });

  const validateLogin = () => {
    if (login.length > 0) {
      return true;
    } else {
      setLoginError(`Укажите логин`);
      return false;
    }
  };

  const validatePassword = () => {
    if (password.length > 0) {
      return true;
    } else {
      setPasswordError(`Укажите пароль`);
      return false;
    }
  };

  const handleLoginChange = (e: React.SyntheticEvent) => {
    setLogin((e.target as HTMLInputElement).value);
  };

  const handlePasswordChange = (e: React.SyntheticEvent) => {
    setPassword((e.target as HTMLInputElement).value);
  };

  const handleIsShownChange = () => {
    setIsShown((prevState) => !prevState);
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validateLogin() && validatePassword()) {
      onFormSubmit();
    }
  };

  return (
    <FormBackground>
      <Form onSubmit={handleFormSubmit}>
        <HeaderRow>
          <Logo>
            <LogoIcon />
            <LogoText>
              <LogoTitle>ЛИГА Банк</LogoTitle>
              <LogoSubtitle>интернет-банк</LogoSubtitle>
            </LogoText>
          </Logo>
          <CloseButton onClick={onCloseClick} />
        </HeaderRow>
        <InputGroup name="login">
          <Label>Логин</Label>
          <Input
            type="text"
            name="login"
            value={login}
            onChange={handleLoginChange}
            placeholder=""
            autoFocus
          />
          <ErrorSpan>{loginError}</ErrorSpan>
        </InputGroup>
        <InputGroup name="password">
          <Label>Пароль</Label>
          {
            isShown &&
              <Input
                type="text"
                name="login"
                value={password}
                onChange={handlePasswordChange}
              />
          }
          {
            !isShown &&
            <PasswordInput
              type="password"
              name="login"
              value={password}
              onChange={handlePasswordChange}
            />
          }
          <PasswordButton
            onClick={handleIsShownChange}
            isShown={isShown}
          >
            скрыть пароль
          </PasswordButton>
          <ErrorSpan>{passwordError}</ErrorSpan>
        </InputGroup>
        <ForgetLink href="#">Забыли пароль?</ForgetLink>
        <SubmitButton>Войти</SubmitButton>
      </Form>
    </FormBackground>
  );
};

export default LoginForm;
