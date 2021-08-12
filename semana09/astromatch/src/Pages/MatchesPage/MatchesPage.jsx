import React from 'react';
import { CardDeMatches } from './StylesMatchesPage';
import { MiniCardMatches } from './StylesMatchesPage';

export const MatchesPage = () => {
    return (
        <div>
            <CardDeMatches>

                <MiniCardMatches> Match 01 </MiniCardMatches>
                <MiniCardMatches> Match 01 </MiniCardMatches>
                <MiniCardMatches> Match 01 </MiniCardMatches>
                <MiniCardMatches> Match 01 </MiniCardMatches>

                <hr /><br />

                <button>Limpar Matches</button>
                
            </CardDeMatches>
        </div>
    )
}