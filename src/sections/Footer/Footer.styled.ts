import styled from 'styled-components';
import { IconLink } from '../../styles';

export const FooterWraper = styled.footer`
  margin-top: auto;
  background-color: ${({ theme }) => theme.color.structuralTrans};
`;

export const FooterConteiner = styled.div`
  max-width: 1280px;
  margin-inline: auto;
  padding: 30px;
`;

export const DataWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  text-align: left;
`;

export const DataBox = styled.div`
  flex-basis: calc((100% - 2 * 30px) / 3);
`;

export const MediaBox = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const IconWraper = styled(IconLink)`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  border-radius: 1000px;
  padding: 4px;
  transition: background-color 300ms ease;

  & svg {
    translate: 0 -2px;
    transition: fill 300ms ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.hightlight};

    & svg {
      fill: ${({ theme }) => theme.color.structural};
    }
  }
`;

export const PrivacyPolicy = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & * {
    color: ${({ theme }) => theme.color.textTrans};
    width: max-content;
    margin-top: auto;
    font-style: italic;
    font-size: 14px;
  }
`;
