import styled from 'styled-components';
import {ServiceTitle} from './desktop-services';
import vault from '../../assets/vault.svg';
import cards from '../../assets/cards.svg';
import security from '../../assets/security.svg';
import phone from '../../assets/phone.svg';
import itemIcon from '../../assets/item-icon.svg';
import {HOVER_FONT_COLOR} from '../../variables';

export const Container = styled.div`
  max-width: 1645px;
  margin: 0 auto;
  margin-bottom: 200px;
  width: 85.652%;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavItem = styled.div<{isActive: boolean}>`
  align-items: center;
  background-color: ${({isActive}) => isActive ? `#F6F7FF` : ``};
  cursor: pointer;
  display: flex;
  width: 25%;
  justify-content: center;
  min-height: 93px;

  &:hover {
    color: ${({isActive}) => isActive ? `` : HOVER_FONT_COLOR};
  }
`;

export const Title = styled.h3<{service: ServiceTitle}>`
  display: flex;
  margin: 0;
`;

export const VaultIcon = styled.i`
  background-image: url(${vault});
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  height: 33px;
  margin-right: 10px;
  width: 34px;
  vertical-align: middle;
`;

export const CardsIcon = styled.i`
  background-image: url(${cards});
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  height: 30.5px;
  margin-right: 10px;
  width: 34px;
  vertical-align: middle;
`;

export const SecurityIcon = styled.i`
  background-image: url(${security});
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  height: 34px;
  margin-top: -1.5px;
  margin-right: 10px;
  width: 28px;
  vertical-align: middle;
`;

export const PhoneIcon = styled.i`
  background-image: url(${phone});
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  height: 34px;
  margin-top: -1.5px;
  margin-right: 10px;
  width: 20px;
  vertical-align: middle;
`;

export const TitleText = styled.span`
  align-self: center;
  font-size: 17.7px;
  font-weight: 500;
  line-height: 18px;
`;

export const Card = styled.div<{activeService: ServiceTitle}>`
  background-color: #F6F7FF;
  display: flex;
  justify-content: space-between;
  padding: ${({activeService}) => {
    if (activeService === `Вклады`) {
      return `60px 11.5385% 60px 5.893%`;
    } else {
      return `60px 11.5385% 60px 5.893%`;
    }
  }}
`;

export const CardColumn = styled.div`
  width: 41.45%;
`;

export const CardText = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 141%;
  vertical-align: text-top;
  margin-bottom: 27px;
  margin-top: -7px;
  padding-left: 1px;
`;

export const CardList = styled.ul`
  margin-bottom: 35px;
`;

export const CardItem = styled.li`
  font-size: 17.8px;
  line-height: 130%;
  list-style: none;
  letter-spacing: .1px;
  padding-left: 22px;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:before {
    background-image: url(${itemIcon});
    background-size: contain;
    content: '';
    height: 10px;
    left: 0%;
    position: absolute;
    top: 6px;
    width: 13px;
  }

  &:first-child:before {
    top: 7px;
  }
`;

export const CardLink = styled.a`
  background-color: #2C36F2;
  border-radius: 4px;
  color: #F6F7FF;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  height: 51px;
  line-height: 51px;
  margin-left: 1px;
  text-align: center;
  width: 198px;
  vertical-align: middle;

  &:hover {
    color: #F6F7FF;
    text-decoration: none;
  }
`;

export const CardImage = styled.div<{imageUrl: string}>`
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  height: 290px;
  width: 440px;
`;

