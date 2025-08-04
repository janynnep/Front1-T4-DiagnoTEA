import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Form from './components/Form';
import Institutions from './components/Instituitions';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <nav className={`navbar navbar-expand-lg fixed-top ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`} >
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="src/img/favicon.ico" className="img-fluid img-quadrada me-1 w-25" />DiagnoTEA</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">Sobre o Projeto</a></li>
              <li className="nav-item"><a className="nav-link" href="#objectives">Objetivos</a></li>
              <li className="nav-item"><a className="nav-link" href="#form">Questionário AQ-10</a></li>
              <li className="nav-item"><a className="nav-link" href="#institutions">Instituições</a></li>
              <li className="nav-item"><a className="nav-link" href="#schedule">Cronograma</a></li>
              <li className="nav-item"><a className="nav-link" href="#team">Equipe</a></li>
              <li className="nav-item">
                <button className="btn btn-outline-primary ms-3" onClick={toggleTheme}>Alternar Tema</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   
    
    
      <section id="about" className="container pt-5">
        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col-md-2 text-center pe-1">
              <img src="src/img/logo.png" alt="Logo" className="img-fluid img-quadrada" />
            </div>
          <div className="col-md-10">
            <h1 className="display-2">DiagnoTEA</h1>
            <p className="h4">
              Plataforma de Diagnóstico Preliminar de Transtorno do Espectro Autista usando Redes Neurais Artificiais
            </p>
          </div>
          <div className="mt-3">O DiagnoTEA é um sistema web para auxiliar na triagem preliminar de indivíduos com possível Transtorno do Espectro Autista (TEA) por meio de um modelo de rede neural artificial do tipo Multilayer Perceptron (MLP), treinado a partir da base de dados extraída do portal UCI Machine Learning Repository, composta por respostas ao questionário AQ-10. O sistema visa democratizar o acesso à triagem, permitindo que responsáveis ou profissionais da saúde possam aplicar o questionário digitalmente e receber um retorno imediato.</div>
          </div>
        </div>        
      
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-danger">
                <div className="card-body">
                  <h5 className="card-title text-center">Questionário AQ-10</h5>
                  <p className="card-text">
                    Método preliminar utilizado por profissionais da saúde para avalidar o paciente durante o diagnóstico de TEA, é composto por 10 perguntas rápidas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-primary">
                <div className="card-body">
                  <h5 className="card-title text-center">Redes Neurais Artificiais</h5>
                  <p className="card-text">
                    Ferramenta que analisa as respostas do AQ-10 de forma a ajudar no diagnóstico e melhora da qualidade de vida.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-warning">
                <div className="card-body">
                  <h5 className="card-title text-center">Diagnóstico Preliminar</h5>
                  <p className="card-text">
                    O diagnóstico é de carater preliminar, sendo recomendável a busca por especilistas para ter o diagnóstico completo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="objectives" className="container pt-5">
        <div className="mt-3">
          <h2 className="mb-3">Objetivos</h2>
          <p>Desenvolver um sistema web capaz de realizar diagnostico preliminar para o Transtorno do Espectro Autista (TEA), utilizando um modelo de rede neural artifical treinado com dados do questionário AQ-10.</p>
        </div>
        <div className="mt-3">
          <h4 className="mb-3">Objetivos Específicos</h4>
          <ul className="list-group">
            <li className="list-group-item text-justify">
              Realizar levantamento e coleta de dados confiáveis para compor a base de treinamento do modelo, com foco nos dados do questionário AQ-10.
            </li>
            <li className="list-group-item text-justify">
              Projetar, implementar e treinar uma rede neural artificial do tipo Multilayer Perceptron (MLP) com os dados tratados.
            </li>
            <li className="list-group-item text-justify">
              Validar o modelo treinado utilizando métricas como acurácia, f1-score, precisão e recall, além de validação cruzada k-fold.
            </li>
            <li className="list-group-item text-justify">
              Desenvolver a plataforma web integrada ao modelo de IA utilizando frameworks modernos para front-end e back-end.
            </li>
            <li className="list-group-item text-justify">
              Promover testes da plataforma com usuários da comunidade (familiares, professores, profissionais da saúde) para validar a usabilidade e eficácia do sistema em ambiente real.
            </li>
          </ul>
        </div>
      </section>

      <section id="form" className="container pt-5">
        <h2 className="mt-3">Questionário AQ-10</h2>
        <div className="mt-3"><p>O questionário AQ-10 (<i>Autism Spectrum Quotient</i>) é composto por 10 perguntas breves e projetado para ajudar na avaliação preliminar do Transtorno do Espectro Autista (TEA). É utilizado por profissionais da saúde antes da realização exames específicos para o diagnóstico de TEA.</p></div>
        <div className="card border-0 mt-3"> 
          <Form />            
        </div>       
      </section>

      <section id="institutions" className="container pt-5">
        <div className="card border-0 mt-3">
        <h4 className="mb-4">Instituições e Associações de apoio ao TEA no Brasil </h4>
        <Institutions />
        </div>
      </section>

      <section id="schedule" className="container pt-5">
        <h2 className="mt-3">Cronograma</h2>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light text-center">
              <tr>
                <th rowSpan={2}>Atividades</th>
                <th colSpan={7}>2025</th>
                <th colSpan={3}>2026</th>
              </tr>
              <tr>
                <th>Jun</th><th>Jul</th><th>Ago</th><th>Set</th><th>Out</th><th>Nov</th><th>Dez</th><th>Jan</th><th>Fev</th><th>Mar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Levantamento Bibliográfico</td>
                <td className="bg-success text-white text-center">✔️</td><td className="bg-success text-white text-center">✔️</td><td className="bg-success text-white text-center"></td><td className="bg-success text-white text-center"></td><td className="bg-success text-white"></td><td className="bg-success text-white"></td><td className="bg-success text-white"></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Coleta e preparação da base de dados</td>
                <td></td><td className="bg-success text-white text-center">✔️</td><td className="bg-success text-white text-center"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Criação e treinamento incial do modelo MLP</td>
                <td></td><td></td><td className="bg-success text-white text-center"></td><td className="bg-success text-white text-center"></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Testes comparativos com outras IAs</td>
                <td></td><td></td><td className="bg-success text-white text-center"></td><td className="bg-success text-white text-center"></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Desenvolvimento da plataforma web</td>
                <td></td><td></td><td></td><td className="bg-success text-white text-center"></td><td className="bg-success text-white text-center"></td><td className="bg-success text-white text-center"></td><td className="bg-success text-white text-center"></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Integração do modelo ao sistema e testes internos</td>
                <td></td><td></td><td></td><td></td><td></td><td className="bg-success text-white text-center"></td><td className="bg-success text-white text-center"></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Validação com usuários reais e ajustes</td>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td className="bg-success text-white text-center"></td><td className="bg-success text-white text-center"></td><td></td>
              </tr>
              <tr>
                <td>Escrita do TCC com resultados finais</td>
                <td></td><td></td><td></td><td></td><td></td><td className="bg-success text-white text-center"></td><td className="bg-success text-white text-center"></td><td className="bg-success text-white text-center"></td><td className="bg-success text-white text-center"></td><td className="bg-success text-white text-center"></td>
              </tr>
              <tr>
                <td>Apresentação e defesa do TCC</td>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td className="bg-success text-white text-center"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="team" className="container pt-5">
        <h2 className="mb-3">Equipe</h2>
        <p>Aluna: Janynne Palheta</p>
        <p>Orientador: Mauricio Archanjo</p>
      </section>

      <footer className={`text-center p-2 mt-4 border-top ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}>
        DiagnoTEA © {new Date().getFullYear()} - Todos os direitos reservados <br /> 
        Curso de Desenvolvimento Web e Mobile - IFSudesteMG <br /> 
        Turma 2025.1 <br /> 
      </footer>
    </div>
    
  );
};

export default App;