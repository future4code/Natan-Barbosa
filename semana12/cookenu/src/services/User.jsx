import React from "react";
import axios from "axios";
import { BaseUrl } from "../constants/Urls";
import { irParaLista } from "../router/Coordinator";

export const login = (body, clear, history) => {
    axios.post(`${BaseUrl}/user/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            irParaLista(history)
            clear()

        })
        .catch((error) => {
            alert("Erro de login. Verifique seu e-mail e senha.")
            console.log(error)
        })
}

export const signUp = (body, clear, history) => {
    axios.post(`${BaseUrl}/user/signup`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            irParaLista(history)
        })
        .catch((error) => {
            alert("Erro ao tentar cadastrar. Tente novamente mais tarde.")
            console.log(error)
        })
}