import styled from 'styled-components';

interface ButtonWraper {
  active: true | false;
}

export const ButtonWraper = styled.button<ButtonWraper>`
  padding: 10px;
  color: ${({ active, theme: { color } }) => (active ? color.hightlight : color.text)};
  background-color: transparent;
  border-radius: 100px;
  border: none;
  transition: scale 200ms;
  text-shadow: 0 0 15px ${({ active, theme: { color } }) => (active ? color.hightlight : 'null')};

  &:hover {
    scale: 1.1;
    box-shadow: inset -1px -1px 2px 2px gray;
  }
`;
