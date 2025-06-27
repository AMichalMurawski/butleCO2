import styled from 'styled-components';

interface ButtonElementProps {
  $active: boolean;
  $color: string;
  $background: string
}

export const ButtonElement = styled.button<ButtonElementProps>`
  padding: 1rem;
  color: ${({ $active, $color, theme }) => ($active ? theme.color.hightlight : $color)};
  background-color: ${({ $background }) => $background};
  border-radius: 100px;
  border: none;
  cursor: pointer;
  text-shadow: 0 0 15px ${({ $active, theme: { color } }) => ($active ? color.remarkable : 'null')};
  ${({theme}) => theme.css.transition(['scale', 'box-shadow'])}

  &:hover {
    scale: 1.1;
    box-shadow: inset -1px -1px 2px 2px gray;
  }
`;
