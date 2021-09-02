import React from "react";
import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { irParaLista } from "../router/Coordinator";

export const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            irParaLista(history)
        }
    }, [history])
}