import React from "react";

export default function GameArea({
  song,
  videoVisible,
  setVideoVisible,
  iframeRef,
  volume,
  handleVolumeChange,
  playerAnswers,
  setPlayerAnswers,
  checkAnswer,
  lastResult,
  nextRound,
  adminMode,
  toggleAdminMode,
  players,
  scores,
  modifyPlayerScore,
  adminSkipRound,
  
}) {
  return (
    <div className="card bg-white text-black rounded-xl p-4 shadow-lg">
      <h1 className="text-players mb-4">Now Playing</h1>

      {song && (
        <div className="relative mb-4">
          <div className="flex items-center space-x-2 mb-4">
            <button
              onClick={() => setVideoVisible(!videoVisible)}
              className="p-2 bg-orange-500 hover:bg-orange-400 rounded-lg"
            >
              {videoVisible ? "Hide Video" : "Show Video"}
            </button>

            <div style={{ position: "relative", width: "300px", height: "200px" }}>
              <iframe
                ref={iframeRef}
                width="300"
                height="200"
                src={`https://www.youtube.com/embed/${song.youtubeId}?autoplay=1&enablejsapi=1`}
                allowTransparency="true"
                title="YouTube Video"
                allow="autoplay"

                frameBorder="0"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 52,
                  zIndex: 1,
                  opacity: videoVisible ? 1 : 0,
                  pointerEvents: videoVisible ? "auto" : "none",
                  transition: "opacity 0.3s ease",
                }}
              ></iframe>

              {!videoVisible && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 52,
                    width: "300px",
                    height: "200px",
                    backgroundColor: "black",
                    zIndex: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontWeight: "bold",
                    pointerEvents: "none",
                  }}
                >
                  Video Player Hidden
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center space-x-2">
        <span className="volume-text">Volume:</span>
        <input
  type="range"
  min="0"
  max="100"
  value={volume}
  onChange={(e) => handleVolumeChange(parseInt(e.target.value))}
  className="w-32 custom-slider"
/>
        <span className="volume-text">{volume}%</span>
      </div>

      <div className="flex flex-col items-center mt-4 gap-2 w-full">
        <input
          type="text"
          placeholder="Artist"
          value={playerAnswers.artist}
          onChange={(e) =>
            setPlayerAnswers({ ...playerAnswers, artist: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Title"
          value={playerAnswers.title}
          onChange={(e) =>
            setPlayerAnswers({ ...playerAnswers, title: e.target.value })
          }
        />

        <div className="flex gap-2 w-full max-w-md">
          <input
            type="text"
            placeholder="Year"
            value={playerAnswers.year}
            onChange={(e) =>
              setPlayerAnswers({ ...playerAnswers, year: e.target.value })
            }
            className="flex-grow"
          />
          <button onClick={checkAnswer} className="whitespace-nowrap">
            Submit
          </button>
        </div>

        {lastResult && (
          <div className="bg-yellow-400 p-4 rounded mt-4 w-full max-w-md text-black">
            <p>Correct Artist: {lastResult.correctArtist}</p>
            <p>Correct Title: {lastResult.correctTitle}</p>
            <p>Correct Year: {lastResult.correctYear}</p>
            <p>Points: {lastResult.playerPoints}</p>
            <button onClick={nextRound}>Next Round</button>
          </div>
        )}

        <div className="mt-4 gap-2 flex flex-col items-center">
          <button onClick={toggleAdminMode} className="p-2 gap-2">
            {adminMode ? "Exit Admin Mode" : "Enter Admin Mode"}
          </button>
        </div>

        {adminMode && (
          <div>
            <h3 className="text-lg font-bold mb-4">Admin Controls:</h3>
            {players.map((player) => (
              <div
                key={player}
                className="flex justify-between items-center mb-2"
              >
                <span>
                  {player}: {scores[player]} points
                </span>
                <button
                  onClick={() => modifyPlayerScore(player, 1)}
                  className="p-2 bg-green-500 hover:bg-green-400 rounded-lg text-white"
                >
                  Add 1 Point
                </button>
                <button
                  onClick={() => modifyPlayerScore(player, -1)}
                  className="p-2 bg-red-500 hover:bg-red-400 rounded-lg text-white"
                >
                  Remove 1 Point
                </button>
              </div>
            ))}
            <button
              onClick={adminSkipRound}
              className="p-2 bg-orange-500 hover:bg-orange-400 rounded-lg text-white mt-4"
            >
              Skip Round (No Power-Up Deduction)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}