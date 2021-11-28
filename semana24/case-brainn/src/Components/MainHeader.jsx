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

const MainHeader = () => {
    return (
        <HeaderArea>
            <MsButton>Mega-Sena</MsButton>
            <QuinaButton>Quina</QuinaButton>
            <LfButton>Lotofácil</LfButton>
            <LmButton>Lotomania</LmButton>
            <DdsButton>Dia de Sorte</DdsButton>
            <TmButton>Timemania</TmButton>
        </HeaderArea>
    )
}

export default MainHeader