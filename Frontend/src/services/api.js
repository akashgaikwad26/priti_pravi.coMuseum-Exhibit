const API_URL = 'http://localhost:3000';

export const fetchArtifacts = async () => {
  const response = await fetch(`${API_URL}/artifacts`);
  return response.json();
};

export const fetchQuiz = async (artifactId) => {
  const response = await fetch(`${API_URL}/quiz/${artifactId}`);
  return response.json();
};

export const submitQuiz = async (artifactId, answers) => {
  const response = await fetch(`${API_URL}/submit-quiz`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ artifactId, answers }),
  });
  return response.json();
};

export const addArtifact = async (artifact) => {
  const response = await fetch(`${API_URL}/add-artifact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(artifact),
  });
  return response.json();
};
