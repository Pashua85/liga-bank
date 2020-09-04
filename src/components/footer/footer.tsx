import React, {FunctionComponent} from 'react';
import {FooterStyled, Container, Navigation, Logo, Address, NavMenu, NavLink, Contacts, ContactGroup, ContactNumber, ContactSubtitle,
  Socials, SocialLink} from './style';

export type SocialName = `facebook` | `instagram` | `twitter` | `youtube`

const Footer: FunctionComponent = () => {
  return (
    <FooterStyled>
      <Container>
        <Navigation>
          <Logo>ЛИГА Банк</Logo>
          <Address>150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</Address>
          <NavMenu>
            <NavLink>Услуги</NavLink>
            <NavLink>Рассчитать кредит</NavLink>
            <NavLink>Контакты</NavLink>
            <NavLink>Задать вопрос</NavLink>
          </NavMenu>
        </Navigation>
        <Contacts>
          <ContactGroup name="sms">
            <ContactNumber href="sms:*0904">*0904</ContactNumber>
            <ContactSubtitle>Бесплатно для абонентов<br/> МТС, Билайн, Мегафон, Теле2</ContactSubtitle>
          </ContactGroup>
          <ContactGroup name="tel">
            <ContactNumber href="tel:88001112233">8 800 111 22 33</ContactNumber>
            <ContactSubtitle>Бесплатный для всех<br/> городов России</ContactSubtitle>
          </ContactGroup>
          <Socials>
            <SocialLink name="facebook" />
            <SocialLink name="instagram" />
            <SocialLink name="twitter" />
            <SocialLink name="youtube" />
          </Socials>
        </Contacts>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
