import styled from 'styled-components';
import { Field } from 'formik';

export const InputWraper = styled.div`
  width: 100%;
  height: 100%;
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  border-radius: 15px;
  resize: none;
  vertical-align: top;

  &:focus {
    outline: none;
    border-color: inherit;
    box-shadow: none;
  }
`;
