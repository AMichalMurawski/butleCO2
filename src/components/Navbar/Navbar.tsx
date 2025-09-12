import React from "react";
import { Button } from "../";
import { useIdSection } from "../../context/Section/IdSectionContext";
import { NavbarWraper } from "./Navbar.styled";

const navbarList = [
    ['O firmie', '/#oFirmie'],
    ['Dlaczego My?', '/#dlaczegoMy'],
    ['Kontakt', '/#kontakt'],
    ['Oferta', '/#oferta'],
    ['Zamówienia', '/zamowienia#zamowienia'],
];
  
interface NavbarProps {
    flexDirection: 'row' | 'column';
    alignItems?: string;
    gap?: string;
    buttonClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({flexDirection = 'row', alignItems, gap, buttonClick}) => {
    const { activeIdSection, scrollToSection } = useIdSection();
    
    return (
        <NavbarWraper $flexDirection={flexDirection} $alignItems={alignItems} $gap={gap}>
            {navbarList.map(option => (
                <Button
                    key={option[1]}
                    type="button"
                    text={option[0]}
                    active={activeIdSection === option[1]}
                    onClick={() => {
                        scrollToSection(option[1]);
                        buttonClick?.();
                    }}
                />
            ))}
        </NavbarWraper>
    );
};

export default Navbar;