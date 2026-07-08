import { useState } from "react";
import chapitres from "../data/chapitres.json";

interface Props {
  lancerQuiz: (nombre: number) => void;
}

function QuizConfig({ lancerQuiz }: Props) {

  const [niveau, setNiveau] = useState("Seconde");
  const [nombre, setNombre] = useState(5);

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

      <select
        value={nombre}
        onChange={(e) => setNombre(Number(e.target.value))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>


      <button onClick={() => lancerQuiz(nombre)}>
        Commencer le QCM
      </button>

    </div>
  );
}

export default QuizConfig;