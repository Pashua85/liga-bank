import styled from 'styled-components';
import logoImg from '../../assets/logo.svg';
import {CONTENT_WIDTH, DEVICE, MAIN_FONT_COLOR, HOVER_FONT_COLOR} from '../../variables';
import {SocialName} from './footer';
import facebookIcon from '../../assets/facebook-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
import youtubeIcon from '../../assets/youtube-icon.svg';
import mobileIcon from '../../assets/mobile-icon.svg';
import handset from '../../assets/handset.svg';

export const FooterStyled = styled.footer`
  background-color: #F6F7FF;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1645px;
  height: 224px;
  padding-top: 53px;
  width: ${CONTENT_WIDTH.DESK};

  @media ${DEVICE.TABLET} {
    min-height: 350px;
    width: ${CONTENT_WIDTH.TAB};
  }

  @media ${DEVICE.MOBILE} {
    min-height: 426px;
    width: ${CONTENT_WIDTH.MOBILE};
  }
`;

export const Navigation = styled.div`
  align-items: space-between;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 40.7%;

  @media ${DEVICE.TABLET} {
    align-items: flex-start;
    flex-wrap: nowrap;
  }
`;

export const Logo = styled.div`
  font-family: 'Work-Sans', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: .05rem;
  line-height: 23px;
  margin-top: 1px;
  order: 1;
  padding-left: 38px;
  position: relative;
  user-select: none;
  width: 260px;

  @media ${DEVICE.TABLET} {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: -7px;
    padding-left: 33px;
  }

  @media ${DEVICE.MOBILE} {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 0;
    padding-left: 24px;
  }

  &:before {
    background-image: url(${logoImg});
    background-size: cover;
    bottom: 4px;
    content: '';
    height: 27px;
    left: 0;
    position: absolute;
    width: 30px;

    @media ${DEVICE.TABLET} {
      background-image: url(${logoImg});
      background-image: contain;
      bottom: 3px;
      height: 24px;
      left: -1px;
      width: 26px;
    }

    @media ${DEVICE.MOBILE} {
      height: 18px;
      width: 19px;
      bottom: 4px;
    }
  }
`;

export const Address = styled.p`
  color: #707C87;
  font-size: 12px;
  line-height: 17px;
  margin-top: 13px;
  order: 2;
  width: 260px;

  @media ${DEVICE.TABLET} {
    margin-top: 26px;
    order: 3;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  order: 3;

  @media ${DEVICE.TABLET} {
    align-self: flex-start;
    margin-top: 33px;
    order: 2;
  }
`;

export const NavLink = styled.a`
  color: ${MAIN_FONT_COLOR};
  cursor: pointer;
  font-size: 15.9px;
  font-weight: 500;
  line-height: 22px;

  &:hover {
    color: ${HOVER_FONT_COLOR};
    text-decoration: none;
  }

  &:not(:last-child) {
    margin-bottom: 9px;
  }
`;

export const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 52.27%;

  @media ${DEVICE.TABLET} {
    flex-direction: column;
    justify-content: flex-start;
    width: 47.8%;
  }
`;

export const ContactGroup = styled.div<{name: string}>`
  position: relative;
  padding-left: ${({name}) => name === `sms` ? `29px` : `33px`};
  padding-top: ${({name}) => name === `sms` ? `2px` : ``};

  &:before {
    background-size: contain;
    background-image: ${({name}) => name === `sms` ? `url(${mobileIcon})` : `url(${handset})`};
    content: '';
    height: 16px;
    left: 0;
    top: 5px;
    position: absolute;
    width: ${({name}) => name === `sms` ? `10px` : `16px`};
  }

  @media ${DEVICE.TABLET} {
    margin-bottom: 21px;
  }

  &:nth-child(2) {
    @media ${DEVICE.TABLET} {
      margin-bottom: 20px;
    }
  }

  &:nth-child(2):before {
    @media ${DEVICE.TABLET} {
      top: 4px;
    }
  }
`;

export const ContactNumber = styled.a`
  color: ${MAIN_FONT_COLOR};
  display: inline-block;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 1px;

  &:hover {
    color: ${MAIN_FONT_COLOR}
  }

  @media ${DEVICE.TABLET} {
    padding-top: 1px;
  }
`;

export const ContactSubtitle = styled.p`
  color: #707C87;
  font-size: 12px;
  line-height: 17px;
  margin-bottom: 0;
`;

export const Socials = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding-top: 5px;
`;

export const SocialLink = styled.a<{name: SocialName}>`
  display: block;
  background-image: ${({name}) => {
    switch (name) {
      case `facebook`:
        return `url(${facebookIcon})`;
      case `instagram`:
        return `url(${instagramIcon})`;
      case `twitter`:
        return `url(${twitterIcon})`;
      case `youtube`:
        return `url(${youtubeIcon})`;
      default:
        return ``;
    }
  }};
  background-size: contain;
  cursor: pointer;
  height: ${({name}) => {
    switch (name) {
      case `facebook`:
        return `16px`;
      case `instagram`:
        return `16px`;
      case `twitter`:
        return `13px`;
      case `youtube`:
        return `13px`;
      default:
        return `16px`;
    }
  }};
  position: relative;
  width: ${({name}) => {
    switch (name) {
      case `facebook`:
        return `9px`;
      case `instagram`:
        return `16px`;
      case `twitter`:
        return `16px`;
      case `youtube`:
        return `16px`;
      default:
        return `16px`;
    }
  }};

  &:not(:last-child) {
    margin-right: 15px;

    @media ${DEVICE.TABLET} {
      margin-right: 20px;
    }
  }

  &:hover:after {
    background-color: rgba(255, 255, 255, .2);
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }
`;
