import React, {FunctionComponent} from 'react';
import {Container, Header, Content, Item, ValueNumber, Label, Button} from './style';
import {CalculatorType} from '../calculator/calculator';

interface OfferProps {
  type: CalculatorType,
  loanAmount: number,
  interestRate: number,
  monthPayment: number,
  minSalary: number,
  onClick: () => void
}

const Offer: FunctionComponent<OfferProps> = ({type, loanAmount, interestRate, monthPayment, minSalary, onClick}) => {
  const loanAmountLabel = type === `Ипотечное кредитование` ? `Сумма ипотеки` : `Сумма кредита`;
  const percent = interestRate.toFixed(2).replace(`.`, `,`);

  return (
    <Container>
      <Header>Наше предложение</Header>
      <Content>
        <Item>
          <ValueNumber>{`${loanAmount.toLocaleString()} рублей`}</ValueNumber>
          <Label>{loanAmountLabel}</Label>
        </Item>
        <Item>
          <ValueNumber>{percent}%</ValueNumber>
          <Label>Процентная ставка</Label>
        </Item>
        <Item>
          <ValueNumber>{`${monthPayment.toLocaleString()} рублей`}</ValueNumber>
          <Label>Ежемесячный платеж</Label>
        </Item>
        <Item>
          <ValueNumber>{`${minSalary.toLocaleString()} рублей`}</ValueNumber>
          <Label>Необходимый доход</Label>
        </Item>
      </Content>
      <Button onClick={onClick}>Оформить заявку</Button>
    </Container>
  );
};

export default Offer;
