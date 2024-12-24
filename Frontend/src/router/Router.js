import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArtifactPage from '../components/ArtifactPage';
import QuizPage from '../components/QuizPage';
import ArtifactForm from '../components/admin/ArtifactForm';
import QuizManager from '../components/admin/QuizManager';
import VisitorAnalytics from '../components/admin/VisitorAnalytics';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/artifacts" element={<ArtifactPage />} />
        <Route path="/quiz/:artifactId" element={<QuizPage />} />
        <Route path="/admin/artifact" element={<ArtifactForm />} />
        <Route path="/admin/quiz" element={<QuizManager />} />
        <Route path="/admin/analytics" element={<VisitorAnalytics />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
