import React from 'react';
import QuestionCard from './components/QuestionCard';

const App = () => {
  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h2>Tap Tap Quizolution</h2>
      <button className="start" onClick={startTrivia}>
        Commence!
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard/>
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
