import styled from "styled-components";
import { Link } from "../../styles";

export const ContactsWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
`;

export const LinkWraper = styled(Link)`
  width: max-content;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;