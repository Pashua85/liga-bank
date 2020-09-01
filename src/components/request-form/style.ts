import styled from 'styled-components';

export const Form = styled.form`
  background-color: #F6F7FF;
  margin: 0 auto;
  padding-top: 63px;
  padding-left: 70px;
  padding-right: 70px;
  padding-bottom: 70px;
  width: 770px;
`;

export const Header = styled.h3`
  font-size: 22px;
  font-weight: 31px;
  line-height: 31px;
  text-align: center;
  margin-bottom: 12px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Item = styled.li`
  border-bottom: 1px solid #C4C4C4;
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 55px;
`;

export const ItemLabel = styled.span`
  color: #394959;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: -1px;
`;

export const ItemValue = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 31px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const InputField = styled.div<{name: string}>`
  position: relative;
  height: 60px;
  width: ${({name}) => name === `fullname` ? `100%` : `47.62%`};

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  &:last-child {
    margin-bottom: 40px;
  }
`;

export const Input = styled.input<{name: string}>`
  background-color: transparent;
  border: 1px solid #0A1E32;
  border-radius: 4px;
  font-size: 18px;
  height: 60px;
  line-height: 60px;
  padding-left: 24px;
  width: 100%;
  vertical-align: middle;

  &:focus {
    outline: none;
    background-color: transparent;
  }
`;

export const ErrorSpan = styled.span`
  bottom: 0; 
  left: 24px;
  letter-spacing: .1px;
  position: absolute;
  font-size: 9px;
  text-transform: uppercase;
  color: red;
`;

export const Button = styled.button`
  background-color: #2C36F2;
  border: none;
  border-radius: 4px;
  color: #F6F7FF;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 51px;
  height: 51px;
  margin: 0 auto;
  width: 190px;
  user-select: none;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    outline: none;
    filter: none;
  }
`;

export const MessageBackground = styled.div`
  background-color: rgba(255, 255, 255, .7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 200;
`;

export const MessageCard = styled.div`
  background-color: #F6F7FF;
  border-radius: 4px;
  left: 50%;
  margin-left: -250px;
  margin-top: -97px;
  position: fixed;
  padding-top: 52px;
  padding-bottom: 57px;
  top: 50%;
  width: 500px;
`;

export const MessageTitle = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 31px;
  text-align: center;
`;

export const MessageText = styled.p`
  color: #394959;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  height: 16px;
  position: absolute;
  top: 25px;
  right: 25px;
  width: 16px;

  &:before,
  &:after {
    background-color: #1F1E25;
    content: '';
    height: 2px;
    left: -3.3px;
    top: 7px;
    position: absolute;
    width: 22.6px;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

