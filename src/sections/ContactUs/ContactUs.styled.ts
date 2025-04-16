import styled from 'styled-components';
import { H2, P, Section } from '../../styles/Global.styled';

export const ContactSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled(H2)``;

export const ContactsWraper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: repeat(3, auto);
  gap: 30px;
`;

export const AddressWraper = styled.address`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Address = styled(P)``;

export const AddressLink = styled.a``;

export const WorkHoursConteiner = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const WorkHours = styled(P)``;

export const FormWraper = styled.div`
  grid-column: 2;
  grid-row: 1 / 3;
`;

export const MapWraper = styled.div`
  grid-column: 1 / 3;
  grid-row: 3;
`;
