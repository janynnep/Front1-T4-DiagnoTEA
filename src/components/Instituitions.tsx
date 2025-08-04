import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

type Institution = {
  id: number;
  title: string;
  state: string;
  infoUrl: string;
};


const institutions: Institution[] = [
  {
    id: 1,
    title: "Associação de Amigos do Autista de Joinville",
    state: "Joinvile - SC",
    infoUrl: "https://amajoinville.org/"
  },
  {
    id: 2,
    title: "Instituto Autismo & Vida",
    state: "Porto Alegre - RS",
    infoUrl: "http://www.autismoevida.org.br"
  },
  {
    id: 3,
    title: "Amais Grupo de Apoio a Pais de Autistas",
    state: "São Carlos - SP",
    infoUrl: "https://www.facebook.com/AmaiSaocarlos"
  },
  {
    id: 4,
    title: "ANDA - Associação Norte Mineira de Apoio ao Autista",
    state: "Monte Carlos - MG",
    infoUrl: "https://montesclaros.org.br/sociedade-civil/anda"
  },
  {
    id: 5,
    title: "Associação Tudo Azul Autismo",
    state: "Brasília - DF",
    infoUrl: "https://www.facebook.com/TudoAzuautismodf"
  },
  {
    id: 6,
    title: "Associação de Familiares e Amigos das Pessoas com Autismo- AFAPA",
    state: "Porto Alegre - RS",
    infoUrl: "https://afapa.com.br/home"
  }
];

const Institutions: React.FC = () => {
  const [search, setSearch] = useState('');


  const filteredInstitutions = institutions.filter(institution => institution.title.toLowerCase().includes(search.toLowerCase())
    );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Buscar instituições..." value={search} onChange={handleSearchChange} />
            <span className="input-group-text">
              <i className="bi bi-search"></i>🔍
            </span>
          </div>
        </div>
      </div>
        <div className="row my-3">
          {filteredInstitutions.length === 0 ? (
            <div className="col-12 text-center">
              <p className="lead">Nenhuma instituição encontrada com esse nome.</p>
            </div>
          ) : (
            <div className="row">
              {filteredInstitutions.map(({ id, title, state, infoUrl }) => (
                <div className="col-md-4 mb-4" key={id}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">Cidade: {state}</p>
                      <a href={infoUrl} className="btn btn-primary" target="_blank">
                        Mais informações
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
    </div>    
    
  );
};


export default Institutions;
