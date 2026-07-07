import { useState } from "react";
import questions from "../data/questions.json";

interface Props {
  nombreQuestions:number;
}

function Quiz({nombreQuestions}:Props) {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [validee, setValidee] = useState(false);

  const question = questions[questionIndex];


  function choisirReponse(index: number) {

    if (validee) return;

    if (index === question.bonneReponse) {
      setScore(score + 1);
    }

    setValidee(true);
  }


  function questionSuivante() {

    setValidee(false);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }

  }


  return (
    <div className="quiz-box">

      <h2>
        Question {questionIndex + 1} / {nombreQuestions}
      </h2>

      <p>
        {question.question}
      </p>


      {question.reponses.map((reponse, index) => (

        <button
          key={index}
          onClick={() => choisirReponse(index)}
        >
          {reponse}
        </button>

      ))}


      {validee && (

        <div>

          <p>
            {question.explication}
          </p>

          <button onClick={questionSuivante}>
            Question suivante
          </button>

        </div>

      )}


      <p>
        Score : {score}
      </p>

    </div>
  );
}

export default Quiz;