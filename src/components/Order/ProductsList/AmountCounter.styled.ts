import styled from "styled-components";

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({theme}) => theme.color.structural};
  overflow: hidden;
  width: fit-content;
  margin-inline: auto;
`;

export const AmountButton = styled.button`
  background-color: ${({theme}) => theme.color.structuralTrans};
  color: ${({theme}) => theme.color.text};
  border: none;
  width: 25px;
  height: 25px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.color.structural};
  }
`;

export const AmountInput = styled.input`
  width: 30px;
  text-align: center;
  border: none;
  outline: none;
  background-color: transparent;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;
