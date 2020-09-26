import styled from 'styled-components';
import {CONTENT_WIDTH, DEVICE} from '../../variables';
import {CalculatorType} from './calculator';

export const Container = styled.div<{type: CalculatorType, isFormShown: boolean}>`
  margin: 0 auto;
  margin-bottom: ${({type, isFormShown}) => (type === null) || isFormShown ? `97px` : `87px`};
  max-width: 1645px;
  width: ${CONTENT_WIDTH.DESK};

  @media ${DEVICE.TABLET} {
    width: ${CONTENT_WIDTH.TAB};
    margin-bottom: ${({type}) => type === null ? `44px` : `69px`}
  }

  @media ${DEVICE.MOBILE} {
    width: ${CONTENT_WIDTH.MOBILE};
    margin-bottom: ${({isFormShown}) => isFormShown ? `53px` : `39px`};
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

  @media ${DEVICE.MOBILE} {
    font-size: 22px;
    line-height: 31px;
    margin-bottom: 22px;
  }
`;

export const Row = styled.div<{isFormShown: boolean}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${({isFormShown}) => isFormShown ? `60px` : ``};
  
  @media ${DEVICE.TABLET} {
    margin-bottom: ${({isFormShown}) => isFormShown ? `54px` : ``};
  }
  
  @media ${DEVICE.MOBILE} {
    margin-bottom: ${({isFormShown}) => isFormShown ? `43px` : ``};
  }
`;

export const Column = styled.div`
  width: 51.28%;

  @media ${DEVICE.TABLET} {
    width: 100%;
    margin-bottom: 25px;
  }

  @media ${DEVICE.MOBILE} {
    margin-bottom: 14px;
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

  @media ${DEVICE.MOBILE} {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: ${({name}) => name === `step-2` ? `9px` : `14px`}
  }
`;

export const RangeWrapper = styled.div<{name?: string}>`
  margin-top: ${({name}) => name === `years` ? `-4px` : ``};
  margin-bottom: ${({name}) => name === `years` ? `46px` : `45px`};

  @media ${DEVICE.TABLET} {
    margin-bottom: ${({name}) => name === `years` ? `42px` : `39px`};
  }

  @media ${DEVICE.MOBILE} {
    margin-bottom: ${({name}) => name === `years` ? `38px` : `35px`};
  }
`;
