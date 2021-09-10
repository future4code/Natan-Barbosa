import React from "react";
import axios from "axios";
import { BaseUrl } from "../constants/Urls";
import { irParaLista } from "../router/Coordinator";

export const login = (body, clear, history, setRightButton, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BaseUrl}/user/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            irParaLista(history)
            setRightButton("Logout")
            clear()
            setIsLoading(false)

        })
        .catch((error) => {
            alert(error.response.data.message)
            console.log(error.response.data.message)
            setIsLoading(false)
        })
}

export const signUp = (body, clear, history, setRightButton, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BaseUrl}/user/signup`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            irParaLista(history)
            setRightButton("Logout")
            setIsLoading(false)
        })
        .catch((error) => {
            console.log(error.response.data.message)
            setIsLoading(false)
        })
}