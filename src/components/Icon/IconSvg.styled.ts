import styled from 'styled-components';

interface SvgProps {
  $size: string;
  $fill?: string;
}

export const Svg = styled.svg<SvgProps>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  fill: ${({ $fill }) => $fill || 'currentColor'};
`;
