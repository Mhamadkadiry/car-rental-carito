import styled from "styled-components";
import tw from 'twin.macro'

import CarLogoImg from '../../../assets/images/logo.png';

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
`
const LogoText = styled.div`
margin-left: -15px;
    ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    `}
`
const Image = styled.div`
    width: auto;
    ${tw`h-12 md:h-16`}
    img{
        width: auto;
        height: 100%;
    }
`

export function Logo(){
    return <LogoContainer>
        <Image>
            <img src={CarLogoImg} alt="Logo" />
        </Image>
        <LogoText>Carito</LogoText>
    </LogoContainer>
}