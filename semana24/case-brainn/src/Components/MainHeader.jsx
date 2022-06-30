import React from "react";
import {
    HeaderArea,
    MsButton,
    QuinaButton,
    LfButton,
    LmButton,
    DdsButton,
    TmButton
} from "./styled";
import { useNavigate } from "react-router";

const MainHeader = () => {

    const navigateTo = useNavigate()

    return (
        <HeaderArea>
            <MsButton onClick={() => navigateTo("/")}>Mega-Sena</MsButton>
            <QuinaButton onClick={() => navigateTo("/quina")}>Quina</QuinaButton>
            <LfButton onClick={() => navigateTo("/lotofacil")}>Lotofácil</LfButton>
            <LmButton onClick={() => navigateTo("/lotomania")}>Lotomania</LmButton>
            <DdsButton onClick={() => navigateTo("/dia-de-sorte")}>Dia de Sorte</DdsButton>
            <TmButton onClick={() => navigateTo("/timemania")}>Timemania</TmButton>
        </HeaderArea>
    )
}

export default MainHeader