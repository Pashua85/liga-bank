import React, {FunctionComponent, useState} from 'react';
import {Container, Header, Row, Column, SectionHeader} from './style';
import SelectField from '../select-field/select-field';

export type CalculatorType = `Ипотечное кредитование` | `Автомобильное кредитование` | `Потребительский кредит` | null;

const Calculator: FunctionComponent = () => {
  const [calculatorType, setCalculatorType] = useState<CalculatorType>(null);

  return (
    <Container>
      <Header>Кредитный калькулятор</Header>
      <Row>
        <Column>
          <SectionHeader>Шаг 1. Цель кредита</SectionHeader>
          <SelectField
            options={[`Ипотечное кредитование`, `Автомобильное кредитование`, `Потребительский кредит`]}
            value={calculatorType}
            onChange={setCalculatorType}
          />
        </Column>
      </Row>
    </Container>
  );
};

export default Calculator;
