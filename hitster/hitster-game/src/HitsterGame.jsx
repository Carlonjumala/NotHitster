import { useState, useEffect, useRef } from "react";

export default function HitsterGame() {
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [song, setSong] = useState(null);
  const [playerAnswers, setPlayerAnswers] = useState({ artist: "", title: "", year: "" });
  const [scores, setScores] = useState({});
  const [newPlayer, setNewPlayer] = useState("");
  const [videoVisible, setVideoVisible] = useState(false);
  const [lastResult, setLastResult] = useState(null);
  const [correctAnswersVisible, setCorrectAnswersVisible] = useState(false);
  const [playedSongs, setPlayedSongs] = useState([]);
  const [playerSkipCount, setPlayerSkipCount] = useState({});
  const [roundLimit, setRoundLimit] = useState(0);
  const [roundCount, setRoundCount] = useState(0);
  const [turnCount, setTurnCount] = useState(1);
  const [selectedPlaylist, setSelectedPlaylist] = useState("RockPlaylist");
  const [adminMode, setAdminMode] = useState(false);

  
  const playlists = {
    RockPlaylist: [
        { youtubeId: "beX-9wW5rL0", artist: "Weezer", title: "Island In The Sun", year: "2018" },
        { youtubeId: "fJ9rUzIMcZQ", artist: "Queen", title: "Bohemian Rhapsody", year: "1975" },
        { youtubeId: "1w7OgIMMRc4", artist: "Guns N' Roses", title: "Sweet Child O' Mine", year: "1987" },
        { youtubeId: "hTWKbfoikeg", artist: "Nirvana", title: "Smells Like Teen Spirit", year: "1991" },
        { youtubeId: "WpYeekQkAdc", artist: "The White Stripes", title: "Seven Nation Army", year: "2003" },
        { youtubeId: "6vjR1R75nWE", artist: "AC/DC", title: "Back in Black", year: "1980" },
        { youtubeId: "R8AOAap6_k4", artist: "Green Day", title: "Boulevard of Broken Dreams", year: "2004" },
        { youtubeId: "eVTXPUF4Oz4", artist: "Linkin Park", title: "In The End", year: "2000" },
        { youtubeId: "XFkzRNyygfk", artist: "Radiohead", title: "Creep", year: "1993" },
        { youtubeId: "1CBNE25rveE", artist: "Foo Fighters", title: "Everlong", year: "1997" },
        { youtubeId: "vabnZ9-ex7o", artist: "System of a Down", title: "Toxicity", year: "2001" },
        { youtubeId: "CSvFpBOe8eY", artist: "System of a Down", title: "Chop Suey!", year: "2001" },
        { youtubeId: "dxp9w9Ggehc", artist: "Linkin Park", title: "Numb", year: "2003" },
        { youtubeId: "lL2ZwXj1tXM", artist: "Green Day", title: "American Idiot", year: "2004" },
        { youtubeId: "NUTGr5t3MoY", artist: "Bon Jovi", title: "Livin' On A Prayer", year: "1986" },
        { youtubeId: "E0ozmU9cJDg", artist: "Red Hot Chili Peppers", title: "Under The Bridge", year: "1992" },
        { youtubeId: "qV5lzRHrGeg", artist: "Red Hot Chili Peppers", title: "Snow (Hey Oh)", year: "2006" },
        { youtubeId: "YlUKcNNmywk", artist: "Red Hot Chili Peppers", title: "Californication", year: "1999" },
        { youtubeId: "SBjQ9tuuTJQ", artist: "Foo Fighters", title: "The Pretender", year: "2007" },
        { youtubeId: "z5vA9CwZKNY", artist: "The Killers", title: "Mr. Brightside", year: "2004" },
        { youtubeId: "pAgnJDJN4VA", artist: "AC/DC", title: "Highway to Hell", year: "1979" },
        { youtubeId: "62XiBR6-DEY", artist: "Iron Maiden", title: "The Trooper", year: "1983" },
        { youtubeId: "tAGnKpE4NCI", artist: "Metallica", title: "Nothing Else Matters", year: "1991" },
        { youtubeId: "CD-E-LDc384", artist: "Metallica", title: "Enter Sandman", year: "1991" },
        { youtubeId: "bWXazVhlyxQ", artist: "Rage Against The Machine", title: "Killing In The Name", year: "1992" },
        { youtubeId: "7QU1nvuxaMA", artist: "Audioslave", title: "Like a Stone", year: "2002" },
        { youtubeId: "3YxaaGgTQYM", artist: "Evanescence", title: "Bring Me To Life", year: "2003" },
        { youtubeId: "5QD5n98R_nk", artist: "Soundgarden", title: "Black Hole Sun", year: "1994" },
        { youtubeId: "uelHwf8o7_U", artist: "Eminem", title: "Love The Way You Lie ft. Rihanna", year: "2010" },
        { youtubeId: "SC4xMk98Pdc", artist: "Simple Plan", title: "Welcome To My Life", year: "2004" },
        { youtubeId: "j0lSpNtjPM8", artist: "Fall Out Boy", title: "Sugar, We're Goin Down", year: "2005" },
        { youtubeId: "eebfMFzJHNs", artist: "The Offspring", title: "The Kids Aren't Alright", year: "1998" },
        { youtubeId: "ZyhrYis509A", artist: "Aqua", title: "Barbie Girl", year: "1997" },
        { youtubeId: "LatorN4P9aA", artist: "My Chemical Romance", title: "Welcome to the Black Parade", year: "2006" },
        { youtubeId: "gGdGFtwCNBE", artist: "Pearl Jam", title: "Even Flow", year: "1991" },
        { youtubeId: "MW6E_TNgCsY", artist: "Staind", title: "It's Been Awhile", year: "2001" },
        { youtubeId: "RiSfTyrvJlg", artist: "Papa Roach", title: "Last Resort", year: "2000" },
        { youtubeId: "3mbBbFH9fAg", artist: "Korn", title: "Freak On a Leash", year: "1998" },
        { youtubeId: "CUYxBEFKTsQ", artist: "The Smashing Pumpkins", title: "Today", year: "1993" },
        { youtubeId: "4N3N1MlvVc4", artist: "Gary Jules", title: "Mad World", year: "2001" },
        { youtubeId: "CO8vBVUaKvk", artist: "Thirty Seconds to Mars", title: "The Kill", year: "2005" },
        { youtubeId: "ScNNfyq3d_w", artist: "Army of Anyone", title: "Father Figure", year: "2006" },
        { youtubeId: "QNJL6nfu__Q", artist: "Breaking Benjamin", title: "The Diary of Jane", year: "2006" },
        { youtubeId: "5NPBIwQyPWE", artist: "Incubus", title: "Wish You Were Here", year: "2001" },
        { youtubeId: "xwtdhWltSIg", artist: "Red Hot Chili Peppers", title: "By the Way", year: "2002" },
       //{ youtubeId: "VurhzAO3WVI", artist: "Alice In Chains", title: "Would?", year: "1992" },
        { youtubeId: "vabnZ9-ex7o", artist: "System of a Down", title: "Chop Suey!", year: "2001" },
        { youtubeId: "5_LxyhCJpsM", artist: "Godsmack", title: "I Stand Alone", year: "2002" },
        { youtubeId: "RYnFIRc0k6E", artist: "Matchbox Twenty", title: "Push", year: "1996" },
        { youtubeId: "ohgr7bu0gEE", artist: "Three Days Grace", title: "Animal I Have Become", year: "2006" },
        { youtubeId: "1mjlM_RnsVE", artist: "Drowning Pool", title: "Bodies", year: "2001" }
      ],
    AllTimePopular: [
      { youtubeId: "2Vv-BfVoq4g", artist: "Ed Sheeran", title: "Shape of You", year: "2017" },
  { youtubeId: "9bZkp7q19f0", artist: "PSY", title: "Gangnam Style", year: "2012" },
  { youtubeId: "JGwWNGJdvx8", artist: "Ed Sheeran", title: "Castle on the Hill", year: "2017" },
  { youtubeId: "kJQP7kiw5Fk", artist: "Luis Fonsi & Daddy Yankee ft. Justin Bieber", title: "Despacito", year: "2017" },
  { youtubeId: "RgKAFK5djSk", artist: "Wiz Khalifa ft. Charlie Puth", title: "See You Again", year: "2015" },
  { youtubeId: "OPf0YbXqDm0", artist: "Mark Ronson ft. Bruno Mars", title: "Uptown Funk", year: "2014" },
  { youtubeId: "JRfuAukYTKg", artist: "The Weeknd", title: "Blinding Lights", year: "2019" },
  { youtubeId: "dQw4w9WgXcQ", artist: "Rick Astley", title: "Never Gonna Give You Up", year: "1987" },
  { youtubeId: "fRh_vgS2dFE", artist: "Justin Bieber", title: "Sorry", year: "2015" },
  { youtubeId: "IcrbM1l_BoI", artist: "Avicii", title: "Wake Me Up", year: "2013" },
  { youtubeId: "YqeW9_5kURI", artist: "Taylor Swift", title: "Blank Space", year: "2014" },
  { youtubeId: "KnL2RJZTdA4", artist: "The Weeknd", title: "Starboy", year: "2016" },
  { youtubeId: "KlyXNRrsk4A", artist: "Shakira ft. Wyclef Jean", title: "Hips Don't Lie", year: "2006" },
  { youtubeId: "4m1EFMoRFvY", artist: "Beyoncé", title: "Single Ladies", year: "2008" },
  { youtubeId: "YVkUvmDQ3HY", artist: "Eminem", title: "Without Me", year: "2002" },
  { youtubeId: "pt8VYOfr8To", artist: "Taylor Swift", title: "Shake It Off", year: "2014" },
  { youtubeId: "KEI4qSrkPAs", artist: "Lady Gaga", title: "Just Dance", year: "2008" },
  { youtubeId: "1k8craCGpgs", artist: "Doja Cat", title: "Say So", year: "2020" },
  { youtubeId: "PfGaX8G0f2E", artist: "Justin Bieber", title: "Baby ft. Ludacris", year: "2010" },
  { youtubeId: "YykjpeuMNEk", artist: "Eurythmics", title: "Sweet Dreams", year: "1983" },
  { youtubeId: "JV2s0UIPOQY", artist: "Michael Jackson", title: "Thriller", year: "1982" },
  { youtubeId: "QH2-TGUlwu4", artist: "Nyan Cat", title: "Nyan Cat", year: "2011" },
  { youtubeId: "1G4isv_Fylg", artist: "Bruno Mars", title: "Grenade", year: "2010" },
  { youtubeId: "U0CGsw6h60k", artist: "LMFAO", title: "Party Rock Anthem", year: "2011" },
  { youtubeId: "YVw7eJ0vGfM", artist: "Macklemore & Ryan Lewis", title: "Thrift Shop", year: "2012" },
  { youtubeId: "8SbUC-UaAxE", artist: "Guns N' Roses", title: "November Rain", year: "1992" },
  { youtubeId: "k85mRPqvMbE", artist: "Crazy Frog", title: "Axel F", year: "2009" },
  { youtubeId: "L0MK7qz13bU", artist: "FROZEN", title: "Let It Go", year: "2013" },
  { youtubeId: "y6120QOlsfU", artist: "Darude", title: "Sandstorm", year: "2000" },
  { youtubeId: "nlcIKh6sBtc", artist: "Lil Nas X", title: "Old Town Road", year: "2019" },
  { youtubeId: "zABLecsR5UE", artist: "Justin Timberlake", title: "Can't Stop The Feeling!", year: "2016" },
  { youtubeId: "CevxZvSJLk8", artist: "Katy Perry", title: "Roar", year: "2013" },
  { youtubeId: "QGJuMBdaqIw", artist: "Katy Perry", title: "Firework", year: "2010" },
  { youtubeId: "09R8_2nJtjg", artist: "Maroon 5", title: "Sugar", year: "2015" },
  { youtubeId: "YBHQbu5rbdQ", artist: "Black Eyed Peas", title: "I Gotta Feeling", year: "2009" },
  { youtubeId: "6Mgqbai3fKo", artist: "Pitbull ft. Ke$ha", title: "Timber", year: "2013" },
  { youtubeId: "8v_4O44sfjM", artist: "Christina Perri", title: "A Thousand Years", year: "2011" },
  { youtubeId: "KQ6zr6kCPj8", artist: "LMFAO", title: "Party Rock Anthem", year: "2011" },
  { youtubeId: "zpzdgmqIHOQ", artist: "Meghan Trainor", title: "All About That Bass", year: "2014" },
  { youtubeId: "HMUDVMiITOU", artist: "DJ Snake & Lil Jon", title: "Turn Down for What", year: "2013" },
  { youtubeId: "LjhCEhWiKXk", artist: "Bruno Mars", title: "Just The Way You Are", year: "2010" },
  { youtubeId: "pRpeEdMmmQ0", artist: "Shakira ft. Freshlyground", title: "Waka Waka", year: "2010" },
  { youtubeId: "nfWlot6h_JM", artist: "Taylor Swift", title: "Shake It Off", year: "2014" },
  { youtubeId: "e-ORhEE9VVg", artist: "Taylor Swift", title: "Blank Space", year: "2014" },
  { youtubeId: "9bZkp7q19f0", artist: "PSY", title: "Gangnam Style", year: "2012" },
  { youtubeId: "JF8BRvqGCNs", artist: "Lady Gaga", title: "Bad Romance", year: "2009" },
  { youtubeId: "KlyXNRrsk4A", artist: "Shakira ft. Wyclef Jean", title: "Hips Don't Lie", year: "2006" },
  { youtubeId: "RBumgq5yVrA", artist: "Passenger", title: "Let Her Go", year: "2012" },
  { youtubeId: "xUNqsfFUwhY", artist: "Charlie Puth", title: "We Don't Talk Anymore", year: "2016" },
  { youtubeId: "PIh2xe4jnpk", artist: "Owl City", title: "Fireflies", year: "2009" },
  { youtubeId: "YnwfTHpnGLY", artist: "Drake", title: "Hotline Bling", year: "2015" },
  ],
    Hits2000to2025: [
        { youtubeId: "7Qp5vcuMIlk", artist: "Ed Sheeran", title: "Castle on the Hill", year: "2017" },
        { youtubeId: "8UVNT4wvIGY", artist: "Gotye ft. Kimbra", title: "Somebody That I Used to Know", year: "2011" },
        { youtubeId: "fLexgOxsZu0", artist: "Bruno Mars", title: "The Lazy Song", year: "2011" },
        { youtubeId: "qrO4YZeyl0I", artist: "Lady Gaga", title: "Bad Romance", year: "2009" },
        { youtubeId: "34Na4j8AVgA", artist: "The Weeknd", title: "Starboy", year: "2016" },
        { youtubeId: "2zNSgSzhBfM", artist: "Macklemore & Ryan Lewis", title: "Can't Hold Us", year: "2012" },
        { youtubeId: "r7qovpFAGrQ", artist: "Lil Nas X", title: "Old Town Road", year: "2019" },
        { youtubeId: "IcrbM1l_BoI", artist: "Avicii", title: "Wake Me Up", year: "2013" },
        { youtubeId: "kTJczUoc26U", artist: "The Kid LAROI & Justin Bieber", title: "Stay", year: "2021" },
        { youtubeId: "0KSOMA3QBU0", artist: "Katy Perry", title: "Dark Horse", year: "2013" },
        { youtubeId: "4NRXx6U8ABQ", artist: "The Weeknd", title: "Blinding Lights", year: "2019" },
        { youtubeId: "pRpeEdMmmQ0", artist: "Shakira", title: "Waka Waka", year: "2010" },
        { youtubeId: "kJQP7kiw5Fk", artist: "Luis Fonsi & Daddy Yankee ft. Justin Bieber", title: "Despacito", year: "2017" },
        { youtubeId: "qeMFqkcPYcg", artist: "Eurythmics", title: "Sweet Dreams", year: "2000" },
        { youtubeId: "RgKAFK5djSk", artist: "Wiz Khalifa ft. Charlie Puth", title: "See You Again", year: "2015" },
        { youtubeId: "OPf0YbXqDm0", artist: "Mark Ronson ft. Bruno Mars", title: "Uptown Funk", year: "2014" },
        { youtubeId: "fRh_vgS2dFE", artist: "Justin Bieber", title: "Sorry", year: "2015" },
        { youtubeId: "lp-EO5I60KA", artist: "Ed Sheeran", title: "Thinking Out Loud", year: "2014" },
        { youtubeId: "Y1xs_xPY-AI", artist: "One Republic", title: "Counting Stars", year: "2013" },
        { youtubeId: "KRaWnd3LJfs", artist: "Maroon 5", title: "Payphone", year: "2012" },
        { youtubeId: "eh6P9AXZ3L8", artist: "Maroon 5", title: "Moves Like Jagger", year: "2011" },
        { youtubeId: "hLQl3WQQoQ0", artist: "Adele", title: "Someone Like You", year: "2011" },
        { youtubeId: "rYEDA3JcQqw", artist: "Adele", title: "Rolling in the Deep", year: "2010" },
        { youtubeId: "kffacxfA7G4", artist: "Justin Bieber", title: "Baby ft. Ludacris", year: "2010" },
        { youtubeId: "_CL6n0FJZpk", artist: "Dr. Dre ft. Snoop Dogg", title: "Still D.R.E.", year: "2000" },
        { youtubeId: "KQ6zr6kCPj8", artist: "LMFAO", title: "Party Rock Anthem", year: "2011" },
        { youtubeId: "bpOSxM0rNPM", artist: "Arctic Monkeys", title: "Do I Wanna Know?", year: "2013" },
        { youtubeId: "uSD4vsh1zDA", artist: "The Black Eyed Peas", title: "I Gotta Feeling", year: "2009" },
        { youtubeId: "nPvuNsRccVw", artist: "Bruno Mars", title: "Treasure", year: "2013" },
        { youtubeId: "SR6iYWJxHqs", artist: "Bruno Mars", title: "Grenade", year: "2010" },
        { youtubeId: "9bZkp7q19f0", artist: "PSY", title: "Gangnam Style", year: "2012" },
        { youtubeId: "pt8VYOfr8To", artist: "Taylor Swift", title: "Shake It Off", year: "2014" },
        { youtubeId: "e-ORhEE9VVg", artist: "Taylor Swift", title: "Blank Space", year: "2014" },
        { youtubeId: "QcIy9NiNbmo", artist: "Taylor Swift", title: "Bad Blood", year: "2015" },
        { youtubeId: "uuZE_IRwLNI", artist: "Justin Timberlake", title: "Mirrors", year: "2013" },
        { youtubeId: "DK_0jXPuIr0", artist: "Justin Bieber", title: "What Do You Mean?", year: "2015" },
        { youtubeId: "8xg3vE8Ie_E", artist: "Taylor Swift", title: "Love Story", year: "2008" },     
  { youtubeId: "KlyXNRrsk4A", artist: "Shakira ft. Wyclef Jean", title: "Hips Don't Lie", year: "2006" },
  { youtubeId: "4m1EFMoRFvY", artist: "Beyoncé", title: "Single Ladies", year: "2008" },
  { youtubeId: "YVkUvmDQ3HY", artist: "Eminem", title: "Without Me", year: "2002" },
  { youtubeId: "KEI4qSrkPAs", artist: "Lady Gaga", title: "Just Dance", year: "2008" },
  { youtubeId: "1k8craCGpgs", artist: "Doja Cat", title: "Say So", year: "2020" },
  { youtubeId: "zABLecsR5UE", artist: "Justin Timberlake", title: "Can't Stop The Feeling!", year: "2016" },
  { youtubeId: "CevxZvSJLk8", artist: "Katy Perry", title: "Roar", year: "2013" },
  { youtubeId: "QGJuMBdaqIw", artist: "Katy Perry", title: "Firework", year: "2010" },
  { youtubeId: "09R8_2nJtjg", artist: "Maroon 5", title: "Sugar", year: "2015" },
  { youtubeId: "6Mgqbai3fKo", artist: "Pitbull ft. Ke$ha", title: "Timber", year: "2013" },
  { youtubeId: "8v_4O44sfjM", artist: "Christina Perri", title: "A Thousand Years", year: "2011" },
  { youtubeId: "zpzdgmqIHOQ", artist: "Meghan Trainor", title: "All About That Bass", year: "2014" },
  { youtubeId: "HMUDVMiITOU", artist: "DJ Snake & Lil Jon", title: "Turn Down for What", year: "2013" },
  ],
  };
  
  const iframeRef = useRef(null);

  const addPlayer = () => {
    if (newPlayer.trim() !== "" && players.length < 10) {
      setPlayers([...players, newPlayer]);
      setScores({ ...scores, [newPlayer]: 0 });
      setPlayerSkipCount({ ...playerSkipCount, [newPlayer]: 3 });
      setNewPlayer("");
    }
  };

  const startGame = () => {
    if (players.length > 0 && roundLimit > 0) {
      setGameStarted(true);
      setRoundCount(0);
      setTurnCount(1); // Start turn counter at 1
      loadRandomSong();
    } else {
      alert("Please add players and set a round limit.");
    }
  };

  const loadRandomSong = () => {
    const playlist = playlists[selectedPlaylist];
    const availableSongs = playlist.filter(song => !playedSongs.includes(song.youtubeId));

    if (availableSongs.length > 0) {
      const randomSong = availableSongs[Math.floor(Math.random() * availableSongs.length)];
      setSong(randomSong);
      setPlayedSongs([...playedSongs, randomSong.youtubeId]);
      setCorrectAnswersVisible(false);
    } else {
      setPlayedSongs([]);
      loadRandomSong();
    }
  };

  const checkAnswer = () => {
    let points = 0;
    if (playerAnswers.artist.toLowerCase() === song.artist.toLowerCase()) points += 1;
    if (playerAnswers.title.toLowerCase() === song.title.toLowerCase()) points += 1;
    if (playerAnswers.year === song.year) points += 1;

    const playerName = players[currentPlayerIndex];
    setScores({ ...scores, [playerName]: scores[playerName] + points });

    setLastResult({
      correctArtist: song.artist,
      correctTitle: song.title,
      correctYear: song.year,
      playerPoints: points,
    });

    setCorrectAnswersVisible(true);
  };

  const nextRound = () => {
    if (roundCount < roundLimit - 1) {
      setRoundCount(roundCount + 1);
      setTurnCount(turnCount + 1); // Increment turn counter
      setPlayerAnswers({ artist: "", title: "", year: "" });
      setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
      setLastResult(null);
      loadRandomSong();
    } else {
      alert("Game Over! You've reached the round limit.");
      endGame();
    }
  };

  const skipSong = () => {
    loadRandomSong();
  };

  const skipSongPowerUp = () => {
    const currentPlayer = players[currentPlayerIndex];
    const remainingSkips = playerSkipCount[currentPlayer];
    if (remainingSkips > 0) {
      setPlayerSkipCount({ ...playerSkipCount, [currentPlayer]: remainingSkips - 1 });
      loadRandomSong();
    } else {
      alert("You have no skip power-ups left!");
    }
  };

  const skipSongForward = () => {
    if (iframeRef.current) {
      const player = new window.YT.Player(iframeRef.current);
      player.seekTo(player.getCurrentTime() + 10);
    }
  };

  const toggleAdminMode = () => {
    setAdminMode(!adminMode);
  };

  const modifyPlayerScore = (playerName, points) => {
    setScores({
      ...scores,
      [playerName]: scores[playerName] + points,
    });
  };

  const endGame = () => {
    setGameStarted(false);
    setRoundCount(0);
    setTurnCount(0);
    setPlayedSongs([]);
    setScores({});
    setPlayerAnswers({ artist: "", title: "", year: "" });
    setCurrentPlayerIndex(0);
  };

  const adminSkipRound = () => {
    loadRandomSong();  // This skips the current round without affecting the player skips
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white font-sans">
      {!gameStarted ? (
        <div className="max-w-md mx-auto p-4 bg-gradient-to-t from-purple-700 to-blue-600 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Hitster Game</h1>
          <input
            type="text"
            placeholder="Enter player name"
            value={newPlayer}
            onChange={(e) => setNewPlayer(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addPlayer()}
            className="p-2 rounded-lg mb-2 w-full"
          />
          <button
            onClick={addPlayer}
            disabled={players.length >= 10}
            className="p-2 bg-yellow-500 hover:bg-yellow-400 rounded-lg text-lg w-full mb-2"
          >
            Add Player
          </button>
          <button
            onClick={startGame}
            disabled={players.length < 1 || roundLimit <= 0}
            className="p-2 bg-green-500 hover:bg-green-400 rounded-lg text-lg w-full"
          >
            Start Game
          </button>

          <div className="mt-4">
            <label className="text-lg">Select Playlist: </label>
            <select
              value={selectedPlaylist}
              onChange={(e) => setSelectedPlaylist(e.target.value)}
              className="p-2 rounded-lg mt-2"
            >
              <option value="RockPlaylist">Rock Playlist</option>
              <option value="AllTimePopular">All Time Popular</option>
              <option value="Hits2000to2025">2000-2025 Hits</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="text-lg">Set Round Limit: </label>
            <input
              type="number"
              min="1"
              value={roundLimit}
              onChange={(e) => setRoundLimit(parseInt(e.target.value, 10))}
              className="p-2 rounded-lg mt-2"
            />
          </div>

          <ul className="mt-4">
            {players.map((player, index) => (
              <li key={index} className="text-lg">{player}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex">
          {/* Left side - Player Info and Scores */}
          <div className="w-1/4 p-4 bg-gradient-to-t from-purple-700 to-blue-600 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">Current Player: {players[currentPlayerIndex]}</h2>
            <h3 className="text-xl text-center mb-4">Turn: {turnCount}</h3>

            <h3 className="text-xl font-bold mb-4">Scores:</h3>
            <ul className="text-lg">
              {Object.entries(scores).map(([name, score]) => (
                <li key={name}>{name}: {score} points</li>
              ))}
            </ul>

            {/* Admin Mode: Add points and manage skips */}
            {adminMode && (
              <div>
                <h3 className="text-lg font-bold mb-4">Admin Controls:</h3>
                {players.map((player) => (
                  <div key={player} className="flex justify-between items-center mb-2">
                    <span>{player}: {scores[player]} points</span>
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

            {/* Admin Mode Toggle */}
            <div className="mt-4">
              <button
                onClick={toggleAdminMode}
                className="p-2 bg-indigo-500 hover:bg-indigo-400 rounded-lg text-white"
              >
                {adminMode ? "Exit Admin Mode" : "Enter Admin Mode"}
              </button>
            </div>
          </div>

          {/* Right side - Game Controls */}
          <div className="w-3/4 p-4 bg-gradient-to-t from-purple-700 to-blue-600 rounded-lg shadow-lg">
            {song && (
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setVideoVisible(!videoVisible)}
                  className="p-2 bg-orange-500 hover:bg-orange-400 rounded-lg mb-4"
                >
                  {videoVisible ? "Hide Video" : "Show Video"}
                </button>
                <div style={{ position: "relative", width: "300px", height: "200px" }}>
                  {!videoVisible && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "125px", // Keep the box at the same position as the video
                        width: "100%",
                        height: "100%",
                        backgroundColor: "black",
                        zIndex: 2, // Set higher z-index for the box to ensure it is above the video
                      }}
                    ></div>
                  )}

                  <iframe
                    ref={iframeRef}
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/${song.youtubeId}?autoplay=1`}
                    title="YouTube Video"
                    allow="autoplay"
                    frameBorder="0"
                    style={{
                      position: "absolute",
                      left: "125px",
                      zIndex: 1, 
                    }}
                  ></iframe>
                </div>
              </div>
            )}

            {/* Answer Inputs */}
            <div className="flex justify-between mb-4">
              <input
                type="text"
                placeholder="Artist Name"
                value={playerAnswers.artist}
                onChange={(e) => setPlayerAnswers({ ...playerAnswers, artist: e.target.value })}
                className="p-2 rounded-lg w-full mr-2"
              />
              <input
                type="text"
                placeholder="Song Title"
                value={playerAnswers.title}
                onChange={(e) => setPlayerAnswers({ ...playerAnswers, title: e.target.value })}
                className="p-2 rounded-lg w-full mr-2"
              />
              <input
                type="text"
                placeholder="Release Year"
                value={playerAnswers.year}
                onChange={(e) => setPlayerAnswers({ ...playerAnswers, year: e.target.value })}
                className="p-2 rounded-lg w-full"
              />
            </div>
            <button
              onClick={checkAnswer}
              className="p-2 bg-blue-500 hover:bg-blue-400 rounded-lg text-lg w-full mb-4"
            >
              Submit Answer
            </button>

            {lastResult && (
              <div className="bg-yellow-500 p-4 rounded-lg mb-4">
                <h3>Correct Answer:</h3>
                <p>Artist: {lastResult.correctArtist}</p>
                <p>Title: {lastResult.correctTitle}</p>
                <p>Year: {lastResult.correctYear}</p>
                <p>Points Earned: {lastResult.playerPoints}</p>
                <button
                  onClick={nextRound}
                  className="p-2 bg-green-500 hover:bg-green-400 rounded-lg"
                >
                  Next Round
                </button>
              </div>
            )}

            {/* Skip Song Button */}
            <div className="mt-4">
              <button
                onClick={skipSongPowerUp}
                className="p-2 bg-purple-500 hover:bg-purple-400 rounded-lg text-white"
              >
                Skip Turn (You have {playerSkipCount[players[currentPlayerIndex]]} skips left)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}