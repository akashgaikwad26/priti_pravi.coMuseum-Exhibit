import React, { useState, useEffect } from 'react';
import { fetchVisitorProgress } from '../../services/api';
import styles from '../../styles/admin/Admin.module.css';

function VisitorAnalytics() {
  const [visitorData, setVisitorData] = useState([]);

  useEffect(() => {
    fetchVisitorProgress().then(setVisitorData);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Visitor Analytics</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Visitor ID</th>
            <th>Artifact Visited</th>
            <th>Quiz Score</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {visitorData.map((visitor, index) => (
            <tr key={index}>
              <td>{visitor.id}</td>
              <td>{visitor.artifactsVisited.join(', ')}</td>
              <td>{visitor.quizScore}</td>
              <td>{visitor.progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VisitorAnalytics;
