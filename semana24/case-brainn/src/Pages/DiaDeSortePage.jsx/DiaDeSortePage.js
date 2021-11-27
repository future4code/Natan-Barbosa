import React from "react";
import "./stylesheet.css"

export const DiaDeSortePage = () => {
    return (
        <div className="content">
            
            <div className="visualizar">
                <select>
                    <option>Mega-Sena</option>
                    <option>Lotofacil</option>
                    <option>Lotomania</option>
                    <option>Quina</option>
                    <option>Timemania</option>
                    <option>Dia de Sorte</option>
                </select>
            </div>

            <div>Mega-Sena</div>      
            
            <div className="visualizar">
                <li>31</li>
                <li>32</li>
                <li>39</li>
                <li>42</li>
                <li>43</li>
                <li>51</li>
            </div>
        
            <div className="visualizar">
                <h4>Concurso</h4>
                <div>2359 - 21/11/2021</div>
            </div>

            <div className="visualizar">Este sorteio é meramente ilustrativo e não possui nenhuma ligação com Caixa Econômica Federal</div>

        </div>
    )
}