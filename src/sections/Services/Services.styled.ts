import styled from 'styled-components';
import { ImageBg } from '../../styles';

export const ServicesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const ServiceWraper = styled.div`
  position: relative;
  flex-basis: 100%;
  height: 25rem;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.color.hightlight};
  overflow: hidden;

  &:hover > div {
    transform: translateY(0%);
    padding: 3.5rem 3rem;
  }

  ${({ theme }) => theme.media.d} {
    flex-basis: calc((100% - 2rem) / 2);
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
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform: translateY(80%);
  background-color: rgba(0, 0, 0, 0.7);
  ${({ theme }) => theme.css.transition(['transform', 'padding'])}

  & * {
    margin: 0;
  }
`;

export const HeadingWraper = styled.div`
  height: calc(20% - 3rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;
