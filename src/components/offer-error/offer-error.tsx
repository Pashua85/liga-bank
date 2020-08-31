import React, {FunctionComponent} from 'react';
import {Container, Title, Subtitle} from './style';

interface OfferErrorProps {
  title: string
}

const OfferError: FunctionComponent<OfferErrorProps> = ({title}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>Попробуйте использовать другие параметры для расчёта.</Subtitle>
    </Container>
  );
};

export default OfferError;
