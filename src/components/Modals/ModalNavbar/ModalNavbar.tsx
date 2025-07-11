import React, { useEffect } from "react";
import { IconWraper, ScaleConteiner, NavbarWraper } from "./ModalNavbar.styled";
import { Contacts, IconSvg, LogoIcon, Navbar } from "../../";
import { useTheme } from "styled-components";

interface ModalNavbarProps {
    visible?: boolean;
    onClick: () => void;
}

const ModalNavbar: React.FC<ModalNavbarProps> = ({ visible = false, onClick }) => {
    const theme = useTheme();

    useEffect(() => {
        if (visible) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
    
        return () => {
          document.body.style.overflow = '';
        };
    }, [visible]);
    
    return <NavbarWraper $visible={visible}>
        <IconWraper>
            <IconSvg name='cross' size="100%" fill={theme.color.text} onClick={onClick}/>
      </IconWraper>
      <ScaleConteiner>
        <LogoIcon dimension="3rem"/>
        <Navbar flexDirection='column' alignItems="start" buttonClick={onClick}/>
        <Contacts />
      </ScaleConteiner>
    </NavbarWraper>
}

export default ModalNavbar