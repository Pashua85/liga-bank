import styled from 'styled-components';
import {CONTENT_WIDTH} from '../../variables';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1645px;
  width: ${CONTENT_WIDTH.DESK};
`;

export const Header = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 41px;
  line-height: 57px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  width: 51.28%;
`;

export const SectionHeader = styled.h3`
  font-size: 22px;
  line-height: 31px;
`;

export const Select = styled.select`
  border-radius: 4px;
  height: 60px;
  line-height: 60px;
  vertical-align: middle;
`;
