import styled from 'styled-components';

export const TransactionToggle = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: center;
`;

export const ProductsList = styled.div`
  padding: 0.75rem 0.75rem;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  max-height: 100%;
  gap: 1.5rem;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ProductWraper = styled.div`
    position: relative;
    width: 6rem;
    height: 10rem;
    display: flex:
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.text};
    overflow: hidden;
    cursor: pointer;
    
    &:hover svg {
        fill: ${({ theme }) => theme.color.structural}
    }
`;

export const IconSvgWraper = styled.div`
  translate: -2rem;
`;

export const DescriptionWraper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
