import styled from 'styled-components';
import { P } from '../../../styles/Global.styled';

export const DataWraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: start;
`;

export const DataName = styled(P)`
  min-width: max-content;
  padding-left: 10px;
  font-size: 0.75rem;
`;

export const ValueConteiner = styled.div`
  position: relative;
  width: 100%;
`;

export const DataValue = styled.input`
  position: relative;
  width: 100%;
  padding: 5px 10px;
  text-align: left;
  border: 1px solid ${({theme}) => theme.color.structural};
  border-radius: 10px;
  outline: none;
  background-color: white;
  
  &:hover {
    box-shadow: inset 0 0 1px 1px ${({ theme }) => theme.color.accentTrans}, 
      inset 0 0 2px 2px ${({ theme }) => theme.color.remarkableTrans};
  }

  &:focus {
    box-shadow: inset 0 0 1px 1px ${({ theme }) => theme.color.structuralTrans}, 
      inset 0 0 2px 2px ${({ theme }) => theme.color.accent};
  }
`;

export const TextValue = styled(DataValue)`
`;

export const TextareaValue = styled(DataValue).attrs({ as: 'textarea' })`
  resize: none;
`;

export const CheckboxValueWraper = styled.label`
  cursor: pointer;
  width: 25px;
  height: 25px;
  background-color: yellow;
  // z-index: 100;
`;

export const CheckboxValue = styled(DataValue)`
  display: none;
`;

export const CheckboxHandleValue = styled.div<{ checked: boolean }>`
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background-color: ${({ theme, checked }) => checked ? theme.color.accent : theme.color.danger};
  // background-color: white;
  border: 1px solid ${({theme}) => theme.color.structural};
  border-radius: 4px;
  transition: background-color ease-in-out 300ms;
  display: flex;
  align-items: center;
  justify-content: center;

  // &:after {
  //   content: '';
  //   display: ${(props) => (props.checked ? 'block' : 'none')};
  //   width: 6px;
  //   height: 10px;
  //   border: solid white;
  //   border-width: 0 2px 2px 0;
  //   transform: rotate(45deg);
  // }
`;



interface SvgWraperProps {
  $visible: boolean;
}

export const SvgWraper = styled.div<SvgWraperProps>`
  position: absolute;  
  width: 13px;
  height: 13px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -12px);
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transition: opacity ease-in-out 300ms;
`;

export const ErrorValue = styled.p`
  position: absolute;
  bottom: -13px;
  left: 10px;
  width: 100%;
  color: ${({ theme }) => theme.color.danger};
  text-align: left;
  font-size: 0.6rem;
`