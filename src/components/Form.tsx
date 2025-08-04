import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';


const questions = [
  "1. Muitas vezes percebo pequenos sons quando outras pessoas não.",
  "2. Costumo concentrar-me mais no todo do que nos pequenos detalhes.",
  "3. Acho fácil fazer mais de uma coisa ao mesmo tempo.",
  "4. Se houver uma interrupção, posso voltar ao que estava fazendo muito rapidamente.",
  "5. Acho fácil 'ler nas entrelinhas' quando alguém está falando comigo.",
  "6. Eu consigo perceber se alguém que está me ouvindo está ficando entediado.",
  "7. Quando estou lendo uma história, acho difícil entender as intenções dos personagens.",
  "8. Gosto de coletar informações sobre categorias de coisas (por exemplo, tipos de carros, tipos de pássaros, tipos de trem e tipos de plantas).",
  "9. Acho que é fácil perceber o que alguém está a pensar ou a sentir apenas olhando para o seu rosto.",
  "10. Acho difícil entender as intenções das pessoas."
];
 
const options = [
  "Discordo totalmente",
  "Discordo",
  "Concordo",
  "Concordo totalmente"
];

const Form: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleChange = (questionIndex: number, value: string) => {
    setAnswers({ ...answers, [questionIndex]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Respostas:", answers);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit} className="container my-3">
      <h4 className="mb-4 text-center">Questionário AQ-10</h4>
      {questions.map((question, qIndex) => (
        <div key={qIndex} className="mb-4">
          <p><strong>{question}</strong></p>
          {options.map((option, oIndex) => (
            <div className="form-check" key={oIndex}>
              <input
                className="form-check-input"
                type="radio"
                name={`question-${qIndex}`}
                id={`q${qIndex}-o${oIndex}`}
                value={option}
                onChange={() => handleChange(qIndex, option)}
                checked={answers[qIndex] === option}
                required
              />
              <label className="form-check-label" htmlFor={`q${qIndex}-o${oIndex}`}>
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default Form;
