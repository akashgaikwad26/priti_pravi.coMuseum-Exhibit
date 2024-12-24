import React, { useState } from 'react';
import { addArtifact } from '../../services/api';
import styles from '../../styles/admin/Admin.module.css';

function ArtifactForm() {
  const [artifact, setArtifact] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addArtifact(artifact).then((response) => {
      alert(response.message);
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={artifact.title}
        onChange={(e) => setArtifact({ ...artifact, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={artifact.description}
        onChange={(e) => setArtifact({ ...artifact, description: e.target.value })}
      />
      <button type="submit">Add Artifact</button>
    </form>
  );
}

export default ArtifactForm;
