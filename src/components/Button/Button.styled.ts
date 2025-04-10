import styled from 'styled-components';

interface ButtonWraper {
  active: true | false;
}

export const ButtonWraper = styled.button<ButtonWraper>`
  padding: 10px;
  color: ${({ active }) => (active ? '#F2F3F5' : '#ABC4D3')};
  // background-color: ${({ active }) => (active ? '#ABC4D3' : '#416788')};
  background-color: transparent;
  border-radius: 100px;
  border: none;
  transition: scale 200ms;

  &:hover {
    scale: 1.1;
    box-shadow: inset -1px -1px 2px 2px gray;
  }
`;
