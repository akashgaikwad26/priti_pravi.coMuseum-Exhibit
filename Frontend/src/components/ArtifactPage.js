import React, { useEffect, useState } from 'react';
import { fetchArtifacts } from '../services/api';
import styles from '../styles/ArtifactPage.module.css';

function ArtifactPage() {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    fetchArtifacts().then(setArtifacts);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Artifacts</h1>
      <ul>
        {artifacts.map((artifact) => (
          <li key={artifact.id}>
            <h2>{artifact.title}</h2>
            <p>{artifact.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArtifactPage;
