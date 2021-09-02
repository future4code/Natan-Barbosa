import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const AdicionarReceita = () => {
    useProtectedPage()
    return(
        <div>
            <h1>Adicionar Receita</h1>
        </div>
    )
}

export default AdicionarReceita // import sem chaves no router