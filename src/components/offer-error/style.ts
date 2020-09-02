import styled from 'styled-components';
import {DEVICE} from '../../variables';

export const Container = styled.div`
  background-color: #F6F7FF;
  margin-top: 8px;
  padding-left: 52px;
  padding-top: 60px;
  padding-bottom: 60px;
  width: 500px;
  height: fit-content;

  @media ${DEVICE.TABLET} {
    width: 100%;
  }

  @media ${DEVICE.MOBILE} {
    padding-left: 15px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 31px;
  margin-bottom: 25px;
  width: 370px;

  @media ${DEVICE.MOBILE} {
    width: 77%;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const Subtitle = styled.p`
  color: #394959;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 0;
  width: 260px;

  @media ${DEVICE.MOBILE} {
    width: auto;
  }
`;
