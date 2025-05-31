"use client"

import { useState } from "react"
import Question from "./Question"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"

const questions = [
  {
    question: "Which of the following sentences is correct?",
    options: ["I have car.", "I has a car.", "I have a car.", "I have an car."],
    correctAnswer: "I have a car.",
    timeLimit: 15,
  },
  {
    question: "Fill in the blank: 'I have ___ laptop and ___ phone.'",
    options: ["an / a", "a / a", "a / an", "the / the"],
    correctAnswer: "a / a",
    timeLimit: 10,
  },
  {
    question: "Choose the correct sentence:",
    options: ["She have a book.", "She has book.", "She haves a book.", "She has a book."],
    correctAnswer: "She has a book.",
    timeLimit: 15,
  },
  {
    question: "Identify the correct sentence:",
    options: ["Do you have a pencil?", "Do you has a pencil?", "Have you a pencil?", "Does you have a pencil?"],
    correctAnswer: "Do you have a pencil?",
    timeLimit: 15,
  },
  {
    question: "Which sentence correctly shows a relationship?",
    options: ["I have a brother.", "I am brother.", "I has brother.", "I be brother."],
    correctAnswer: "I have a brother.",
    timeLimit: 15,
  },
  {
    question: "How do you show relationship using 'have'?",
    options: ["I have an idea.", "I have a sister.", "I have food.", "I have a problem."],
    correctAnswer: "I have a sister.",
    timeLimit: 15,
  },
  {
    question: "Identify the correct sentence:",
    options: ["Do you have a pencil?", "Do you has a pencil?", "Have you a pencil?", "Does you have a pencil?"],
    correctAnswer: "Do you have a pencil?",
    timeLimit: 15,
  },
  {
    question: "What does the verb 'have' show in the sentence: 'I have a sister'?",
  options: ["An action","A feeling","A relationship","A location"],
  correctAnswer: "A relationship",
    timeLimit: 15,
  },
  {
    question: "Fill in the blank: 'It ___ not make sense.'",
    options: ["do", "does", "did", "doe"],
    correctAnswer: "does",
    timeLimit: 15,
  },
  {
    question: "Which sentence correctly shows an illness?",
    options: ["I have a book.", "I have a cold.", "I have a job.", "I have a cat."],
    correctAnswer: "I have a cold.",
    timeLimit: 15,
  },
  {
    question: "What is the correct sentence?",
    options: ["He have a fever.", "He has a fever.", "He has fever.", "He is have fever."],
    correctAnswer: "He has a fever.",
    timeLimit: 15,
  },
  {
    question: "Which of these is not an illness?",
    options: ["Headache", "Flu", "Laptop", "Cold"],
    correctAnswer: "Laptop",
    timeLimit: 15,
  },
  {
    question: "What do we usually say when someone is sick?",
    options: ["I have happiness.", "I have the flu.", "I have a travel.", "I have the car."],
    correctAnswer: "I have the flu.",
    timeLimit: 15,
  },
  {
    question: "Fill in the blank: 'She ___ a sore throat.'",
    options: ["have", "has", "had", "having"],
    correctAnswer: "has",
    timeLimit: 15,
  },
  {
    question: "What does this sentence mean: 'He has a high temperature'?",
    options: ["He is cold.", "He has a fever.", "He is tired.", "He is outside."],
    correctAnswer: "He has a fever.",
    timeLimit: 15,
  },
]

export default function Quiz() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState(0)
  const { width, height } = useWindowSize()

  const startQuiz = () => {
    setQuizStarted(true)
    setCurrentQuestionIndex(0)
    setScore(0)
    setQuizCompleted(false)
    setAnsweredQuestions(0)
  }

  const handleAnswer = (answer: string) => {
    setAnsweredQuestions(answeredQuestions + 1)

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleTimeout = () => {
    setAnsweredQuestions(answeredQuestions + 1)

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  if (!quizStarted) {
    return (
      <div className="text-center">
         <h1 className="text-[35px] lg:text-[121px]  text-white font-bold">QUIZ APP</h1>
        <h1 className="text-[15px] lg:text-[40px] bg-green-300 rounded-full font-bold mb-6">Topic:- State of Have</h1>
        <button
          onClick={startQuiz}
          className="bg-blue-500 text-white px-9 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
        >
          Start Quiz
        </button>
    
        
      </div>
    )
  }

  if (quizCompleted) {
    const isPerfectScore = score === questions.length

    return (
      <div className="w-full max-w-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
  <h2 className="text-xl sm:text-2xl text-white font-bold mb-4">Quiz Completed!</h2>

  {isPerfectScore && <Confetti width={width} height={height} />}

  <p className={`text-base sm:text-xl mt-4 bg-green-500 px-4 sm:px-6 py-2 rounded-lg font-semibold ${isPerfectScore ? "text-green-600 font-bold" : ""}`}>
    Your score: {score} out of {questions.length}
  </p>

  <button
    onClick={startQuiz}
    className="mt-4 bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 transition"
  >
    Restart Quiz
  </button>

  <h1 className="text-lg sm:text-2xl font-bold mb-6 mt-6 text-white leading-snug">
    Practice makes progress — and progress leads to perfection.
  </h1>
</div>

    )
  }

  return (
    <div className="w-full max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6 text-white">Quiz App</h1>
      <Question question={questions[currentQuestionIndex]} onAnswer={handleAnswer} onTimeout={handleTimeout} />
      <p className="mt-4 text-center text-white">
        Question {currentQuestionIndex + 1} of {questions.length}
      </p>
    </div>
  )
}