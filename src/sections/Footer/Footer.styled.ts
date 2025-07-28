import styled from 'styled-components';
import { IconLink } from '../../styles';

export const FooterWraper = styled.footer`
  margin-top: auto;
  background-color: ${({ theme }) => theme.color.structuralTrans};
`;

export const FooterConteiner = styled.div`
  max-width: 1280px;
  margin-inline: auto;
  padding: 2rem;
`;

export const DataWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;

  ${({ theme }) => theme.media.m} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

interface DataBoxProps {
  $order?: [number, number, number];
}

export const DataBox = styled.div<DataBoxProps>`
  width: fit-content;
  order: ${({ $order }) => $order?.[0] || 0};
  
  ${({ theme }) => theme.media.m} {
    flex-basis: calc((100% - 2rem) / 2);
    order: ${({$order}) => $order?.[1] || 0};
  }

  ${({theme}) => theme.media.t} {
    flex-basis: calc((100% - 2 * 2rem) / 3);
    order: ${({$order}) => $order?.[2] || 0};
  }
  
  & * {
    text-align: left;
  }
`;

export const MediaBox = styled.div`
  margin-top: 0.35rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const IconWraper = styled(IconLink)`
  box-sizing: border-box;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1000px;
  padding: 0.25rem;
  ${({theme}) => theme.css.transition('background-color')}

  & svg {
    translate: 0 -0.125rem;
    ${({theme}) => theme.css.transition('fill')}
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.hightlight};

    & svg {
      fill: ${({ theme }) => theme.color.structural};
    }
  }
`;

export const PrivacyPolicy = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  & div {
    margin-top: auto;
    min-width: 350px;
  }

  & p {
    color: ${({ theme }) => theme.color.textTrans};
    width: max-content;
    font-style: italic;
    font-size: 0.75rem;
  }

  & > div:nth-child(2) {
    margin-left: auto;
    min-width: 18rem;
  }
`;
