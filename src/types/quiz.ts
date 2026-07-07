export interface Chapitre {
  id: string;
  niveau: string;
  chapitre: string;
  url: string;
}

export interface Question {
  id: string;
  niveau: string;
  chapitre: string;
  competence: string;
  difficulte: string;
  question: string;
  reponses: string[];
  bonneReponse: number;
  explication: string;
  exerciceLie: string;
}