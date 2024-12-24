import React, { useState, useEffect } from 'react';
import { fetchQuizzes, addQuiz } from '../../services/api';
import styles from '../../styles/admin/Admin.module.css';

function QuizManager() {
  const [quizzes, setQuizzes] = useState([]);
  const [newQuiz, setNewQuiz] = useState({
    artifactId: '',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: '',
  });

  useEffect(() => {
    fetchQuizzes().then(setQuizzes);
  }, []);

  const handleAddQuiz = (e) => {
    e.preventDefault();
    addQuiz(newQuiz).then((response) => {
      alert(response.message);
      setQuizzes([...quizzes, newQuiz]);
      setNewQuiz({
        artifactId: '',
        question: '',
        options: ['', '', '', ''],
        correctAnswer: '',
      });
    });
  };

  return (
    <div className={styles.container}>
      <h1>Quiz Manager</h1>
      <form className={styles.form} onSubmit={handleAddQuiz}>
        <input
          type="text"
          placeholder="Artifact ID"
          value={newQuiz.artifactId}
          onChange={(e) => setNewQuiz({ ...newQuiz, artifactId: e.target.value })}
        />
        <textarea
          placeholder="Question"
          value={newQuiz.question}
          onChange={(e) => setNewQuiz({ ...newQuiz, question: e.target.value })}
        />
        {newQuiz.options.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => {
              const updatedOptions = [...newQuiz.options];
              updatedOptions[index] = e.target.value;
              setNewQuiz({ ...newQuiz, options: updatedOptions });
            }}
          />
        ))}
        <input
          type="text"
          placeholder="Correct Answer"
          value={newQuiz.correctAnswer}
          onChange={(e) => setNewQuiz({ ...newQuiz, correctAnswer: e.target.value })}
        />
        <button type="submit">Add Quiz</button>
      </form>
      <h2>Existing Quizzes</h2>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <h3>{quiz.question}</h3>
            <p>Options: {quiz.options.join(', ')}</p>
            <p>Correct Answer: {quiz.correctAnswer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizManager;
