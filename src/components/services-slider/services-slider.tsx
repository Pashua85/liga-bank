import React, {FunctionComponent, useState, useEffect} from 'react';
import './style.scss';
import Slider from '../slider/slider';
import {Slide, Title, List, ListItem, Button, Text, Link, Column, Image} from './style';
import {chooseSrc} from '../../assets/chooseSrc';
import piggyBankDesk from '../../assets/piggybank-desk.jpg';
import piggyBankTab from '../../assets/piggybank-tab.jpg';
import piggyBankPhone from '../../assets/piggybank-phone.jpg';
import carDesk from '../../assets/car-desk.jpg';
import carTab from '../../assets/car-tab.jpg';
import carPhone from '../../assets/car-phone.jpg';
import lockDesk from '../../assets/lock-desk.jpg';
import lockTab from '../../assets/lock-tab.jpg';
import lockPhone from '../../assets/lock-phone.jpg';
import phoneDesk from '../../assets/phone-desk.jpg';
import phoneTab from '../../assets/phone-tab.jpg';
import phonePhone from '../../assets/phone-phone.jpg';

const ServicesSlider: FunctionComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [piggyBank, setPiggyBank] = useState(chooseSrc(width, {
    deskSrc: piggyBankDesk,
    tabSrc: piggyBankTab,
    mobileSrc: piggyBankPhone
  }));
  const [car, setCar] = useState(chooseSrc(width, {
    deskSrc: carDesk,
    tabSrc: carTab,
    mobileSrc: carPhone
  }));
  const [lock, setLock] = useState(chooseSrc(width, {
    deskSrc: lockDesk,
    tabSrc: lockTab,
    mobileSrc: lockPhone
  }));
  const [phone, setPhone] = useState(chooseSrc(width, {
    deskSrc: phoneDesk,
    tabSrc: phoneTab,
    mobileSrc: phonePhone
  }));

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener(`resize`, handleResize);
    return () => {
      window.removeEventListener(`resize`, handleResize);
    };
  }, []);

  useEffect(() => {
    setPiggyBank(chooseSrc(width, {
      deskSrc: piggyBankDesk,
      tabSrc: piggyBankTab,
      mobileSrc: piggyBankPhone
    }));
    setCar(chooseSrc(width, {
      deskSrc: carDesk,
      tabSrc: carTab,
      mobileSrc: carPhone
    }));
    setLock(chooseSrc(width, {
      deskSrc: lockDesk,
      tabSrc: lockTab,
      mobileSrc: lockPhone
    }));
    setPhone(chooseSrc(width, {
      deskSrc: phoneDesk,
      tabSrc: phoneTab,
      mobileSrc: phonePhone
    }));
  }, [width]);


  const slides = [
    <Slide>
      <Column>
        <Title>Вклады Лига Банка – это выгодная инвестиция в свое будущее</Title>
        <List>
          <ListItem>Проценты по вкладам до 7%</ListItem>
          <ListItem>Разнообразные условия</ListItem>
          <ListItem>Возможность ежемесячной капитализации или вывод процентов на банковскую карту</ListItem>
        </List>
        <Button>Узнать подробнее</Button>
      </Column>
      <Image imageUrl={piggyBank} />
    </Slide>,
    <Slide>
      <Column>
        <Title>Лига Банк выдает кредиты<br/> под любые цели</Title>
        <List>
          <ListItem>Ипотечный кредит</ListItem>
          <ListItem>Автокредит</ListItem>
          <ListItem>Потребительский кредит</ListItem>
        </List>
        <Text>Рассчитайте ежемесячный платеж<br/> и ставку по кредиту воспользовавшись нашим <Link href="#calculator">кредитным калькулятором</Link></Text>
      </Column>
      <Image imageUrl={car} />
    </Slide>,
    <Slide>
      <Column>
        <Title>Лига Страхование — застрахуем<br/> все что захотите</Title>
        <List>
          <ListItem>Автомобильное страхование</ListItem>
          <ListItem>Страхование жизни и здоровья</ListItem>
          <ListItem>Страхование недвижимости</ListItem>
        </List>
        <Button>Узнать подробнее</Button>
      </Column>
      <Image imageUrl={lock} />
    </Slide>,
    <Slide>
      <Column>
        <Title service={`online`}>Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</Title>
        <List service={`online`}>
          <ListItem>Мобильный банк,<br/> который всегда под рукой</ListItem>
          <ListItem>Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</ListItem>
        </List>
        <Button>Узнать подробнее</Button>
      </Column>
      <Image imageUrl={phone}/>
    </Slide>
  ];

  return (
    <Slider slides={slides} dotClass="service-dot" activeDotClass="service-dot--active" dotsContainerClass="service-dots-container" />
  );
};

export default ServicesSlider;
