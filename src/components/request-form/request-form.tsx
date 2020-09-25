import React, {FunctionComponent, useState, useEffect} from 'react';
import {useViewport} from '../../hooks/useViewport';
import isEmail from 'validator/es/lib/isEmail';
import {Form, Header, List, Item, ItemLabel, ItemValue, InputGroup, Input, InputField, Button, ErrorSpan,
  MessageBackground, MessageCard, MessageTitle, MessageText, CloseButton} from './style';
import {CalculatorType} from '../calculator/calculator';
import {getCurrencyWord} from '../../assets/getCurrencyWord';
import {getYearsWord} from '../../assets/getYearsWord';

interface RequestFormProps {
  requestNumber: number,
  calculatorType: CalculatorType,
  value: number,
  initPayment: number,
  termInYears: number,
  onFormSubmit: () => void,
}

const RequestForm: FunctionComponent<RequestFormProps> = ({requestNumber, calculatorType, value, initPayment, termInYears, onFormSubmit}) => {
  const [name, setName] = useState(``);
  const [phone, setPhone] = useState(``);
  const [email, setEmail] = useState(``);
  const [nameError, setNameError] = useState(``);
  const [phoneError, setPhoneError] = useState(``);
  const [emailError, setEmailError] = useState(``);
  const [isMessageShown, setIsMessageShown] = useState(false);

  useEffect(() => {
    const newName = localStorage.getItem(`name`);
    const newPhone = localStorage.getItem(`phone`);
    const newEmail = localStorage.getItem(`email`);

    if (newName !== null) {
      setName(newName);
    }
    if (newPhone !== null) {
      setPhone(newPhone);
    }
    if (newEmail !== null) {
      setEmail(newEmail);
    }
  }, []);

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

  const {width} = useViewport();

  const handleNameChange = (e: React.SyntheticEvent): void => {
    setNameError(``);
    setName((e.target as HTMLInputElement).value);
  };

  const handlePhoneChange = (e: React.SyntheticEvent): void => {
    setPhoneError(``);
    const telephone = (e.target as HTMLInputElement).value;
    if (telephone === `` || /^[0-9\b]+$/.test(telephone)) {
      setPhone(telephone);
    }
  };

  const handleEmailChange = (e: React.SyntheticEvent): void => {
    setEmailError(``);
    setEmail((e.target as HTMLInputElement).value);
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem(`name`, name);
      localStorage.setItem(`phone`, phone);
      localStorage.setItem(`email`, email);
      setIsMessageShown(true);
    }
  };

  const handleCloseClick = () => {
    setIsMessageShown(false);
    onFormSubmit();
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
          <ItemValue>{`${value.toLocaleString()} ${getCurrencyWord(value)}`}</ItemValue>
        </Item>
        {
          calculatorType !== `Потребительский кредит` &&
          <Item>
            <ItemLabel>Первоначальный взнос</ItemLabel>
            <ItemValue>{`${initPayment.toLocaleString()} ${getCurrencyWord(initPayment)}`}</ItemValue>
          </Item>
        }
        <Item>
          <ItemLabel>Срок кредитования</ItemLabel>
          <ItemValue>{`${termInYears} ${getYearsWord(termInYears)}`}</ItemValue>
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
            autoFocus
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
      {
        width <= 1023 &&
        <Button type="submit">
          Оформить заявку
        </Button>
      }
      {
        width > 1023 &&
        <Button type="submit">
          Отправить
        </Button>
      }

      {
        isMessageShown &&
        <MessageBackground>
          <MessageCard>
            <MessageTitle>Спасибо за обращение в наш банк.</MessageTitle>
            <MessageText>Наш менеджер скоро свяжется с вами по указанному номеру телефона.</MessageText>
            <CloseButton onClick={handleCloseClick} />
          </MessageCard>
        </MessageBackground>
      }
    </Form>
  );
};

export default RequestForm;
