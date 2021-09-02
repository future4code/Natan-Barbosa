import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const DetalhesReceita = () => { // import com chaves no router
    useProtectedPage()
    return(
        <div>
            <h1>Detalhes da Receita</h1>
        </div>
    )
}