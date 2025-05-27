import styled from 'styled-components';
import { H3, P } from '../../../styles/Global.styled';

export const ClientInfoWraper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SubtitleWraper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.structural};
  color: ${({theme}) => theme.color.text};
`;

export const Subtitle = styled(H3)`
  margin: 0;
`;

export const DataList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(90vh - 100px);
  flex-grow: 1;
  gap: 15px;
  padding: 30px;
  color: ${({ theme }) => theme.color.structural};
  background-color: ${({ theme }) => theme.color.text};
  overflow-Y: scroll;
`

export const DataWraper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const DataName = styled(P)`
  min-width: max-content;
  padding-top: 2px;
`;

export const ValueConteiner = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  
  &:focus, &:hover {
    box-shadow: inset 0 -1px 3px 1px ${({ theme }) => theme.color.structural}, 
      inset 0 -1px 6px 2px ${({ theme }) => theme.color.remarkable};
  }
`;

export const TextValue = styled(DataValue)`
`;

export const TextareaValue = styled(DataValue).attrs({as: 'textarea'})`
`;

export const CheckboxValueWraper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  position: relative;
`;

export const CheckboxValue = styled(DataValue)`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckboxHandleValue = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  background: ${(props) => (props.checked ? '#0d6efd' : 'white')};
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: all 150ms;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: '';
    display: ${(props) => (props.checked ? 'block' : 'none')};
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const ErrorValue = styled.p`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  color: ${({ theme }) => theme.color.danger};
  text-align: left;
  font-size: 0.6rem;
`

export const ExitButtonConteiner = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 15px;
  height: 15px;
  cursor: pointer;

  &:hover {
    scale: 1.2;
  }
`;

export const SubmitButtonConteiner = styled.div`
  margin-top: 30px;
  margin-left: auto;
`;
