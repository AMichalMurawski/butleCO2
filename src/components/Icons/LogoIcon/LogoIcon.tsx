import React from "react";
import { Bond, CarbonAtom, LogoWraper, Molecule, MoleculeWraper, OxygenAtom } from "./LogoIcon.styled";

interface LogoIconProps {
    dimension: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ dimension }) => {
    const rotations = [45, 165, 285]

    return <LogoWraper $dimension={dimension}>
        {rotations.map((rotation: number, index: number) =>
            <MoleculeWraper key={index} $rotation={rotation}>
                <Molecule>
                    <OxygenAtom $side='left' />
                    <Bond $side='left' />
                    <CarbonAtom />
                    <Bond $side='right' />
                    <OxygenAtom $side='right' />
                </Molecule>
            </MoleculeWraper>)}
    </LogoWraper>
};

export default LogoIcon