import React, {FunctionComponent, useState} from 'react';
import isEmail from 'validator/es/lib/isEmail';
import {Form, Header, List, Item, ItemLabel, ItemValue, InputGroup, Input, InputField, Button, ErrorSpan} from './style';
import {CalculatorType} from '../calculator/calculator';

interface RequestFormProps {
  requestNumber: number,
  calculatorType: CalculatorType,
  value: number,
  initPayment: number,
  termInYears: number
}

const RequestForm: FunctionComponent<RequestFormProps> = ({requestNumber, calculatorType, value, initPayment, termInYears}) => {
  const [name, setName] = useState(``);
  const [phone, setPhone] = useState(``);
  const [email, setEmail] = useState(``);
  const [nameError, setNameError] = useState(``);
  const [phoneError, setPhoneError] = useState(``);
  const [emailError, setEmailError] = useState(``);

  const validate = (): boolean => {
    if (name.length === 0) {
      setNameError(`Укажите Ваши имя и фамилию`);
    } else if (phone.length === 0) {
      setPhoneError(`Укажите номер телефона`);
    } else if (email.length === 0) {
      setEmailError(`Укажите Ваш e-mail`);
    } else if (email.length > 0 && !isEmail(email)) {
      setEmailError(`Некорректный e-mail`);
    }

    if (name.length > 0 && phone.length > 0 && email.length > 0 && isEmail(email)) {
      return true;
    } else {
      return false;
    }
  };


  const handleNameChange = (e: React.SyntheticEvent): void => {
    setNameError(``);
    setName((e.target as HTMLInputElement).value);
  };

  const handlePhoneChange = (e: React.SyntheticEvent): void => {
    setPhoneError(``);
    setPhone((e.target as HTMLInputElement).value);
  };

  const handleEmailChange = (e: React.SyntheticEvent): void => {
    setEmailError(``);
    setEmail((e.target as HTMLInputElement).value);
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log(`Form submit`);
    } else {
      console.log(`Something wrong`);
    }
  };

  let typeString; let valueLabel;
  if (calculatorType === `Ипотечное кредитование`) {
    typeString = `Ипотека`;
    valueLabel = `Стоимость недвижимости`;
  } else if (calculatorType === `Автомобильное кредитование`) {
    typeString = `Покупка автомобиля`;
    valueLabel = `Стоимост автомобиля`;
  } else if (calculatorType === `Потребительский кредит`) {
    typeString = `Потребительский кредит`;
    valueLabel = `Сумма кредита`;
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Header>Шаг 3. Оформление заявки</Header>
      <List>
        <Item>
          <ItemLabel>Номер заявки</ItemLabel>
          <ItemValue>{`№ ${String(requestNumber).padStart(4, `0`)}`}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>Цель кредита</ItemLabel>
          <ItemValue>{typeString}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>{valueLabel}</ItemLabel>
          <ItemValue>{value.toLocaleString()} рублей</ItemValue>
        </Item>
        {
          calculatorType !== `Потребительский кредит` &&
          <Item>
            <ItemLabel>Первоначальный взнос</ItemLabel>
            <ItemValue>{initPayment.toLocaleString()} рублей</ItemValue>
          </Item>
        }
        <Item>
          <ItemLabel>Срок кредитования</ItemLabel>
          <ItemValue>{termInYears} лет</ItemValue>
        </Item>
      </List>
      <InputGroup>
        <InputField name="fullname">
          <Input
            type="text"
            name="fullname"
            value={name}
            onChange={handleNameChange}
            placeholder="ФИО"
          />
          <ErrorSpan>{nameError}</ErrorSpan>
        </InputField>
        <InputField name="phone">
          <Input
            type="tel"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Телефон"
          />
          <ErrorSpan>{phoneError}</ErrorSpan>
        </InputField>
        <InputField name="email">
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="E-mail"
          />
          <ErrorSpan>{emailError}</ErrorSpan>
        </InputField>
      </InputGroup>
      <Button>
        Отправить
      </Button>
    </Form>
  );
};

export default RequestForm;
