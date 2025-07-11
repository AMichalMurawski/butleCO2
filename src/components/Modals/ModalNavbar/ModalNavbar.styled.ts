import styled from "styled-components";

interface NavbarWraperProps {
    $visible: boolean;
}

export const NavbarWraper = styled.div<NavbarWraperProps>`
    position: fixed;
    top: 0;
    right: ${({ $visible }) => $visible ? 0 : '-105%'};
    width: 100%;
    height: 100%;
    padding: 8rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${({theme}) => theme.color.structural};
    scroll: false;
    z-index: 990;
    ${({ theme }) => theme.css.transition('right')}
    
    ${({ theme }) => theme.media.d} {
        right: -105%;
    }
`

export const IconWraper = styled.div`
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    top: 2.5rem;
    right: 2rem;
    cursor: pointer;
    ${({ theme }) => theme.css.transition('scale')}
    
    &:hover {
        scale: 1.2;
    }
`

export const ScaleConteiner = styled.div`
    translate: 25%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    scale: 1.5;
`