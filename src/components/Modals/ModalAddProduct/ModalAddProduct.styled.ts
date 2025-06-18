import styled from 'styled-components';
import { P } from '../../../styles/Global.styled';

export const TransactionToggle = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
`;

export const ProductsList = styled.div`
  padding: 15px 5px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  max-height: 100%;
  gap: 30px;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ProductWraper = styled.div`
    position: relative;
    width: 110px;
    height: 180px;
    display: flex:
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.text};
    cursor: pointer;
    
    &:hover svg {
        fill: ${({ theme }) => theme.color.structural}
    }
`;

export const IconSvgWraper = styled.div`
  translate: -35px;
`;

export const DescriptionWraper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
