import styled from "styled-components";

interface NavbarWraperProps {
    $flexDirection: 'row' | 'column';
    $alignItems?: string;
    $gap?: string
}

export const NavbarWraper = styled.nav<NavbarWraperProps>`
    display: flex;
    flex-direction: ${({ $flexDirection }) => $flexDirection};
    gap: ${({ $gap }) => $gap || '1.5rem'};
    align-items: ${({ $alignItems }) => $alignItems || 'null'};
`;