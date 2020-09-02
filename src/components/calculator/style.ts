import styled from 'styled-components';
import {CONTENT_WIDTH, DEVICE} from '../../variables';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1645px;
  width: ${CONTENT_WIDTH.DESK};

  @media ${DEVICE.TABLET} {
    width: ${CONTENT_WIDTH.TAB};
  }
`;

export const Header = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 41px;
  line-height: 57px;
  margin-bottom: 48px;

  @media ${DEVICE.TABLET} {
    font-size: 32px;
    line-height: 45px;
    margin-bottom: 27px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 60px;

`;

export const Column = styled.div`
  width: 51.28%;

  @media ${DEVICE.TABLET} {
    width: 100%;
    margin-bottom: 25px;
  }
`;

export const SectionHeader = styled.h3<{name?: string}>`
  font-size: 22px;
  line-height: 31px;
  margin-bottom: ${({name}) => name === `step-2` ? `17px` : `22px`};

  @media ${DEVICE.TABLET} {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: ${({name}) => name === `step-2` ? `14px` : `19px`}
  }  
`;

export const Select = styled.select`
  border-radius: 4px;
  height: 60px;
  line-height: 60px;
  vertical-align: middle;
`;

export const RangeWrapper = styled.div<{name?: string}>`
  margin-top: ${({name}) => name === `years` ? `-4px` : ``};
  margin-bottom: ${({name}) => name === `years` ? `46px` : `45px`};

  @media ${DEVICE.TABLET} {
    margin-bottom: ${({name}) => name === `years` ? `42px` : `39px`};
  }
`;
