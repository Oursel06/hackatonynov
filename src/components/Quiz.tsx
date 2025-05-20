import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, RefreshCw, Star } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Combien de personnes pourrait-on nourrir avec la nourriture gaspillée chaque année dans le monde ?",
    options: [
      "100 millions",
      "500 millions",
      "1 milliard",
      "3 milliards"
    ],
    correctAnswer: 3,
    explanation: "La quantité de nourriture gaspillée dans le monde chaque année pourrait nourrir 3 milliards de personnes, soit presque 4 fois le nombre de personnes souffrant de sous-alimentation."
  },
  {
    id: 2,
    question: "Quel est le principal gaz à effet de serre émis par les aliments jetés en décharge ?",
    options: [
      "Dioxyde de carbone (CO₂)",
      "Méthane (CH₄)",
      "Protoxyde d’azote (N₂O)",
      "Ozone (O₃)"
    ],
    correctAnswer: 1,
    explanation: "Les aliments pourrissant en décharge produisent principalement du méthane (CH₄), un gaz à effet de serre 25 fois plus puissant que le CO₂."
  },
  {
    id: 3,
    question: "Quelle part des terres agricoles mondiales est utilisée pour produire des aliments qui ne seront jamais consommés ?",
    options: [
      "5%",
      "15%",
      "20%",
      "30%"
    ],
    correctAnswer: 3,
    explanation: "Environ 30% des terres agricoles mondiales servent à produire de la nourriture qui ne sera jamais consommée, car gaspillée à différentes étapes de la chaîne."
  },
  {
    id: 4,
    question: "Quelle quantité d’eau est gaspillée chaque année à cause du gaspillage alimentaire ?",
    options: [
      "10 km³",
      "50 km³",
      "100 km³",
      "250 km³"
    ],
    correctAnswer: 3,
    explanation: "Environ 250 km³ d’eau sont gaspillés chaque année pour produire des aliments jetés, soit trois fois le volume du lac Léman."
  },
  {
    id: 5,
    question: "En France, quel est le poids moyen de nourriture gaspillée par personne chaque année ?",
    options: [
      "15 kg",
      "50 kg",
      "85 kg",
      "150 kg"
    ],
    correctAnswer: 3,
    explanation: "Chaque Français jette en moyenne 150 kg de nourriture par an, dont 30 kg pourraient être évités."
  },
  {
    id: 6,
    question: "Quel est l’impact du gaspillage alimentaire sur la biodiversité ?",
    options: [
      "Aucun impact",
      "Il favorise la biodiversité",
      "Il contribue à la perte de biodiversité",
      "Il rend les sols plus fertiles"
    ],
    correctAnswer: 2,
    explanation: "Le gaspillage alimentaire contribue à la perte de biodiversité en détruisant les habitats naturels et en surconsommant les ressources naturelles."
  },
  {
    id: 7,
    question: "Quel pourcentage des émissions mondiales de gaz à effet de serre est lié au gaspillage alimentaire ?",
    options: [
      "1-2%",
      "4-5%",
      "8-10%",
      "15-20%"
    ],
    correctAnswer: 2,
    explanation: "Le gaspillage alimentaire est responsable de 8 à 10% des émissions mondiales de gaz à effet de serre."
  },
  {
    id: 8,
    question: "Laquelle de ces actions réduit le plus efficacement le gaspillage alimentaire à la maison ?",
    options: [
      "Jeter systématiquement les aliments à la date de péremption",
      "Planifier ses repas et ses courses",
      "Acheter en gros pour profiter des promos",
      "Ne rien conserver au réfrigérateur"
    ],
    correctAnswer: 1,
    explanation: "Planifier ses repas et ses courses permet de mieux gérer ses achats, d’utiliser tout ce qu’on a chez soi, et donc de réduire le gaspillage alimentaire."
  },
  {
    id: 9,
    question: "Quelle est une méthode efficace pour utiliser les restes alimentaires à la maison ?",
    options: [
      "Les jeter immédiatement après le repas",
      "Les utiliser pour composer de nouveaux plats comme des soupes ou des gratins",
      "Les stocker indéfiniment au réfrigérateur",
      "Les donner aux animaux domestiques sans vérification"
    ],
    correctAnswer: 1,
    explanation: "Réutiliser les restes pour préparer de nouveaux plats (soupes, salades, gratins, quiches…) est l’une des meilleures façons de limiter le gaspillage alimentaire à la maison."
  },
  {
    id: 10,
    question: "Quel geste simple permet d’éviter d’acheter trop de nourriture ?",
    options: [
      "Faire ses courses sans liste",
      "Aller faire ses courses en ayant faim",
      "Établir une liste de courses basée sur ses menus de la semaine",
      "Acheter en grandes quantités pour avoir du stock"
    ],
    correctAnswer: 2,
    explanation: "Faire une liste de courses basée sur ses menus prévus permet de n’acheter que ce dont on a besoin et d’éviter les achats impulsifs qui finissent souvent gaspillés."
  },
  {
    id: 11,
    question: "Que faire en priorité avec les produits proches de leur date limite de consommation ?",
    options: [
      "Les mettre en avant dans le frigo pour les consommer en premier",
      "Les cacher au fond du frigo",
      "Les jeter systématiquement",
      "Les congeler tout de suite"
    ],
    correctAnswer: 0,
    explanation: "Mettre les produits à consommer rapidement devant dans le frigo aide à ne pas les oublier et à les consommer avant qu’ils ne soient périmés."
  },
  {
    id: 12,
    question: "Que signifie la mention 'à consommer de préférence avant' sur un produit alimentaire ?",
    options: [
      "Il ne faut jamais consommer le produit après cette date",
      "Le produit est dangereux après cette date",
      "Après cette date, le produit peut perdre en goût ou en texture mais reste généralement consommable",
      "C'est une date purement indicative sans aucun impact"
    ],
    correctAnswer: 2,
    explanation: "La mention 'à consommer de préférence avant' (DLUO ou DDM) indique la date de durabilité minimale. Après cette date, le produit peut perdre en qualité mais il reste souvent consommable sans danger."
  }
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Excellent ! Vous êtes un expert du gaspillage alimentaire !";
    if (percentage >= 75) return "Très bien ! Vous avez de bonnes connaissances sur le sujet !";
    if (percentage >= 50) return "Pas mal ! Il y a encore quelques points à approfondir.";
    return "Continuez d'apprendre ! La lutte contre le gaspillage alimentaire est un apprentissage continu.";
  };

  return (
    <section id="quiz" className="py-16 bg-receipt-paper">
      <div className="container mx-auto px-4">
        <div className="text-center font-receipt text-receipt-text mb-12">
          <Star className="w-8 h-8 mx-auto mb-4" />
          <p>================================</p>
          <h2 className="text-3xl my-4">TICKET GAGNANT</h2>
          <p>TESTEZ VOS CONNAISSANCES</p>
          <p>================================</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!quizCompleted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-receipt-paper border-2 border-dashed border-receipt-border p-8 rounded-lg"
            >
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4 font-receipt text-receipt-text">
                  <span>QUESTION {currentQuestion + 1}/{questions.length}</span>
                  <span>SCORE: {score}/{questions.length}</span>
                </div>
                <h3 className="text-xl font-receipt text-receipt-text mb-6">
                  {questions[currentQuestion].question}
                </h3>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={selectedAnswer !== null}
                      className={`w-full text-left p-4 rounded-lg font-receipt transition-all duration-300 border-2 border-dashed ${
                        selectedAnswer === null
                          ? 'hover:bg-receipt-text/5 border-receipt-border'
                          : selectedAnswer === index
                          ? index === questions[currentQuestion].correctAnswer
                            ? 'bg-emerald-100 border-emerald-500'
                            : 'bg-red-100 border-red-500'
                          : index === questions[currentQuestion].correctAnswer
                          ? 'bg-emerald-100 border-emerald-500'
                          : 'bg-receipt-paper/50 border-receipt-border'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-4 bg-receipt-text/5 rounded-lg border-2 border-dashed border-receipt-border"
                >
                  <p className="font-receipt text-receipt-text">
                    {questions[currentQuestion].explanation}
                  </p>
                </motion.div>
              )}

              {selectedAnswer !== null && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={handleNextQuestion}
                  className="w-full bg-receipt-text text-receipt-paper hover:bg-receipt-text/90 py-3 rounded-lg font-receipt transition-colors"
                >
                  {currentQuestion < questions.length - 1 ? 'QUESTION SUIVANTE' : 'VOIR LES RÉSULTATS'}
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-receipt-paper border-2 border-dashed border-receipt-border p-8 rounded-lg text-center"
            >
              <Award className="w-16 h-16 text-receipt-text mx-auto mb-6" />
              <h3 className="text-2xl font-receipt text-receipt-text mb-4">FÉLICITATIONS!</h3>
              <div className="font-receipt text-receipt-text space-y-4">
                <p>--------------------------------</p>
                <p className="text-lg">VOTRE SCORE: {score}/{questions.length}</p>
                <p>--------------------------------</p>
                <p className="text-receipt-text/80">{getScoreMessage()}</p>
              </div>
              <button
                onClick={resetQuiz}
                className="mt-8 inline-flex items-center bg-receipt-text text-receipt-paper hover:bg-receipt-text/90 px-6 py-3 rounded-lg font-receipt transition-colors"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                REJOUER
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;