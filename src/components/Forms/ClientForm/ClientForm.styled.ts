import { Form } from 'formik';
import styled from 'styled-components';

export const DataList = styled(Form)`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
  color: ${({ theme }) => theme.color.structural};
  background-color: ${({ theme }) => theme.color.text};
  overflow-y: auto;
`;

export const DataValue = styled.input`
  position: relative;
  width: 100%;
  padding: 2px 7px;
  text-align: left;
  border: none;
  outline: none;
  background-color: transparent;
  box-shadow: inset 0 -1px 3px 1px ${({ theme }) => theme.color.structural};
  transform: translateY(2px);

  &:focus,
  &:hover {
    box-shadow:
      inset 0 -1px 3px 1px ${({ theme }) => theme.color.structural},
      inset 0 -1px 6px 2px ${({ theme }) => theme.color.remarkable};
  }
`;

export const SubmitButtonConteiner = styled.div`
  margin-top: 30px;
  margin-left: auto;
`;
