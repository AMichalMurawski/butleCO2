import styled from 'styled-components';
import { Section } from '../../styles/Global.styled';
import heroImage from '../../images/fk7rx5fk7rx5fk7r.jpg';

export const HeroSection = styled(Section)`
  position: relative;
  width: 100%;
  height: 600px;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  filter: brightness(50%);
`;

export const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 48px;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.color.hightlight};
  text-shadow: 0 0 10px black;
`;
