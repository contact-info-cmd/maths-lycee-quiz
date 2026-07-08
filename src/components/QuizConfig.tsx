import { useState } from "react";
import chapitres from "../data/chapitres.json";


interface Props {
  lancerQuiz: (
    niveau: string,
    chapitre: string,
    difficulte: string,
    nombre: number
  ) => void;
}


function QuizConfig({ lancerQuiz }: Props) {


  const [niveau, setNiveau] = useState("Seconde");
  const [chapitre, setChapitre] = useState("Fonctions");
  const [difficulte, setDifficulte] = useState("Facile");
  const [nombre, setNombre] = useState(5);


  const chapitresFiltres = chapitres.filter(
    c => c.niveau === niveau
  );


  return (

    <div className="quiz-box">


      <h2>Créer un QCM</h2>


      <label>Niveau</label>

      <select
        value={niveau}
        onChange={(e)=>{

          setNiveau(e.target.value);

        }}
      >

        <option>Seconde</option>
        <option>Première</option>

      </select>



      <label>Chapitre</label>

      <select
        value={chapitre}
        onChange={(e)=>setChapitre(e.target.value)}
      >

        {chapitresFiltres.map(c=>(

          <option key={c.id}>
            {c.chapitre}
          </option>

        ))}

      </select>



      <label>Difficulté</label>

      <select
        value={difficulte}
        onChange={(e)=>setDifficulte(e.target.value)}
      >

        <option>Facile</option>
        <option>Moyenne</option>
        <option>Difficile</option>

      </select>



      <label>Nombre de questions</label>

      <select
        value={nombre}
        onChange={(e)=>setNombre(Number(e.target.value))}
      >

        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>

      </select>



      <button
        onClick={() =>
          lancerQuiz(
            niveau,
            chapitre,
            difficulte,
            nombre
          )
        }
      >

        Commencer le QCM

      </button>


    </div>

  );

}


export default QuizConfig;