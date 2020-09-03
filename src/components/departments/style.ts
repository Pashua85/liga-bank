import styled from 'styled-components';
import {CONTENT_WIDTH, DEVICE} from '../../variables';


export const Container = styled.div`
  margin: 0 auto;
  max-width: 1645px;
  width: ${CONTENT_WIDTH.DESK};

  @media ${DEVICE.TABLET} {
    width: ${CONTENT_WIDTH.TAB};
  }

  @media ${DEVICE.MOBILE} {
    width: ${CONTENT_WIDTH.MOBILE};
  }
`;

export const Header = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 41px;
  line-height: 57px;
  margin-bottom: 54px;

  @media ${DEVICE.TABLET} {
    font-size: 32px;
    line-height: 45px;
    margin-bottom: 27px;
  }

  @media ${DEVICE.MOBILE} {
    font-size: 22px;
    line-height: 31px;
    margin-bottom: 22px;
  }
`;

export const Filters = styled.div`
  background-color: #F6F7FF;
  border-bottom: 1px solid #C1C2CA;
  display: flex;
  justify-content: center;
  height: 83px;
  padding-top: 32px;
`;

export const CheckboxWrapper = styled.div`
  
  &:not(:last-child) {
    margin-right: 31px;
  }
`;

