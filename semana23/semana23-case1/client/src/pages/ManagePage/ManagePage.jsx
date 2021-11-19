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

            <FormArea action="http://localhost:4000/new-register" method="POST" target="_blank">

                <div>Categoria</div>
                <input type="radio" name="category" value="export" />
                <label for="category">Exportação</label>
                <br />
                <input type="radio" name="category" value="import" />
                <label for="category">Importação</label>

                <br /> <br />

                <label for="client">Cliente: </label>
                <select name="client" id="client">
                    <option value="">Selecionar...</option>
                    <option value="AZ COMMODITIES SA">AZ Commodities S.A.</option>
                    <option value="LINN HANG LLC">Linn Hang LLC</option>
                    <option value="PETRONORTH INC">Petronorth Inc.</option>
                    <option value="PSALT INDUSTRIES LTD">PSalt Industries Ltd.</option>
                </select>

                <br /> <br />

                <label for="transporter">Transportadora: </label>
                <select name="transporter" id="transporter">
                    <option value="">Selecionar...</option>
                    <option value="ALPHA SHIPPING CORP">Alpha Shipping Corp.</option>
                    <option value="AMERICAN MARINE LLC">American Marine LLC</option>
                    <option value="EXPO PORTO LTDA">Expo Porto LTDA</option>
                </select>

                <br /> <br />

                <label for="country">País de Destino: </label>
                <select name="country" id="country">
                    <option value="">Selecionar...</option>
                    <option value="BRAZIL">Brasil</option>
                    <option value="CHINA">China</option>
                    <option value="FRANCE">França</option>
                    <option value="PORTUGAL">Portugal</option>
                    <option value="SOUTH AFRICA">África do Sul</option>
                    <option value="SPAIN">Espanha</option>
                    <option value="USA">Estados Unidos</option>
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

                <label for="operation">Tipo de Operação</label>
                <select name="operation" id="operation">
                    <option value="">Selecionar...</option>
                    <option value="boarding">Embarque</option>
                    <option value="discharge">Descarga</option>
                    <option value="gate-in">Gate In</option>
                    <option value="gate-out">Gate Out</option>
                    <option value="weighing">Pesagem</option>
                    <option value="repositioning">Reposicionamento</option>
                    <option value="scanner">Scanner</option>
                </select>

                <br /> <br />

                <div>Início da Operação</div>

                <label for="dateInitial">Data</label>
                <input
                    type="date"
                    name="dateInitial"
                    id="dateInitial"
                />
                <br />

                <label for="hourInitial">Horário</label>
                <input
                    type="time"
                    name="hourInitial"
                    id="hourInitial"
                />

                <br /> <br />

                <div>Fim da Operação</div>

                <label for="dateFinish">Data</label>
                <input
                    type="date"
                    name="dateFinish"
                    id="dateFinish"
                />
                <br />

                <label for="hourFinish">Horário</label>
                <input
                    type="time"
                    name="hourFinish"
                    id="hourFinish"
                />

                <br /> <br />

                <button action="submit">Enviar</button>

            </FormArea>

        </div>
    )
}

export default ManagePage