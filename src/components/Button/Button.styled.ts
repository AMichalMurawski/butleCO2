import styled from 'styled-components';

interface ButtonWraper {
  $active: true | false;
  $color: string;
  $background: string
}

export const ButtonWraper = styled.button<ButtonWraper>`
  padding: 15px;
  color: ${({ $active, $color, theme }) => ($active ? theme.color.hightlight : $color)};
  background-color: ${({ $background }) => $background};
  border-radius: 100px;
  border: none;
  transition: scale 200ms;
  text-shadow: 0 0 15px ${({ $active, theme: { color } }) => ($active ? color.remarkable : 'null')};

  &:hover {
    scale: 1.1;
    box-shadow: inset -1px -1px 2px 2px gray;
  }
`;
