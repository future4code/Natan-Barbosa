import React from "react";
import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { irParaLogin } from "../router/Coordinator";

export const useProtectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            irParaLogin(history)
        }
    }, [history])
}

// useEffect executa a linha de comando de maneira sincrona enquanto o 
// useLayoutEffect executa de maneira assincrona (uma sentença de cada vez)