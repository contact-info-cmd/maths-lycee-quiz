import { useState } from "react";
import chapitres from "../data/chapitres.json";

function QuizConfig() {

  const [niveau, setNiveau] = useState("Seconde");

  const chapitresFiltres = chapitres.filter(
    chapitre => chapitre.niveau === niveau
  );

  return (
    <div className="quiz-box">

      <h2>Créer un QCM</h2>

      <label>Niveau</label>

      <select
        value={niveau}
        onChange={(e) => setNiveau(e.target.value)}
      >
        <option>Seconde</option>
        <option>Première</option>
      </select>


      <label>Chapitre</label>

      <select>
        {chapitresFiltres.map(chapitre => (
          <option key={chapitre.id}>
            {chapitre.chapitre}
          </option>
        ))}
      </select>


      <label>Difficulté</label>

      <select>
        <option>Facile</option>
        <option>Moyenne</option>
        <option>Difficile</option>
      </select>


      <label>Nombre de questions</label>

      <select>
        <option>5</option>
        <option>10</option>
        <option>20</option>
      </select>


      <button>
        Commencer le QCM
      </button>

    </div>
  );
}

export default QuizConfig;