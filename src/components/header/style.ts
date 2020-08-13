import styled from 'styled-components';
import enterImg from '../../assets/enter.svg';
import logoDesk from '../../assets/logo-desktop.png';
import {MAIN_FONT_COLOR} from '../app/style';

export const HeaderStyled = styled.div`
  background-color: #F6F7FF;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1645px;
  min-height: 91px;
  width: 85.652%;
`;

export const Logo = styled.div`
  font-family: 'Work-Sans', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: .07rem;
  line-height: 23px;
  margin-right: 58px;
  position: relative;

  &:before {
    background-image: url(${logoDesk});
    background-size: cover;
    bottom: 4px;
    content: '';
    height: 27px;
    left: -38px;
    position: absolute;
    width: 30px;
  }
`;

export const Login = styled.a`
  align-items: center;
  display: block;
  color: ${MAIN_FONT_COLOR};
  font-family: 'Roboto', 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 19px;
  margin-left: auto;
  text-decoration: none;
  padding-left: 30px;
  position: relative;

  &:before {
    background: url(${enterImg});
    content: '';
    height: 22px;
    left: 0;
    margin-top: -12px;
    position: absolute;
    top: 50%;
    width: 20px;
  }
`;
