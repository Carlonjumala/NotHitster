import React from "react";

export default function MainMenu({
  newPlayer,
  setNewPlayer,
  addPlayer,
  roundLimit,
  setRoundLimit,
  selectedPlaylist,
  setSelectedPlaylist,
  startGame,
  toggleRules,
  showRules
}) {
  return (
   <div className="card flex flex-col items-center gap-4">
  <input
    type="text"
    placeholder="Enter player name"
    value={newPlayer}
    onChange={(e) => setNewPlayer(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && addPlayer()}
    className="p-2 rounded w-full max-w-md text-black block"
  />
  <button onClick={addPlayer} className="w-full max-w-md block">Add Player</button>

  <h1 className="text-players">Select Round Limit</h1>

  <input
    placeholder="Set round limit"
    type="number"
    min="1"
    value={roundLimit}
    onChange={(e) => setRoundLimit(parseInt(e.target.value))}
    className="p-2 rounded w-full max-w-md text-black block"
  />

  <h1 className="text-players">Select Playlist</h1>

  <select
    value={selectedPlaylist}
    onChange={(e) => setSelectedPlaylist(e.target.value)}
    className="p-2 rounded w-full max-w-md text-black block"
  >
    <option value="RockPlaylist">Rock Playlist</option>
    <option value="AllTimePopular">All Time Popular</option>
    <option value="Hits2000to2025">2000-2025 Hits</option>
    <option value="AnythingGoes">Anything Goes!</option>
    <option value="GIGALIST">GIGA LIST</option>
  </select>

  <button onClick={startGame} className="w-full max-w-md block">Start Game</button>

  <img
    src="src/assets/HitsterLogo.png"
    alt="Hitster Logo"
    className="logo-img title-animation"
  />
</div>

    
  );
}