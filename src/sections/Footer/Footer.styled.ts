import styled from 'styled-components';
import { H3, H4, P } from '../../styles/Global.styled';

export const FooterWraper = styled.footer`
  margin-top: auto;
  background-color: ${({ theme }) => theme.color.structural};
`;

export const FooterConteiner = styled.div`
  max-width: 1280px;
  margin-inline: auto;
  padding: 30px;
`

export const PrivacyPolicy = styled.div`
  margin-top: 30px;
  
  & *{
    font-style: italic;
    font-size: 14px;
    text-align: right;
  }
`

export const DataWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  
  & * {
    text-align: left;
  }
`

export const DataBox = styled.div`
  flex-basis: calc((100% - 2 * 30px) / 3);
`

export const Subtitle = styled(H4)``

export const Text = styled(P)``

export const Link = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-shadow: 0 0 5px cyan;
    border-bottom: 1px solid cyan;
    cursor: pointer;
  }
`