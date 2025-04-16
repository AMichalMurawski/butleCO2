import styled from 'styled-components';
import { H2, P, Section } from '../../styles/Global.styled';

export const ContactSection = styled(Section)`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const Title = styled(H2)``

export const ContactsWraper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: space-around;
`

export const AddressWraper = styled.address`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const Address = styled(P)``

export const AddressLink = styled.a``

export const WorkHoursConteiner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const WorkHours = styled(P)``

export const FormWraper = styled.div``