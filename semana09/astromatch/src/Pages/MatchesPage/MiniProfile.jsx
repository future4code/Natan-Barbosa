import React from 'react';
import { CardMiniProfile } from './StylesMatchesPage';
import { PhotoMiniProfile } from './StylesMatchesPage';

export const MiniProfile = () => {
    return (

        <CardMiniProfile>

            <div>
                Nome do Usuário
            </div>

            <div>
                <PhotoMiniProfile src="https://picsum.photos/30/30"></PhotoMiniProfile>
            </div>

        </CardMiniProfile>


    )
}
