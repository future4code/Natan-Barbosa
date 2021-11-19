import React from "react"
import { Link } from "react-router-dom"

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

            <form>

                <div>Categoria</div>
                <input type="radio" name="category" value="export" />
                <label>Exportação</label>
                <br />
                <input type="radio" name="category" value="import" />
                <label>Importação</label>

                <br /> <br />

                <div>Cliente</div>
                <select name="client">
                    <option value="">Selecionar...</option>
                    <option value="AZ COMMODITIES SA">AZ Commodities S.A.</option>
                    <option value="LINN HANG LLC">Linn Hang LLC</option>
                    <option value="PETRONORTH INC">Petronorth Inc.</option>
                    <option value="PSALT INDUSTRIES LTD">PSalt Industries Ltd.</option>
                </select>

                <br /> <br />

                <div>Transportadora</div>
                <select name="transporter">
                    <option value="">Selecionar...</option>
                    <option value="ALPHA SHIPPING CORP">Alpha Shipping Corp.</option>
                    <option value="AMERICAN MARINE LLC">American Marine LLC</option>
                    <option value="EXPO PORTO LTDA">Expo Porto LTDA</option>
                </select>

                <br /> <br />

                <div>País de Destino</div>
                <select name="country">
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

                <div>Tipo de Contêiner</div>
                <input type="radio" name="conteiner-type" value="20" />
                <label> 20 Pés </label>
                <br />
                <input type="radio" name="conteiner-type" value="40" />
                <label> 40 Pés </label>
                <br />

                <br /> <br />

                <div>Status do Contêiner</div>
                <input type="radio" name="conteiner-status" value="full" />
                <label> Cheio </label>
                <br />
                <input type="radio" name="conteiner-type" value="empty" />
                <label> Vazio </label>
                <br />

                <br /> <br />

                <label>Tipo de Operação</label>
                <input type="text" />
                <br />

                <label>Data de Início</label>
                <input type="date" />
                <br />

                <label>Horário de Início</label>
                <input type="time" />
                <br />

                <label>Data Final</label>
                <input type="date" />
                <br />

                <label>Horário Final</label>
                <input type="time" />
                <br />

                <button>Enviar</button>

            </form>

        </div>
    )
}

export default ManagePage