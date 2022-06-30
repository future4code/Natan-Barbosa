import React from "react";

const App = () => {
  return (
    <div>

      <form method="POST" action="http://localhost:3003/new-payment" target="_blank">
        
        <label for="buyerName">Nome completo:</label><br />
        <input type="text" name="buyerName" id="buyerName" placeholder='Ex: "Augusta Ada Byron King"' required
        /><br />

        <label for="buyerEmail">Email:</label><br />
        <input type="email" name="buyerEmail" id="buyerEmail" placeholder='Ex: adalovelace@uol.com.br' required/> <br />

        <label for="buyerCPF">CPF (somente números!):</label><br />
        <input type="text" name="buyerCPF" id="buyerCPF" placeholder='Ex: "11122233344"' minLength="11" maxLength="11" required
        /><br />

        <label for="pmtAmount">Valor total:</label><br />
        <input
          type="number"
          name="pmtAmount"
          id="pmtAmount"
          placeholder='Ex: "199.90" ou "199"'
          required
        /><br /><br />

        <input
          type="radio"
          value="Débito"
          name="pmtType"
          id="cartao-debito"
        />
        <label for="pmtType">Cartão - Débito</label><br />

        <input
          type="radio"
          value="Crédito Parc. 1x"
          name="pmtType"
          id="cartao-credito-1x"
        />
        <label for="pmtType">Cartão - Crédito 1x</label><br />

        <input
          type="radio"
          value="Crédito Parc. 2x"
          name="pmtType"
          id="cartao-credito-2x"
        />
        <label for="pmtType">Cartão - Crédito 2x</label><br />

        <input
          type="radio"
          value="Crédito Parc. 3x"
          name="pmtType"
          id="cartao-credito-3x"
        />
        <label for="pmtType">Cartão - Crédito 3x</label><br />

        <input
          type="radio"
          value="Boleto 7 dias"
          name="pmtType"
          id="boleto-7-dias"
        />
        <label for="pmtType">Boleto 7 Dias</label><br />

        <input
          type="radio"
          value="Boleto 14 dias"
          name="pmtType"
          id="boleto-14-dias"
        />
        <label for="pmtType">Boleto 14 Dias</label><br /><br />

        <label for="cardHolderName">Nome impresso:</label><br />
        <input
          type="text"
          name="cardHolderName"
          id="cardHolderName"
          placeholder='Ex: "AUGUSTA A B KING"'
        /><br /><br />

        <label for="cardNumber">Número:</label><br />
        <input
          type="text"
          name="cardNumber"
          id="cardNumber"
          placeholder='Ex: "1111222233334444"'
          minLength="16"
          maxLength="16"
        /><br /><br />

        <label for="cardExpDate">Data de expiração:</label><br />
        <input
          type="date"
          name="cardExpDate"
          id="cardExpDate"
        /><br /><br />

        <label for="cardCVV" title="Sequência de 3 números. Geralmente aparece no verso do cartão">CVV:</label><br />
        <input
          type="text"
          name="cardCVV"
          id="cardCVV"
          placeholder='Ex: "999"'
          minLength="3"
          maxLength="3"
        />

        <br /><br />
        <button action="submit">Enviar</button>

      </form>

    </div>
  );
}

export default App;