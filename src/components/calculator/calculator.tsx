import React, {FunctionComponent, useState, useEffect} from 'react';
import {Container, Header, Row, Column, SectionHeader} from './style';
import SelectField from '../select-field/select-field';
import FieldWithButtons from '../field-with-buttons/field-with-buttons';
import FieldComponent from '../field-component/field-component';
import RangeSlider from '../range-slider/range-slider';
import CheckboxField from '../checkbox-field/checkbox-field';

export type CalculatorType = `Ипотечное кредитование` | `Автомобильное кредитование` | `Потребительский кредит` | null;

const Calculator: FunctionComponent = () => {
  const [calculatorType, setCalculatorType] = useState<CalculatorType>(`Ипотечное кредитование`);
  const [value, setValue] = useState(0);
  const [initPayment, setInitPayment] = useState(0);
  const [minInitPayment, setMinInitPayment] = useState(0);
  const [initPercent, setInitPercent] = useState(0);
  const [termInYears, setTermInYears] = useState(0);
  const [maternalCapital, setMaternalCapital] = useState(false);
  const [loanAmount, setLoanAmount] = useState(0);

  useEffect(() => {
    if (calculatorType === `Ипотечное кредитование`) {
      setValue(2000000);
      setInitPayment(200000);
      setInitPayment(200000);
      setInitPercent(10);
      setTermInYears(5);
      setMaternalCapital(true);
    }
  }, [calculatorType]);

  useEffect(() => {
    if (calculatorType === `Ипотечное кредитование`) {
      setInitPayment(value * 0.1);
      setMinInitPayment(value * 0.1);
    }
  }, [value, calculatorType]);

  useEffect(() => {
    const newPersent = Math.round(initPayment / value * 100);
    if (newPersent <= 100) {
      setInitPercent(newPersent);
    } else {
      setInitPercent(100);
    }
  }, [initPayment, value]);

  useEffect(() => {
    if (calculatorType === `Ипотечное кредитование`) {
      if (maternalCapital) {
        setLoanAmount(value - initPayment - 470000);
      } else {
        setLoanAmount(value - initPayment);
      }
    }
  }, [calculatorType, maternalCapital, value, initPayment]);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
  };

  const handleInitPaymentChange = (newValue: number) => {
    setInitPayment(newValue);
  };

  const handleItitPersentChange = (newPecent: number) => {
    setInitPayment(Math.round(value / 100 * newPecent));
  };

  const handleTermChange = (newTerm: number) => {
    setTermInYears(newTerm);
  };

  const handleMaternalCapitalChange = (newIsChecked: boolean) => {
    setMaternalCapital(newIsChecked);
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
            (calculatorType === `Ипотечное кредитование`) &&
            <React.Fragment>
              <FieldWithButtons
                value={value}
                minValue={1200000}
                maxValue={25000000}
                title="Стоимость недвижимости"
                onValidChange={handleValueChange}
                step={100000}
              />
              <FieldComponent
                value={initPayment}
                title="Первоначальный взнос"
                min={minInitPayment}
                max={value}
                onValidChange={handleInitPaymentChange}
                items="рублей"
              />
              <RangeSlider
                value={initPercent}
                min={10}
                max={100}
                step={1}
                onChange={handleItitPersentChange}
                hasBorders={false}
                items="%"
              />
              <FieldComponent
                value={termInYears}
                title="Срок кредитования"
                min={5}
                max={30}
                onValidChange={handleTermChange}
                items="лет"
              />
              <RangeSlider
                value={termInYears}
                min={5}
                max={30}
                step={1}
                onChange={handleTermChange}
                hasBorders={true}
                items="лет"
              />
              <CheckboxField
                isChecked={maternalCapital}
                onChange={handleMaternalCapitalChange}
                label="Использовать материнский капитал"
              />
            </React.Fragment>
          }
        </Column>
      </Row>
    </Container>
  );
};

export default Calculator;
