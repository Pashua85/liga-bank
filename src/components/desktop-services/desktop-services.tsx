import React, {FunctionComponent, useState} from 'react';
import {Container, Nav, NavItem, Title, TitleText, VaultIcon, CardsIcon, SecurityIcon, PhoneIcon,
  Card, CardImage, CardItem, CardLink, CardList, CardText, CardColumn, CardDetailLink, CardDetails} from './style';
import piggyBank from '../../assets/piggybank-desk.jpg';
import car from '../../assets/car-desk.jpg';
import lock from '../../assets/lock-desk.jpg';
import phone from '../../assets/phone-desk.jpg';

export type ServiceTitle = `Вклады` | `Кредиты` | `Страхование` | `Онлайн-сервисы`;

interface IService {
  serviceTitle: ServiceTitle,
  isActive: boolean
}

const initialServices: IService[] = [
  {
    serviceTitle: `Вклады`,
    isActive: true
  },
  {
    serviceTitle: `Кредиты`,
    isActive: false
  },
  {
    serviceTitle: `Страхование`,
    isActive: false
  },
  {
    serviceTitle: `Онлайн-сервисы`,
    isActive: false
  }
];

const DesktopServices: FunctionComponent = () => {

  const [services, setServices] = useState<IService[]>(initialServices);
  const [activeService, setActiveService] = useState<ServiceTitle>(`Вклады`);

  const handleClick = (serviceTitle: ServiceTitle) => {
    const newServices = services.map((s: IService) => {
      if (s.serviceTitle === serviceTitle) {
        return {
          serviceTitle,
          isActive: true
        };
      } else {
        return {
          serviceTitle: s.serviceTitle,
          isActive: false
        };
      }
    });
    setServices(newServices);
    setActiveService(serviceTitle);
  };

  const renderCards = (activeServiceParam: ServiceTitle): React.ReactNode | null => {
    if (activeServiceParam === `Вклады`) {
      return (
        <Card >
          <CardColumn activeService={activeService}>
            <CardText>
              Вклады Лига Банка – это выгодная инвестиция в свое будущее
            </CardText>
            <CardList activeService={activeService}>
              <CardItem>Проценты по вкладам до 7%</CardItem>
              <CardItem>Разнообразные условия</CardItem>
              <CardItem>Возможность ежемесячной капитализации или вывод процентов на банковскую карту</CardItem>
            </CardList>
            <CardLink href="#">Узнать подробнее</CardLink>
          </CardColumn>
          <CardImage imageUrl={piggyBank} />
        </Card>
      );
    } else if (activeServiceParam === `Кредиты`) {
      return (
        <Card>
          <CardColumn activeService={activeService}>
            <CardText>Лига Банк выдает кредиты<br/> под любые цели</CardText>
            <CardList activeService={activeService}>
              <CardItem>Ипотечный кредит</CardItem>
              <CardItem>Автокредит</CardItem>
              <CardItem>Потребительский кредит</CardItem>
            </CardList>
            <CardDetails>
              Рассчитайте ежемесячный платеж<br/> и ставку по кредиту воспользовавшись нашим <CardDetailLink href="#calculator">кредитным калькулятором</CardDetailLink>
            </CardDetails>
          </CardColumn>
          <CardImage imageUrl={car} />
        </Card>
      );
    } else if (activeServiceParam === `Страхование`) {
      return (
        <Card>
          <CardColumn activeService={activeService}>
            <CardText>Лига Страхование — застрахуем все что захотите</CardText>
            <CardList activeService={activeService}>
              <CardItem>Автомобильное страхование</CardItem>
              <CardItem>Страхование жизни и здоровья</CardItem>
              <CardItem>Страхование недвижимости</CardItem>
            </CardList>
            <CardLink href="#">Узнать подробнее</CardLink>
          </CardColumn>
          <CardImage imageUrl={lock} />
        </Card>
      );
    } else if (activeServiceParam === `Онлайн-сервисы`) {
      return (
        <Card>
          <CardColumn activeService={activeService}>
            <CardText>Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</CardText>
            <CardList activeService={activeService}>
              <CardItem>Мобильный банк,<br/> который всегда под рукой</CardItem>
              <CardItem>Приложение Лига-проездной позволит<br/> вам оплачивать билеты по всему миру</CardItem>
            </CardList>
            <CardLink href="#">Узнать подробнее</CardLink>
          </CardColumn>
          <CardImage imageUrl={phone} />
        </Card>
      );
    } else {
      return null;
    }
  };

  return (
    <Container>
      <Nav>
        {
          services.map((s, i) => (
            <NavItem isActive={s.isActive} onClick={() => handleClick(s.serviceTitle)} key={i}>
              <Title service={s.serviceTitle}>
                {
                  s.serviceTitle === `Вклады` &&
                  <VaultIcon />
                }
                {
                  s.serviceTitle === `Кредиты` &&
                  <CardsIcon />
                }
                {
                  s.serviceTitle === `Страхование` &&
                  <SecurityIcon />
                }
                {
                  s.serviceTitle === `Онлайн-сервисы` &&
                  <PhoneIcon />
                }
                <TitleText>{s.serviceTitle}</TitleText>
              </Title>
            </NavItem>
          ))
        }
      </Nav>
      {
        renderCards(activeService)
      }
    </Container>
  );
};

export default DesktopServices;
