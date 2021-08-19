import React from 'react';
import './Styles.css';
import LogoRocket from '../../img/LogoRocket.png';

export const Header = (props) => {

    console.log(props)

    return (
        <div className="header">

            <div className="logo">

                <div id="logo-name">
                    <strong>LabeX</strong>
                </div>

                <div>
                    <img src={LogoRocket} alt='logo-labex' className="logo-img" />
                </div>

            </div>

            <div className="slogan">
                Encontre as melhores viagens espaciais! <br/>
                Saiba mais <a href="https://www.google.com.br" target="_blank" className='about-link'>sobre nós</a>.
            </div> 

        </div>
    )
}