import styled from "styled-components";
import tw from "twin.macro";
import { Slide as Menu } from 'react-burger-menu'
import { useMediaQuery } from 'react-responsive'
import { SCREENS } from "../responsive";
import { Drawer } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `}
`
const MobileContainer = styled.ul`
   height: 100%;
   ${tw`
        list-none
        p-4
        text-center
        justify-center
        
        `}
`

const NavItem = styled.li`
    ${tw`
        text-base
        text-black
        font-medium
        py-3
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `}
`
export function NavItems(){
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
    const [menuOpen, setMenuOpen] = useState(false);

    if(isMobile)
    return(
        <>
        <Drawer anchor='top'  open={menuOpen} onClose={() => setMenuOpen(false)}>

            <MobileContainer>
                <NavItem>
                    <a href="#">Home</a>
                </NavItem>
                <NavItem>
                    <a href="#">Cars</a>
                </NavItem>
                <NavItem>
                    <a href="#">Services</a>
                </NavItem>
                <NavItem>
                    <a href="#">Contact Us</a>
                </NavItem>
            </MobileContainer>
            <IconButton className="text-black" aria-label="menu-button" onClick={() => setMenuOpen(false)} >
            <CloseIcon />
        </IconButton>
        </Drawer>
        <IconButton className="text-black" aria-label="menu-button" onClick={() => setMenuOpen(true)} >
            <MenuIcon />
        </IconButton>
        </>
        
        
    )

    return (
    <ListContainer>
        <NavItem>
            <a href="#">Home</a>
        </NavItem>
        <NavItem>
            <a href="#">Cars</a>
        </NavItem>
        <NavItem>
            <a href="#">Services</a>
        </NavItem>
        <NavItem>
            <a href="#">Contact Us</a>
        </NavItem>
    </ListContainer>
    )
}