import React from 'react';
import './Styles.css';
import LogoRocket from '../../img/LogoRocket.png';

export const Header = (props) => {

    console.log(props)

    return (
        <div className="header">

            <div className="logo">

                <div id="logo-name">
                    <strong>L A B E X</strong>
                </div>

                <div>
                    <img src={LogoRocket} alt='logo-labex' className="logo-img" />
                </div>

            </div>

            <div className="slogan">
                Encontre as melhores viagens espaciais! <br /> Se preferir, <a href="https://www.linkedin.com/in/natanbenfica/" target="_blank" className='about-link'>clique aqui</a>, <br/> e fale diretamente com o CEO!
            </div>

        </div>
    )
}