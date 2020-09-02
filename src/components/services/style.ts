import styled from 'styled-components';
import {DEVICE} from '../../variables';

export const Container = styled.div`
  margin-bottom: 97px;

  @media ${DEVICE.TABLET} {
    margin-bottom: 69px;
  }
`;
