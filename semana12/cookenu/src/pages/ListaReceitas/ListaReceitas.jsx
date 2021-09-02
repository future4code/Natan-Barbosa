import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const ListaReceitas = () => { // import com chaves no router
    
    useProtectedPage()

    return (
        <div>
            <h1>Lista de Receitas</h1>
        </div>
    )
}