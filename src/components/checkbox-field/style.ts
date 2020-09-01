import styled from 'styled-components';
import checkboxEmpty from '../../assets/checkbox-empty.svg';
import checkboxChecked from '../../assets/checkbox-checked.svg';

export const Wrapper = styled.div``;

export const Checkbox = styled.input`
  display: none;

  &:checked + div:before {
    background-image: url(${checkboxChecked});
  }
`;

export const Label = styled.label`
  user-select: none;
`;

export const Text = styled.div`
  font-size: 16px;
  line-height: 22px;
  padding-left: 24px;
  position: relative;

  &:before {
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${checkboxEmpty});
    content: '';
    height: 16px;
    left: 0;
    margin-top: -8px;
    position: absolute;
    top: 50%;
    width: 16px;
  }
`;
