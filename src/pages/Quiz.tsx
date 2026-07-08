import { useState, useEffect } from "react";
import questions from "../data/questions.json";


interface Props {
  niveau: string;
  chapitre: string;
  difficulte: string;
  nombreQuestions: number;
}


function melangerQuestions(liste: any[]) {

  return [...liste]
    .sort(() => Math.random() - 0.5);

}


function Quiz({
  niveau,
  chapitre,
  difficulte,
  nombreQuestions
}: Props) {

const [listeQuestions] = useState(

  melangerQuestions(

    questions.filter(question =>

      question.niveau === niveau &&
      question.chapitre === chapitre &&
      question.difficulte === difficulte

    )

  ).slice(0, nombreQuestions)

);


  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [termine, setTermine] = useState(false);
  const [validee, setValidee] = useState(false);
 
const [tempsEcoule, setTempsEcoule] = useState(0);
const [reponseChoisie, setReponseChoisie] = useState<number | null>(null);

// Chronomètre en temps écoulé
useEffect(() => {

  const timer = setInterval(() => {

    setTempsEcoule(t => t + 1);

  }, 1000);


  return () => clearInterval(timer);


}, []);


if (listeQuestions.length === 0) {

  return (

    <div className="quiz-box">

      <h2>
        Aucun exercice trouvé
      </h2>

      <p>
        Modifiez vos critères de recherche.
      </p>

    </div>

  );

}


const question = listeQuestions[questionIndex];


function choisirReponse(index:number) {

  if (validee) return;


  setReponseChoisie(index);


  if (index === question.bonneReponse) {

    setScore(score + 1);

  }


  setValidee(true);

}


function questionSuivante() {

  setValidee(false);
  setReponseChoisie(null);

  if(questionIndex < listeQuestions.length - 1){

    setQuestionIndex(questionIndex + 1);

  }
 else {

  setTermine(true);

}

}



  function afficherTemps() {

    const minutes = Math.floor(tempsEcoule / 60);
    const secondes = tempsEcoule % 60;

    return `${minutes}:${secondes
      .toString()
      .padStart(2, "0")}`;

  }



  if (termine) {

    return (

      <div className="quiz-box">

        <h2>QCM terminé !</h2>


        <h3>
          Score : {score} / {listeQuestions.length}
        </h3>


        <p>
          Réussite :
          {" "}
          {Math.round(
            score / listeQuestions.length * 100
          )}
          %
        </p>


        <p>
          ⏱ Temps total : {afficherTemps()}
        </p>


      </div>

    );

  }



  return (

    <div className="quiz-box">


      <h2>
        Question {questionIndex + 1}
        {" / "}
        {listeQuestions.length}
      </h2>


      <p>
        ⏱ Temps écoulé : {afficherTemps()}
      </p>


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
  {reponseChoisie === question.bonneReponse
    ? "✅ Bonne réponse"
    : "❌ Réponse incorrecte"}
</p>


<p>
  Votre réponse :
  {" "}
  {question.reponses[reponseChoisie ?? 0]}
</p>


<p>
  Bonne réponse :
  {" "}
  {question.reponses[question.bonneReponse]}
</p>

    <p>
      Explication :
      {" "}
      {question.explication}
    </p>


    <button onClick={questionSuivante}>
      Question suivante
    </button>


  </div>

)}


    </div>

  );

}


export default Quiz;