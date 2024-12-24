import React, { useEffect, useState } from 'react';
import { fetchQuiz, submitQuiz } from '../services/api';
import styles from '../styles/QuizPage.module.css';

function QuizPage({ artifactId }) {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetchQuiz(artifactId).then(setQuiz);
  }, [artifactId]);

  const handleSubmit = () => {
    submitQuiz(artifactId, answers).then((response) => {
      alert(response.message);
    });
  };

  if (!quiz) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h1>{quiz.title}</h1>
      {quiz.questions.map((q, i) => (
        <div key={i}>
          <p>{q.question}</p>
          {q.options.map((option, j) => (
            <label key={j}>
              <input
                type="radio"
                name={q.id}
                value={option}
                onChange={() => setAnswers({ ...answers, [q.id]: option })}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default QuizPage;
