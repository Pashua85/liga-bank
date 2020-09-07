import React, {FunctionComponent, useState} from 'react';
import {Form, HeaderRow, Logo, LogoIcon, LogoText, LogoTitle, LogoSubtitle, CloseButton,
  SubmitButton, Input, InputGroup, Label, PasswordInput, PasswordButton} from './style';

const LoginForm: FunctionComponent = () => {
  const [login, setLogin] = useState(``);
  const [password, setPassword] = useState(``);
  const [isShown, setIsShown] = useState(false);

  const handleLoginChange = (e: React.SyntheticEvent) => {
    setLogin((e.target as HTMLInputElement).value);
  };

  const handlePasswordChange = (e: React.SyntheticEvent) => {
    setPassword((e.target as HTMLInputElement).value);
  };

  const handleIsShownChange = () => {
    setIsShown((prevState) => !prevState);
  };

  return (
    <Form>
      <HeaderRow>
        <Logo>
          <LogoIcon />
          <LogoText>
            <LogoTitle>ЛИГА Банк</LogoTitle>
            <LogoSubtitle>интернет-банк</LogoSubtitle>
          </LogoText>
        </Logo>
        <CloseButton />
      </HeaderRow>
      <InputGroup name="login">
        <Label>Логин</Label>
        <Input
          type="text"
          name="login"
          value={login}
          onChange={handleLoginChange}
          placeholder=""
          autoComplete="off"
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
      <SubmitButton>Войти</SubmitButton>
    </Form>
  );
};

export default LoginForm;
// laptop