import { useState } from "react";
import QuizConfig from "./components/QuizConfig";
import Quiz from "./pages/Quiz";
import "./index.css";


function App() {

  const [demarre, setDemarre] = useState(false);


  return (

    <main>

      <header>
        <h1>Maths-Lycée Quiz</h1>
        <p>
          Entraînement QCM de mathématiques
        </p>
      </header>


      {!demarre ? (

        <div className="quiz-box">

          <QuizConfig />

          <button onClick={() => setDemarre(true)}>
            Commencer le QCM
          </button>

        </div>

      ) : (

        <Quiz />

      )}

    </main>

  );
}

export default App;