import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './FotoPerfil/FotoPerfil.jpeg';
import LogoAgrocontar from './LogoEmpresas/agrocontar.png';
import LogoPatense from './LogoEmpresas/patense.png';
import LogoBancoDaGente from './LogoEmpresas/banco-da-gente.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2> Dados pessoais </h2>
        <CardGrande
          imagem={FotoPerfil}
          nome="Natan Benfica Barbosa"
          descricao="Oi, meu nome é Natan, sou aluno do curso de desenvolvimento Web Full-Stack da Labenu, turma Lovelace. Sempre gostei muito de tecnologia e estou em transição de carreira para atuar nessa área."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={LogoAgrocontar}
          nome="Agrocontar - Consultoria Contábil"
          descricao="Assistente Contábil-Fiscal"
        />

        <CardGrande
          imagem={LogoPatense}
          nome="Patense - Indústria de Rendering"
          descricao="Assistente Financeiro."
        />

        <CardGrande
          imagem={LogoBancoDaGente}
          nome="Banco da Gente - Agência de Microcrédito"
          descricao="Assistente Administrativo."
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
