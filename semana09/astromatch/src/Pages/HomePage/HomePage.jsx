import React from 'react';
import '../../Assets/Styles.css';
import { CardPrincipal } from './StylesHomePage';

export const HomePage = () => {

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

                <img src='https://picsum.photos/330/350' alt='foto-do-usuario' />

                <br /><br />

                <div>
                    <strong>USUARIO</strong>
                </div>

                <br />

                <div>Descrição do usuário ...</div>

                <p>
                    <button> ❤️ </button>
                    <button> 👎 </button>
                </p>

            </CardPrincipal>
        </div>
    )
}