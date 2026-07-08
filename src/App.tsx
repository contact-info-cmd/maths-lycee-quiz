import { useState } from "react";
import QuizConfig from "./components/QuizConfig";
import Quiz from "./pages/Quiz";
import "./index.css";


function App() {


  const [demarre, setDemarre] = useState(false);


  const [parametres, setParametres] = useState({
    niveau: "Seconde",
    chapitre: "Fonctions",
    difficulte: "Facile",
    nombre: 5
  });



  function lancerQuiz(
    niveau: string,
    chapitre: string,
    difficulte: string,
    nombre: number
  ) {

    setParametres({
      niveau,
      chapitre,
      difficulte,
      nombre
    });

    setDemarre(true);

  }



  return (

    <main>

      <header>

        <h1>
          Maths-Lycée Quiz
        </h1>

        <p>
          Entraînement QCM de mathématiques
        </p>

      </header>


      {!demarre ? (

        <QuizConfig
          lancerQuiz={lancerQuiz}
        />

      ) : (

        <Quiz
          niveau={parametres.niveau}
          chapitre={parametres.chapitre}
          difficulte={parametres.difficulte}
          nombreQuestions={parametres.nombre}
        />

      )}


    </main>

  );

}


export default App;