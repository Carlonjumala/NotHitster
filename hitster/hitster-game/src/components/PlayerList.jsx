// src/components/PlayerList.jsx
import React from "react";

export default function PlayerList({ players }) {
  return (
    <div className="card-sides">
      <h2 className="text-players">Players</h2>
      <ul>
        {players.map((player, index) => (
          <li className="text-players" key={index}>
            {player}
          </li>
        ))}
      </ul>
    </div>
  );
}