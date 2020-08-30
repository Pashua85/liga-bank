import React, {FunctionComponent, useState, useEffect} from 'react';
import {Container, Header, Row, Column, SectionHeader} from './style';
import SelectField from '../select-field/select-field';
import FieldWithButtons from '../field-with-buttons/field-with-buttons';

export type CalculatorType = `Ипотечное кредитование` | `Автомобильное кредитование` | `Потребительский кредит` | null;
interface ILoanParams {
  value: number,
}

const Calculator: FunctionComponent = () => {
  const [calculatorType, setCalculatorType] = useState<CalculatorType>(`Ипотечное кредитование`);
  const [loanParams, setLoanParams] = useState<ILoanParams | null>(null);

  useEffect(() => {
    if (calculatorType === `Ипотечное кредитование`) {
      setLoanParams({
        value: 2000000
      });
    }
  }, [calculatorType]);

  const handleValueChange = (newValue: number) => {
    const newParams = Object.assign({}, loanParams);
    newParams.value = newValue;
    setLoanParams(newParams);
  };

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
          {
            calculatorType !== null &&
            <SectionHeader>Шаг 2. Введите параметры кредита</SectionHeader>
          }
          {
            (calculatorType === `Ипотечное кредитование` && loanParams !== null) &&
            <FieldWithButtons
              value={loanParams.value}
              minValue={1200000}
              maxValue={25000000}
              title="Стоимость недвижимости"
              onValidChange={handleValueChange}
              step={100000}
            />
          }
        </Column>
      </Row>
    </Container>
  );
};

export default Calculator;
