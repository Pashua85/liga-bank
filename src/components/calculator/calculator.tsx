import React, {FunctionComponent, useState, useEffect} from 'react';
import {Container, Header, Row, Column, SectionHeader, RangeWrapper} from './style';
import SelectField from '../select-field/select-field';
import FieldWithButtons from '../field-with-buttons/field-with-buttons';
import FieldComponent from '../field-component/field-component';
import RangeSlider from '../range-slider/range-slider';
import CheckboxField from '../checkbox-field/checkbox-field';
import OfferError from '../offer-error/offer-error';
import Offer from '../offer/offer';
import RequestForm from '../request-form/request-form';

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
  const [minLoanAmount, setMinLoanAmount] = useState(0);
  const [isAmountCorrect, setIsAmmountCorrect] = useState(true);
  const [amountError, setAmountError] = useState(``);
  const [interestRate, setInterestRate] = useState(0);
  const [monthPayment, setMonthPayment] = useState(0);
  const [minSalary, setMinSalary] = useState(0);
  const [insuranse, setInsuranse] = useState(false);
  const [casco, setCasco] = useState(false);
  const [salaryProject, setSalaryProject] = useState(false);
  const [isFormShown, setIsFormShown] = useState(true);
  const [requestNumber, setRequestNumber] = useState(1);

  useEffect(() => {
    if (calculatorType === `Ипотечное кредитование`) {
      setValue(2000000);
      setInitPayment(200000);
      setInitPercent(10);
      setTermInYears(5);
      setMaternalCapital(true);
      setMinLoanAmount(500000);
      setIsAmmountCorrect(true);
      setInterestRate(9.4);
    } else if (calculatorType === `Автомобильное кредитование`) {
      setValue(1500000);
      setInitPayment(300000);
      setInitPercent(20);
      setTermInYears(1);
      setInsuranse(true);
      setCasco(true);
      setMinLoanAmount(200000);
      setIsAmmountCorrect(true);
      setInterestRate(3.5);
    } else if (calculatorType === `Потребительский кредит`) {
      setValue(100000);
      setTermInYears(1);
      setSalaryProject(true);
      setMinLoanAmount(50000);
      setIsAmmountCorrect(true);
      setInterestRate(14.5);
    }
  }, [calculatorType]);

  useEffect(() => {
    if (calculatorType === `Ипотечное кредитование`) {
      setInitPayment(value * 0.1);
      setMinInitPayment(value * 0.1);
    } else if (calculatorType === `Автомобильное кредитование`) {
      setInitPayment(value * 0.2);
      setMinInitPayment(value * 0.2);
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
    } else if (calculatorType === `Автомобильное кредитование`) {
      setLoanAmount(value - initPayment);
    } else if (calculatorType === `Потребительский кредит`) {
      setLoanAmount(value);
    }
  }, [calculatorType, maternalCapital, value, initPayment]);

  useEffect(() => {
    setIsAmmountCorrect(loanAmount >= minLoanAmount);
    if (calculatorType === `Ипотечное кредитование`) {
      if (loanAmount >= minLoanAmount) {
        setAmountError(``);
      } else {
        setAmountError(`Наш банк не выдаёт ипотечные кредиты меньше 500 000 рублей.`);
      }
    } else if (calculatorType === `Автомобильное кредитование`) {
      if (loanAmount >= minLoanAmount) {
        setAmountError(``);
      } else {
        setAmountError(`Наш банк не выдаёт автокредиты меньше 200 000 рублей.`);
      }
    } else if (calculatorType === `Потребительский кредит`) {
      if (loanAmount >= minLoanAmount) {
        setAmountError(``);
      } else {
        setAmountError(`Наш банк не выдаёт потребительские редиты меньше 50 000 рублей.`);
      }
    }
  }, [calculatorType, loanAmount, minLoanAmount]);

  useEffect(() => {
    if (calculatorType === `Ипотечное кредитование`) {
      if (initPercent >= 15) {
        setInterestRate(8.5);
      } else {
        setInterestRate(9.4);
      }
    } else if (calculatorType === `Автомобильное кредитование`) {
      if (casco && insuranse) {
        setInterestRate(3.5);
      } else if ((casco && !insuranse) || (!casco && insuranse)) {
        setInterestRate(8.5);
      } else if ((!casco && !insuranse) && value >= 2000000) {
        setInterestRate(15);
      } else if ((!casco && !insuranse) && value < 2000000) {
        setInterestRate(16);
      }
    } else if (calculatorType === `Потребительский кредит`) {
      if (loanAmount < 750000 && !salaryProject) {
        setInterestRate(15);
      } else if (loanAmount < 750000 && salaryProject) {
        setInterestRate(14.5);
      } else if (loanAmount >= 750000 && loanAmount < 2000000 && !salaryProject) {
        setInterestRate(12.5);
      } else if (loanAmount >= 750000 && loanAmount < 2000000 && salaryProject) {
        setInterestRate(12);
      } else if (loanAmount >= 2000000 && !salaryProject) {
        setInterestRate(9.5);
      } else if (loanAmount >= 2000000 && salaryProject) {
        setInterestRate(9);
      }
    }
  }, [calculatorType, initPercent, casco, insuranse, value, salaryProject, loanAmount]);

  useEffect(() => {
    const result = loanAmount * (interestRate / 1200 + (interestRate / 1200 / (Math.pow((1 + interestRate / 1200), (termInYears * 12)) - 1)));
    setMonthPayment(Math.round(result));
  }, [loanAmount, interestRate, termInYears]);

  useEffect(() => {
    setMinSalary(Math.round(monthPayment / 0.45));
  }, [monthPayment]);

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

  const handleCascoChange = (newIsChecked: boolean) => {
    setCasco(newIsChecked);
  };

  const handleInsuranceChange = (newIsChecked: boolean) => {
    setInsuranse(newIsChecked);
  };

  const handleSalaryProjectChange = (newIsChecked: boolean) => {
    setSalaryProject(newIsChecked);
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
            <SectionHeader name="step-2">Шаг 2. Введите параметры кредита</SectionHeader>
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
              <RangeWrapper>
                <RangeSlider
                  value={initPercent}
                  min={10}
                  max={100}
                  step={5}
                  onChange={handleItitPersentChange}
                  hasBorders={false}
                  items="%"
                />
              </RangeWrapper>
              <FieldComponent
                value={termInYears}
                title="Срок кредитования"
                min={5}
                max={30}
                onValidChange={handleTermChange}
                items="лет"
              />
              <RangeWrapper name="years">
                <RangeSlider
                  value={termInYears}
                  min={5}
                  max={30}
                  step={1}
                  onChange={handleTermChange}
                  hasBorders={true}
                  items="лет"
                />
              </RangeWrapper>
              <CheckboxField
                isChecked={maternalCapital}
                onChange={handleMaternalCapitalChange}
                label="Использовать материнский капитал"
              />
            </React.Fragment>
          }
          {
            (calculatorType === `Автомобильное кредитование`) &&
            <React.Fragment>
              <FieldWithButtons
                value={value}
                minValue={500000}
                maxValue={5000000}
                title="Стоимость автомобиля"
                onValidChange={handleValueChange}
                step={50000}
              />
              <FieldComponent
                value={initPayment}
                title="Первоначальный взнос"
                min={minInitPayment}
                max={value}
                onValidChange={handleInitPaymentChange}
                items="рублей"
              />
              <RangeWrapper>
                <RangeSlider
                  value={initPercent}
                  min={20}
                  max={100}
                  step={5}
                  onChange={handleItitPersentChange}
                  hasBorders={false}
                  items="%"
                />
              </RangeWrapper>
              <FieldComponent
                value={termInYears}
                title="Срок кредитования"
                min={1}
                max={5}
                onValidChange={handleTermChange}
                items="лет"
              />
              <RangeWrapper name="years">
                <RangeSlider
                  value={termInYears}
                  min={1}
                  max={5}
                  step={1}
                  onChange={handleTermChange}
                  hasBorders={true}
                  items="лет"
                />
              </RangeWrapper>
              <CheckboxField
                isChecked={casco}
                onChange={handleCascoChange}
                label="Оформить КАСКО в нашем банке"
              />
              <CheckboxField
                isChecked={insuranse}
                onChange={handleInsuranceChange}
                label="Оформить Страхование жизни в нашем банке"
              />
            </React.Fragment>
          }
          {
            calculatorType === `Потребительский кредит` &&
            <React.Fragment>
              <FieldWithButtons
                value={value}
                minValue={50000}
                maxValue={3000000}
                title="Сумма кредита"
                onValidChange={handleValueChange}
                step={50000}
              />
              <FieldComponent
                value={termInYears}
                title="Срок кредитования"
                min={1}
                max={7}
                onValidChange={handleTermChange}
                items="лет"
              />
              <RangeWrapper name="years">
                <RangeSlider
                  value={termInYears}
                  min={1}
                  max={7}
                  step={1}
                  onChange={handleTermChange}
                  hasBorders={true}
                  items="лет"
                />
              </RangeWrapper>
              <CheckboxField
                isChecked={salaryProject}
                onChange={handleSalaryProjectChange}
                label="Участник зарплатного проекта нашего банка"
              />
            </React.Fragment>
          }
        </Column>
        {
          calculatorType !== null && !isAmountCorrect &&
          <OfferError
            title={amountError}
          />
        }
        {
          calculatorType !== null && isAmountCorrect &&
          <Offer
            type={calculatorType}
            loanAmount={loanAmount}
            interestRate={interestRate}
            monthPayment={monthPayment}
            minSalary={minSalary}
          />
        }
      </Row>
      {
        isFormShown &&
        <RequestForm
          requestNumber={requestNumber}
          calculatorType={calculatorType}
          value={value}
          initPayment={initPayment}
          termInYears={termInYears}
        />
      }
    </Container>
  );
};

export default Calculator;
