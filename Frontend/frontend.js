import React from "react";
import { useQuery } from "react-query";

const fetchArtifacts = async () => {
    const res = await fetch("http://localhost:5000/artifacts");
    if (!res.ok) throw new Error("Failed to fetch artifacts");
    return res.json();
};

const ArtifactPage = () => {
    const { data: artifacts, error, isLoading } = useQuery("artifacts", fetchArtifacts);

    if (isLoading) return <p>Loading artifacts...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
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
};

export default ArtifactPage;
