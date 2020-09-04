import styled from 'styled-components';
import {DEVICE} from '../../variables';

export const Container = styled.div`
  height: 464px;

  @media ${DEVICE.MOBILE} {
    height: 381px;
  }
`;
