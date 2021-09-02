import React from "react";
import { Button } from '@material-ui/core';
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const ListaReceitas = () => { // import com chaves no router
    
    useProtectedPage()

    return (
        <div>
            <h1>Lista de Receitas</h1>

            <Button variant="contained" color="primary">
                Login
            </Button>

        </div>
    )
}