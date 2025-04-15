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

interface ServiceWraperProps {
  image?: string;
}

export const ServiceWraper = styled.div<ServiceWraperProps>`
  position: relative;
  flex-basis: calc((100% - 30px) / 2);
  height: 400px;
  padding: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.color.hightlight};
  text-shadow: 0 0 10px black;
`;

interface ServiceImageProps {
  image?: string;
}

export const ServiceImage = styled.div<ServiceImageProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  filter: brightness(35%) opacity(50%);
  z-index: -1;
`;

export const ServiceTitle = styled(H3)``;

export const ServiceDescription = styled(P)``;
