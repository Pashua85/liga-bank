import styled from 'styled-components';
import {ServiceTitle} from './desktop-services';
import vault from '../../assets/vault.svg';
import cards from '../../assets/cards.svg';
import security from '../../assets/security.svg';
import phone from '../../assets/phone.svg';
import {HOVER_FONT_COLOR} from '../../variables';

export const Container = styled.div`
  max-width: 1645px;
  margin: 0 auto;
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

export const Text = styled.span`
  align-self: center;
  font-size: 17.7px;
  font-weight: 500;
  line-height: 18px;
`;

