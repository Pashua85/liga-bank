import React, {FunctionComponent, useState, useEffect} from 'react';
import {FormBackground, Form, HeaderRow, Logo, LogoIcon, LogoText, LogoTitle, LogoSubtitle, CloseButton,
  SubmitButton, Input, InputGroup, Label, PasswordInput, ForgetLink, PasswordButton} from './style';

interface LoginFormProps {
  onCloseClick: () => void
}

const LoginForm: FunctionComponent<LoginFormProps> = ({onCloseClick}) => {
  const [login, setLogin] = useState(``);
  const [password, setPassword] = useState(``);
  const [isShown, setIsShown] = useState(false);

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
        </InputGroup>
        <ForgetLink href="#">Забыли пароль?</ForgetLink>
        <SubmitButton>Войти</SubmitButton>
      </Form>
    </FormBackground>
  );
};

export default LoginForm;