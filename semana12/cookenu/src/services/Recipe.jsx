import axios from 'axios';
import { BaseUrl } from '../constants/Urls'

export const criarReceita = (body, clear, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BaseUrl}/recipe`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((response) => {
            alert(response.data.message)
            setIsLoading(false)
            clear()
            
        })
        .catch((error) => {
            alert(error.data.message)
            console.log(error)
            setIsLoading(false)
        })
}