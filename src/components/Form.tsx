import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';


const questions = [
  "1. Costumo notar pequenos sons quando outros não percebem.",
  "2. Eu geralmente me concentro mais no todo de uma imagem, ao invés de pequenos detalhes.",
  "3. Acho fácil fazer mais de uma coisa ao mesmo tempo.",
  "4. Se houver uma interrupção, posso voltar para o que eu estava fazendo muito rápido.",
  "5. Acho fácil 'ler nas entrelinhas' quando alguém está falando comigo.",
  "6. Eu consigo perceber se alguém que está me ouvindo está ficando entediado.",
  "7. Quando estou lendo uma história, acho difícil descobrir as intenções dos personagens.",
  "8. Gosto de coletar informações sobre categorias de coisas (por exemplo, tipos de carros, tipos de pássaros, tipos de trem, tipos de plantas, etc.).",
  "9. Acho que é fácil perceber o que alguém está pensando ou sentindo apenas olhando para o seu rosto.",
  "10. Acho difícil entender as intenções das pessoas."
];
 
const options = [
  "Discordo totalmente",
  "Discordo",
  "Concordo",
  "Concordo totalmente"
];

const agreeScore = [1, 5, 7, 10];

const disagreeScore = [2, 3, 4, 6, 8, 9];

interface FormProps {
  onScoreCalculated: (score: number, message: string) => void;
}

const Form: React.FC<FormProps> = ({ onScoreCalculated }) => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  
  const handleChange = (questionIndex: number, value: string) => {
    setAnswers({ ...answers, [questionIndex]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let score = 0;

    questions.forEach((_, index) => {
      const answer = answers[index];

      if (agreeScore.includes(index + 1)) {
        if(answer === "Concordo" || answer === "Concordo totalmente") {
          score += 1;
        }
      } else if (disagreeScore.includes(index + 1)) {
        if (answer === "Discordo" || answer === "Discordo totalmente") {
          score += 1;
        }
      }
    });

    const message = score >= 6
    ? `Sua pontuação foi ${score} de 10. Alto risco para autismo. É recomendado procurar um especialista para o diagnóstico definitivo.`
    : `Sua pontuação foi ${score} de 10. Baixo risco para autismo.`

    onScoreCalculated(score, message);
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