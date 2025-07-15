// src/components/ScoreBoard.jsx
import React from "react";

export default function ScoreBoard({ scores }) {
  return (
    <div className="card-sides shadow-lg">
      <h2 className="text-players mb-4">Scores</h2>
      <ul>
        {Object.entries(scores).map(([name, score]) => (
          <li className="text-players" key={name}>
            {name}: {score}
          </li>
        ))}
      </ul>
    </div>
  );
}