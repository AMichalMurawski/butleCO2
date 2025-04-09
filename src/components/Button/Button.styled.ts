import styled from 'styled-components';

interface ButtonWraper {
  active: true | false;
}

export const ButtonWraper = styled.button<ButtonWraper>`
  padding: 10px;
  color: #f2f3f5;
  background-color: ${({ active }) => (active ? '#ABC4D3' : '#416788')};
  border-radius: 100px;
  border: none;

  &:hover {
    scale: 1.1;
    box-shadow: inset -2px -2px 0 0 gray;
  }
`;
