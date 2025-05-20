import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, RefreshCw } from 'lucide-react';

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
    question: "Quelle quantité de nourriture est gaspillée chaque année dans le monde ?",
    options: [
      "500 millions de tonnes",
      "1,3 milliard de tonnes",
      "2 milliards de tonnes",
      "3 milliards de tonnes"
    ],
    correctAnswer: 1,
    explanation: "Environ 1,3 milliard de tonnes de nourriture sont gaspillées chaque année dans le monde, soit un tiers de la production alimentaire mondiale."
  },
  {
    id: 2,
    question: "Quel est le pourcentage de nourriture gaspillée par les ménages français ?",
    options: [
      "10%",
      "20%",
      "30%",
      "40%"
    ],
    correctAnswer: 2,
    explanation: "En France, environ 30% de la nourriture achetée par les ménages finit à la poubelle."
  },
  {
    id: 3,
    question: "Quelle est la meilleure façon de conserver les fruits et légumes ?",
    options: [
      "Dans des sacs plastiques hermétiques",
      "Dans le bac à légumes du réfrigérateur",
      "À température ambiante",
      "Cela dépend du type de fruit ou légume"
    ],
    correctAnswer: 3,
    explanation: "La méthode de conservation optimale varie selon le type de fruit ou légume. Certains se conservent mieux au réfrigérateur, d'autres à température ambiante."
  },
  {
    id: 4,
    question: "Quelle est la différence entre 'à consommer jusqu'au' et 'à consommer de préférence avant' ?",
    options: [
      "Il n'y a pas de différence",
      "Le premier est une date limite sanitaire, le second une date de qualité optimale",
      "Le premier concerne les produits frais, le second les conserves",
      "Le premier est plus strict que le second"
    ],
    correctAnswer: 1,
    explanation: "'À consommer jusqu'au' est une date limite sanitaire à ne pas dépasser, tandis que 'à consommer de préférence avant' indique simplement la date jusqu'à laquelle le produit conserve ses qualités optimales."
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
    <section id="quiz" className="py-20 bg-emerald-100 rounded-lg shadow-lg">
      <div className="container mx-auto px-4 ">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Testez Vos Connaissances</h2>
          <p className="text-lg text-gray-600">
            Découvrez ce que vous savez sur le gaspillage alimentaire et apprenez-en davantage à travers ce quiz interactif.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!quizCompleted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Question {currentQuestion + 1}/{questions.length}</span>
                  <span className="text-sm text-emerald-600">Score: {score}/{questions.length}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">{questions[currentQuestion].question}</h3>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={selectedAnswer !== null}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        selectedAnswer === null
                          ? 'hover:bg-emerald-50 border border-gray-200'
                          : selectedAnswer === index
                          ? index === questions[currentQuestion].correctAnswer
                            ? 'bg-emerald-100 border border-emerald-500'
                            : 'bg-red-100 border border-red-500'
                          : index === questions[currentQuestion].correctAnswer
                          ? 'bg-emerald-100 border border-emerald-500'
                          : 'bg-gray-50 border border-gray-200'
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
                  className="mb-8 p-4 bg-blue-50 rounded-lg"
                >
                  <p className="text-blue-800">{questions[currentQuestion].explanation}</p>
                </motion.div>
              )}

              {selectedAnswer !== null && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={handleNextQuestion}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <Award className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">Quiz Terminé !</h3>
              <p className="text-lg text-gray-600 mb-4">
                Votre score : {score}/{questions.length}
              </p>
              <p className="text-emerald-600 font-medium mb-8">{getScoreMessage()}</p>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Recommencer le quiz
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;