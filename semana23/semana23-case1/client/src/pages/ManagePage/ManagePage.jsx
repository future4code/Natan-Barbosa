import React from "react"
import { Link } from "react-router-dom"
import { FormArea } from "./styled.jsx"

const ManagePage = () => {
    return (
        <div>
            <div>
                <h1>Sistema Im-Ex Porto</h1>
                <h3>Módulo MCONT221121 - Gerenciamento de Contêiners</h3>
            </div>

            <hr />

            <div>
                <button>
                    <Link to="/" >Voltar</ Link>
                </button>
            </div>

            <br />

            <div>

                <FormArea action="http://localhost:4000/new-register" method="POST" target="_blank">

                    <label for="client">Cliente: </label>
                    <select name="client">
                        <option value="">Selecionar...</option>
                        <option value="AZ Commodities S.A.">AZ Commodities S.A.</option>
                        <option value="Linn Hang LLC">Linn Hang LLC</option>
                        <option value="Petronorth Inc.">Petronorth Inc.</option>
                        <option value="PSalt Industries Ltd.">PSalt Industries Ltd.</option>
                    </select>

                    <br /> <br />

                    <label for="transporter">Transportadora: </label>
                    <select name="transporter">
                        <option value="">Selecionar...</option>
                        <option value="Alpha Shipping Corp.">Alpha Shipping Corp.</option>
                        <option value="American Marine LLC">American Marine LLC</option>
                        <option value="Expo Porto LTDA">Expo Porto LTDA</option>
                    </select>

                    <br /> <br />

                    <label for="totalCargoValue">Valor Total da Carga</label>
                    <input type="number" placeholder="Ex: 30000" name="totalCargoValue" />

                    <br /> <br />

                    <label for="country">País de Destino: </label>
                    <select name="country" id="country">
                        <option value="">Selecionar...</option>
                        <option value="Africa do Sul">África do Sul</option>
                        <option value="Brasil">Brasil</option>
                        <option value="China">China</option>
                        <option value="Franca">França</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Espanha">Espanha</option>
                        <option value="Estados Unidos">Estados Unidos</option>
                    </select>

                    <br /> <br />

                    <div>
                        <label for="conteinerType">Tipo de Contêiner</label>
                    </div>
                    <input
                        type="radio"
                        name="conteinerType"
                        value="20"
                        id="conteinerType-20"
                    />
                    <label for="conteinerType"> 20 Pés </label>
                    <br />
                    <input
                        type="radio"
                        name="conteinerType"
                        value="40"
                        id="conteinerType-40"
                    />
                    <label for="conteinerType"> 40 Pés </label>

                    <br /> <br />

                    <div>Status do Contêiner</div>
                    <input type="radio" name="conteinerStatus" value="full" />
                    <label for="conteinerStatus"> Cheio </label>
                    <br />
                    <input type="radio" name="conteinerStatus" value="empty" />
                    <label for="conteinerStatus"> Vazio </label>

                    <br /> <br />

                    <div>Finalidade</div>
                    <input type="radio" name="finality" value="export" />
                    <label for="finality">Exportação</label>
                    <br />
                    <input type="radio" name="finality" value="import" />
                    <label for="finality">Importação</label>

                    <br /> <br />

                    <label for="operation">Fase da Operação</label>
                    <select name="operation" id="operation">
                        <option value="">Selecionar...</option>
                        <option value="embarque">Embarque</option>
                        <option value="descarga">Descarga</option>
                        <option value="gate-in">Gate In</option>
                        <option value="gate-out">Gate Out</option>
                        <option value="pesagem">Pesagem</option>
                        <option value="reposicionamento">Reposicionamento</option>
                        <option value="scanner">Scanner</option>
                    </select>

                    <br /> <br />

                    <div>Início da Operação</div>

                    <label for="dateInitial">Data</label>
                    <input
                        type="date"
                        name="dateInitial"
                    />

                    <br /> <br />

                    <div>Conclusão Prevista</div>

                    <label for="dateFinish">Data</label>
                    <input
                        type="date"
                        name="dateFinish"
                    />
                    <br />

                    <br /> <br />

                    <button action="submit">Enviar</button>

                </FormArea>

            </div>

        </div>
    )
}

export default ManagePage