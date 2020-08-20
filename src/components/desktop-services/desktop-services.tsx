import React, {FunctionComponent, useState} from 'react';
import {Container, Nav, NavItem, Title, Text, VaultIcon, CardsIcon, SecurityIcon, PhoneIcon} from './style';

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
                <Text>{s.serviceTitle}</Text>
              </Title>
            </NavItem>
          ))
        }
      </Nav>
    </Container>
  );
};

export default DesktopServices;
