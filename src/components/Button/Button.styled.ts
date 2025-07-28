import styled from 'styled-components';

interface ButtonElementProps {
  $active: boolean;
  $color: string;
  $background: string;
}

export const ButtonElement = styled.button<ButtonElementProps>`
  padding: 1rem;
  color: ${({ $active, $color, theme }) => ($active ? theme.color.hightlight : $color)};
  background-color: ${({ $background }) => $background};
  border-radius: 100px;
  border: none;
  cursor: pointer;
  text-shadow: ${({ $active, $color, theme: { color } }) =>
    $active ? `0 0 5px ${color.text}` : `0 0 1px ${$color}`};
  ${({ theme }) => theme.css.transition(['scale', 'box-shadow'])}
  font-size: 0.9rem;
  family: ${({ theme }) => theme.fonts.main};

  &:hover {
    scale: 1.1;
    box-shadow: inset -1px -1px 2px 2px gray;
  }
`;
