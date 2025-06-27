import styled from 'styled-components';
import { ImageBg } from '../../styles/Global.styled';

export const ServicesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ServiceWraper = styled.div`
  position: relative;
  flex-basis: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.color.hightlight};
  text-shadow: 0 0 10px black;
  overflow: hidden;

  &:hover div {
    transform: translateY(0%);
    padding: 60px 45px;
  }

  ${({ theme }) => theme.media.d} {
    flex-basis: calc((100% - 30px) / 2);
  }
`;

export const ServiceImage = styled(ImageBg)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
`;

export const ServicePanel = styled.div`
  height: 100%;
  padding: 25px 45px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  transform: translateY(80%);
  background-color: rgba(0, 0, 0, 0.7);
  transition:
    transform ease-out 300ms,
    padding ease-out 300ms;

  & * {
    margin: 0;
  }
`;
