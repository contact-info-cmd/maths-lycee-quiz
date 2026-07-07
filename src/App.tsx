import { useState } from "react";
import QuizConfig from "./components/QuizConfig";
import Quiz from "./pages/Quiz";
import "./index.css";


function App() {

  const [demarre, setDemarre] = useState(false);
  const [nombreQuestions, setNombreQuestions] = useState(5);


  function lancerQuiz(nombre:number){

    setNombreQuestions(nombre);
    setDemarre(true);

  }


  return (

    <main>

      <header>
        <h1>Maths-Lycée Quiz</h1>
        <p>
          Entraînement QCM de mathématiques
        </p>
      </header>


      {!demarre ?

        <QuizConfig lancerQuiz={lancerQuiz}/>

        :

        <Quiz nombreQuestions={nombreQuestions}/>

      }


    </main>

  );
}

export default App;