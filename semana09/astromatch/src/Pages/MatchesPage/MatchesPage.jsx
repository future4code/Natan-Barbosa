import React from 'react';
import { CardDeMatches } from './StylesMatchesPage';
import { MiniProfile } from './MiniProfile';

export const MatchesPage = () => {
    return (
        <div>
            <CardDeMatches>

                <MiniProfile />
                <MiniProfile />
                <MiniProfile />
                <MiniProfile />
                <MiniProfile />

                <br /> <br /> <br /> <br />

                <hr />                

                <button>Limpar Matches</button>
                
            </CardDeMatches>
        </div>
    )
}