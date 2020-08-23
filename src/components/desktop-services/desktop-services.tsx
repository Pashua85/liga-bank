import React, {FunctionComponent, useState} from 'react';
import {Container, Nav, NavItem, Title, TitleText, VaultIcon, CardsIcon, SecurityIcon, PhoneIcon,
  Card, CardImage, CardItem, CardLink, CardList, CardText, CardColumn, CardDetailLink, CardDetails} from './style';
import piggyBank from '../../assets/piggybank.jpg';
import car from '../../assets/car.jpg';

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
        <Card activeService={activeService}>
          <CardColumn activeService={activeService}>
            <CardText>
              Вклады Лига Банка – это выгодная инвестиция в свое будущее
            </CardText>
            <CardList activeService={activeService}>
              <CardItem>Проценты по вкладам до 7%</CardItem>
              <CardItem>Разнообразные условия</CardItem>
              <CardItem>Возможность ежемесячной капитализации или вывод процентов на банковскую карту</CardItem>
            </CardList>
            <CardLink href="/">Узнать подробнее</CardLink>
          </CardColumn>
          <CardImage imageUrl={piggyBank} />
        </Card>
      );
    } else if (activeServiceParam === `Кредиты`) {
      return (
        <Card activeService={activeService}>
          <CardColumn activeService={activeService}>
            <CardText>Лига Банк выдает кредиты<br/> под любые цели</CardText>
            <CardList activeService={activeService}>
              <CardItem>Ипотечный кредит</CardItem>
              <CardItem>Автокредит</CardItem>
              <CardItem>Потребительский кредит</CardItem>
            </CardList>
            <CardDetails>
              Рассчитайте ежемесячный платеж<br/> и ставку по кредиту воспользовавшись нашим <CardDetailLink href="/">кредитным калькулятором</CardDetailLink>
            </CardDetails>
          </CardColumn>
          <CardImage imageUrl={car} />
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
          services.map((s) => (
            <NavItem isActive={s.isActive} onClick={() => handleClick(s.serviceTitle)}>
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
