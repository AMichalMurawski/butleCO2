import styled from 'styled-components';
import { H2, H3, P, Section } from '../../styles/Global.styled';
import heroImage from '../../images/fk7rx5fk7rx5fk7r.jpg';

export const ServicesSection = styled(Section)``;

export const Title = styled(H2)``;

export const ServicesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ServiceWraper = styled.div`
  position: relative;
  flex-basis: calc((100% - 30px) / 2);
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.color.hightlight};
  text-shadow: 0 0 10px black;
  overflow: hidden;

  &:hover div{
    transform: translateY(0%);
    padding: 60px;
  }
`;

interface ServiceImageProps {
  $image?: string;
}

export const ServiceImage = styled.div<ServiceImageProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const ServicePanel = styled.div`
  height: 100%;
  padding: 25px 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  transform: translateY(80%);
  background-color: rgba(0, 0, 0, 0.5);
  transition: transform ease-out 300ms, padding ease-out 300ms;
`

export const ServiceTitle = styled(H3)`
  position: relative;
  margin-bottom: 0;
`;

export const ServiceDescription = styled(P)`
  height: 100%;
  margin: auto;
`;