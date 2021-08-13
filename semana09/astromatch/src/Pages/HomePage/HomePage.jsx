import React from 'react';
import '../../Assets/Styles.css';
import { CardPrincipal } from './StylesHomePage';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { FotoPrincipal } from './StylesHomePage';

export const HomePage = () => {

    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        obterPerfil()
    }, [])

    const obterPerfil = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natan-barbosa-lovelace/person').then((response) => {
            setPerfil(response.data.profile)
        }).catch((error) => {
            console.log(error.response)
        })
    }

    const curtirPerfil = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natan-barbosa-lovelace/person').then((response) => {
            setPerfil(response.data.profile)
        }).catch((error) => {
            console.log(error.response)
        })
    }

    const rejeitarPerfil = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natan-barbosa-lovelace/person').then((response) => {
            setPerfil(response.data.profile)
        }).catch((error) => {
            console.log(error.response)
        })
    }

    return (
        <div>
            <CardPrincipal>

                <span>
                    <div>
                        <strong className='tituloPrincipal'>AstroMatch </strong>
                    </div>
                    <div>
                        {/* <button>Ver Matches</button> */}
                    </div>
                </span>

                <br />

                <FotoPrincipal src={perfil.photo} alt='foto-do-usuario' />

                <br /><br />

                <div>
                    <strong>{perfil.name}, {perfil.age} anos.</strong>
                </div>

                <br />

                <div>{perfil.bio}</div>

                <p>
                    <button onClick={curtirPerfil}> ❤️ </button>
                    <button onClick={rejeitarPerfil}> 👎 </button>
                </p>

            </CardPrincipal>
        </div>
    )
}