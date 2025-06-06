import styled from "styled-components";

interface LogoWraperProps {
    $dimension: string;
}

export const LogoWraper = styled.div<LogoWraperProps>`
    position: relative;
    width: ${({$dimension}) => $dimension};
    height: ${({ $dimension }) => $dimension};
    rotate: 0deg;

    transition: rotate cubic-bezier(0, -0.5, 1, -0.5) 500ms;
    &:hover {
        rotate: 360deg;
    }
`

interface MoleculeWraperProps {
    $rotation: number;
}

export const MoleculeWraper = styled.div<MoleculeWraperProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    transform-origin: top left;
    rotate: ${({ $rotation }) => $rotation}deg;
`

export const Molecule = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: 120%;
    transform-origin: center;
    translate: -50% -50%;
    rotate: 45deg;
`

export const CarbonAtom = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: 40%;
    height: 40%;
    translate: 0 -50%;
    border-radius: 1000px;
    background-color: brown;
`

interface AtomProps {
    $side: 'left' | 'right';
}

export const OxygenAtom = styled.div<AtomProps>`
    position: absolute;
    top: ${({$side}) => $side === 'left' ? '30%' : '80%'};
    left: 60%;
    width: 30%;
    height: 30%;
    translate: 0 -65%;
    border-radius: 1000px;
    background-color: lightblue;
`

export const Bond = styled.div<AtomProps>`
    position: absolute;
    width: 5%;
    height: 15%;
    top: ${({$side}) => $side === 'left' ? '35%' : '65%'};
    left: 49%;
    translate: -50% -50%;
    transform-origin: center;
    rotate: ${({$side}) => $side === 'left' ? '65deg' : '115deg'};
    background-color: white;
`
