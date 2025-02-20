import { useState, useEffect, useRef } from "react";

const playlists = {
  RockPlaylist: [
    { youtubeId: "erG5rgNYSdk", artist: "Weezer", title: "Island In The Sun", year: "2001" },
    { youtubeId: "3gd8iBa5ag0", artist: "Queen", title: "Bohemian Rhapsody", year: "1975" },
    { youtubeId: "1w7OgIMMRc4", artist: "Guns N' Roses", title: "Sweet Child O' Mine", year: "1987" },
    { youtubeId: "hTWKbfoikeg", artist: "Nirvana", title: "Smells Like Teen Spirit", year: "1991" },
    { youtubeId: "0J2QdDbelmY", artist: "The White Stripes", title: "Seven Nation Army", year: "2003" },
    { youtubeId: "gYCTXzOTnXg", artist: "AC/DC", title: "Back in Black", year: "1980" },
    { youtubeId: "gYCTXzOTnXg", artist: "Green Day", title: "Boulevard of Broken Dreams", year: "2004" },
    { youtubeId: "eVTXPUF4Oz4", artist: "Linkin Park", title: "In The End", year: "2000" },
    { youtubeId: "XFkzRNyygfk", artist: "Radiohead", title: "Creep", year: "1993" },
    { youtubeId: "eBG7P-K-r1Y", artist: "Foo Fighters", title: "Everlong", year: "1997" },
    { youtubeId: "vabnZ9-ex7o", artist: "System of a Down", title: "Toxicity", year: "2001" },
    { youtubeId: "CSvFpBOe8eY", artist: "System of a Down", title: "Chop Suey!", year: "2001" },
    { youtubeId: "dxp9w9Ggehc", artist: "Linkin Park", title: "Numb", year: "2003" },
    { youtubeId: "Ee_uujKuJMI", artist: "Green Day", title: "American Idiot", year: "2004" },
    { youtubeId: "lDK9QqIzhwk", artist: "Bon Jovi", title: "Livin' On A Prayer", year: "1986" },
    { youtubeId: "E0ozmU9cJDg", artist: "Red Hot Chili Peppers", title: "GLvohMXgcBo", year: "1992" },
    { youtubeId: "yuFI5KSPAt4", artist: "Red Hot Chili Peppers", title: "Snow (Hey Oh)", year: "2006" },
    { youtubeId: "YlUKcNNmywk", artist: "Red Hot Chili Peppers", title: "Californication", year: "1999" },
    { youtubeId: "SBjQ9tuuTJQ", artist: "Foo Fighters", title: "The Pretender", year: "2007" },
    { youtubeId: "m2zUrruKjDQ", artist: "The Killers", title: "Mr. Brightside", year: "2004" },
    { youtubeId: "l482T0yNkeo", artist: "AC/DC", title: "Highway to Hell", year: "1979" },
    { youtubeId: "X4bgXH3sJ2Q", artist: "Iron Maiden", title: "The Trooper", year: "1983" },
    { youtubeId: "tAGnKpE4NCI", artist: "Metallica", title: "Nothing Else Matters", year: "1991" },
    { youtubeId: "CD-E-LDc384", artist: "Metallica", title: "Enter Sandman", year: "1991" },
    { youtubeId: "bWXazVhlyxQ", artist: "Rage Against The Machine", title: "Killing In The Name", year: "1992" },
    { youtubeId: "7QU1nvuxaMA", artist: "Audioslave", title: "Like a Stone", year: "2002" },
    { youtubeId: "3YxaaGgTQYM", artist: "Evanescence", title: "Bring Me To Life", year: "2003" },
    { youtubeId: "3mbBbFH9fAg", artist: "Soundgarden", title: "Black Hole Sun", year: "1994" },
    { youtubeId: "hmCj7k2ZHuo", artist: "Simple Plan", title: "Welcome To My Life", year: "2004" },
    { youtubeId: "MOdmNxjTh3Q", artist: "Fall Out Boy", title: "Sugar, We're Goin Down", year: "2005" },
    { youtubeId: "eebfMFzJHNs", artist: "Green Day", title: "Warning", year: "2009" },
    { youtubeId: "7iNbnineUCI", artist: "The Offspring", title: "The Kids Aren't Alright", year: "1998" },
    { youtubeId: "RRKJiM9Njr8", artist: "My Chemical Romance", title: "Welcome to the Black Parade", year: "2006" },
    { youtubeId: "CxKWTzr-k6s", artist: "Pearl Jam", title: "Even Flow", year: "1991" },
    { youtubeId: "araU0fZj6oQ", artist: "Staind", title: "It's Been Awhile", year: "2001" },
    { youtubeId: "PiihIwhjIvQ", artist: "Papa Roach", title: "Last Resort", year: "2000" },
    { youtubeId: "jRGrNDV2mKc", artist: "Korn", title: "Freak On a Leash", year: "1998" },
    { youtubeId: "xmUZ6nCFNoU", artist: "The Smashing Pumpkins", title: "Today", year: "1993" },
    { youtubeId: "3c4_jTnsegM", artist: "Thirty Seconds to Mars", title: "The Kill", year: "2005" },
    { youtubeId: "YB8ALvSUK_g", artist: "Army of Anyone", title: "Father Figure", year: "2006" },
    { youtubeId: "DWaB4PXCwFU", artist: "Breaking Benjamin", title: "The Diary of Jane", year: "2006" },
    { youtubeId: "8295rOMvtQI", artist: "Incubus", title: "Wish You Were Here", year: "2001" },
    { youtubeId: "JnfyjwChuNU", artist: "Red Hot Chili Peppers", title: "By the Way", year: "2002" },
    { youtubeId: "Nco_kh8xJDs", artist: "Alice In Chains", title: "Would?", year: "1992" },
    { youtubeId: "CSvFpBOe8eY", artist: "System of a Down", title: "Chop Suey!", year: "2001" },
    { youtubeId: "OYjZK_6i37M", artist: "Godsmack", title: "I Stand Alone", year: "2002" },
    { youtubeId: "HAkHqYlqops", artist: "Matchbox Twenty", title: "Push", year: "1996" },
    { youtubeId: "n9h7hU6_VI4", artist: "Three Days Grace", title: "Animal I Have Become", year: "2006" },
    { youtubeId: "lL2ZwXj1tXM", artist: "Three Days Grace", title: "Never Too Late", year: "2006" },
    { youtubeId: "04F4xlWSFh0E", artist: "Drowning Pool", title: "Bodies", year: "2001" },
    { youtubeId: "1mjlM_RnsVE", artist: "Skillet", title: "Monster", year: "2009" },
    { youtubeId: "5NPBIwQyPWE", artist: "Avril Lavigne", title: "Complicated", year: "2010" },
    { youtubeId: "NUTGr5t3MoY", artist: "Green Day", title: "Basket Case", year: "1994" },
    { youtubeId: "E0ozmU9cJDg", artist: "Metallica", title: "Master Of Puppets", year: "1986" },
    { youtubeId: "z5vA9CwZKNY", artist: "Hollywood Undead", title: "Everywhere I Go", year: "2009" },
    { youtubeId: "QkF3oxziUI4", artist: "Led Zeppelin", title: "Stairway to Heaven", year: "1971" },
    { youtubeId: "-tJYN-eG1zk", artist: "Queen", title: "We Will Rock You", year: " 1977" },
    { youtubeId: "bx1Bh8ZvH84", artist: "Oasis", title: "Wonderwall", year: "1995" },
    { youtubeId: "QkF3oxziUI4", artist: "Led Zeppelin", title: "Stairway to Heaven", year: "1971" },
    { youtubeId: "vabnZ9-ex7o", artist: "Nirvana", title: "Come As You Are", year: "1991" },
    ],
  AllTimePopular: [
    { youtubeId: "Vds8ddYXYZY", artist: "Ed Sheeran", title: "Shape of You", year: "2017" },
{ youtubeId: "RgKAFK5djSk", artist: "Wiz Khalifa ft. Charlie Puth", title: "See You Again", year: "2015" },
{ youtubeId: "OPf0YbXqDm0", artist: "Mark Ronson ft. Bruno Mars", title: "Uptown Funk", year: "2014" },
{ youtubeId: "fHI8X4OXluQ", artist: "The Weeknd", title: "Blinding Lights", year: "2019" },
{ youtubeId: "dQw4w9WgXcQ", artist: "Rick Astley", title: "Never Gonna Give You Up", year: "1987" },
{ youtubeId: "fRh_vgS2dFE", artist: "Justin Bieber", title: "Sorry", year: "2015" },
{ youtubeId: "IcrbM1l_BoI", artist: "Avicii", title: "Wake Me Up", year: "2013" },
{ youtubeId: "uHpcbSsPrRE", artist: "Taylor Swift", title: "Blank Space", year: "2014" },
{ youtubeId: "xizN47Box_Y", artist: "The Weeknd", title: "Starboy", year: "2016" },
{ youtubeId: "DUT5rEU6pqM", artist: "Shakira ft. Wyclef Jean", title: "Hips Don't Lie", year: "2006" },
{ youtubeId: "4m1EFMoRFvY", artist: "Beyoncé", title: "Single Ladies", year: "2008" },
{ youtubeId: "YVkUvmDQ3HY", artist: "Eminem", title: "Without Me", year: "2002" },
{ youtubeId: "nfWlot6h_JM", artist: "Taylor Swift", title: "Shake It Off", year: "2014" },
{ youtubeId: "2Abk1jAONjw", artist: "Lady Gaga", title: "Just Dance", year: "2008" },
{ youtubeId: "pok8H_KF1FA", artist: "Doja Cat", title: "Say So", year: "2020" },
{ youtubeId: "kffacxfA7G4", artist: "Justin Bieber ft. Ludacris", title: "Baby", year: "2010" },
{ youtubeId: "qeMFqkcPYcg", artist: "Eurythmics", title: "Sweet Dreams", year: "1983" },
{ youtubeId: "Z85lxckrtzg", artist: "Michael Jackson", title: "Thriller", year: "1982" },
{ youtubeId: "2yJgwwDcgV8", artist: "Nyan Cat", title: "Nyan Cat", year: "2011" },
{ youtubeId: "SR6iYWJxHqs", artist: "Bruno Mars", title: "Grenade", year: "2010" },
{ youtubeId: "tsMDKjb54EM", artist: "LMFAO", title: "Party Rock Anthem", year: "2011" },
{ youtubeId: "QK8mJJJvaes", artist: "Macklemore & Ryan Lewis", title: "Thrift Shop", year: "2012" },
{ youtubeId: "8SbUC-UaAxE", artist: "Guns N' Roses", title: "November Rain", year: "1992" },
{ youtubeId: "k85mRPqvMbE", artist: "Crazy Frog", title: "Axel F", year: "2009" },
{ youtubeId: "L0MK7qz13bU", artist: "FROZEN", title: "Let It Go", year: "2013" },
{ youtubeId: "y6120QOlsfU", artist: "Darude", title: "Sandstorm", year: "2000" },
{ youtubeId: "r7qovpFAGrQ", artist: "Lil Nas X", title: "Old Town Road", year: "2019" },
{ youtubeId: "ru0K8uYEZWw", artist: "Justin Timberlake", title: "Can't Stop The Feeling!", year: "2016" },
{ youtubeId: "CevxZvSJLk8", artist: "Katy Perry", title: "Roar", year: "2013" },
{ youtubeId: "QGJuMBdaqIw", artist: "Katy Perry", title: "Firework", year: "2010" },
{ youtubeId: "N1BcpzPGlYQ", artist: "Maroon 5", title: "Sugar", year: "2015" },
{ youtubeId: "uSD4vsh1zDA", artist: "Black Eyed Peas", title: "I Gotta Feeling", year: "2009" },
{ youtubeId: "hHUbLv4ThOo", artist: "Pitbull ft. Ke$ha", title: "Timber", year: "2013" },
{ youtubeId: "rtOvBOTyX00", artist: "Christina Perri", title: "A Thousand Years", year: "2011" },
{ youtubeId: "Ng_t5D8tVvM", artist: "LMFAO", title: "Sorry For Party Rocking", year: "2011" },
{ youtubeId: "7PCkvCPvDXk", artist: "Meghan Trainor", title: "All About That Bass", year: "2014" },
{ youtubeId: "HMUDVMiITOU", artist: "DJ Snake & Lil Jon", title: "Turn Down for What", year: "2013" },
{ youtubeId: "LjhCEhWiKXk", artist: "Bruno Mars", title: "Just The Way You Are", year: "2010" },
{ youtubeId: "pRpeEdMmmQ0", artist: "Shakira ft. Freshlyground", title: "Waka Waka", year: "2010" },
{ youtubeId: "e-ORhEE9VVg", artist: "Taylor Swift", title: "Blank Space", year: "2014" },
{ youtubeId: "_5-QkAVRkqU", artist: "Lady Gaga", title: "Bad Romance", year: "2009" },
{ youtubeId: "RBumgq5yVrA", artist: "Passenger", title: "Let Her Go", year: "2012" },
{ youtubeId: "3AtDnEC4zak", artist: "Charlie Puth", title: "We Don't Talk Anymore", year: "2016" },
{ youtubeId: "psuRGfAaju4", artist: "Owl City", title: "Fireflies", year: "2009" },
{ youtubeId: "zt6aRKpf9T4", artist: "Drake", title: "Hotline Bling", year: "2015" },
{ youtubeId: "QNJL6nfu__Q", artist: "Michael Jackson", title: "They Don't Care About Us", year: "2009" },
{ youtubeId: "NUTGr5t3MoY", artist: "Green Day", title: "Basket Case", year: "1994" },
{ youtubeId: "ZyhrYis509A", artist: "Aqua", title: "Barbie Girl", year: "1997" },
{ youtubeId: "etSbOs3aUqI", artist: "Gary Jules", title: "Mad World", year: "2001" },
{ youtubeId: "bx1Bh8ZvH84", artist: "Oasis", title: "Wonderwall", year: "1995" },
{ youtubeId: "JRfuAukYTKg", artist: "David Guetta ft Sia", title: "Titanium", year: "2011" },
{ youtubeId: "pt8VYOfr8To", artist: "Taylor Swift", title: "Shake It Off", year: "2014" },
{ youtubeId: "KlyXNRrsk4A", artist: "Katy Perry", title: "Last Friday Night", year: "2011" },
{ youtubeId: "pt8VYOfr8To", artist: "Britney Spears", title: "Work Bitch", year: "2013" },
{ youtubeId: "PIh2xe4jnpk", artist: "MAGIC!", title: "Rude", year: "2013" },
{ youtubeId: "xUNqsfFUwhY", artist: "The Beatles", title: "Here Comes The Sun", year: "1969" },
{ youtubeId: "YBHQbu5rbdQ", artist: "Fifth Harmony", title: "Worth It", year: "2015" },
{ youtubeId: "zABLecsR5UE", artist: "Lewis Capaldi", title: "Someone You Loved", year: "2019" },
{ youtubeId: "nlcIKh6sBtc", artist: "Lorde", title: "Royals", year: "2013" },
{ youtubeId: "U0CGsw6h60k", artist: "Rihanna", title: "What's my name?", year: "2010" },
{ youtubeId: "1G4isv_Fylg", artist: "Coldplay", title: "Paradise", year: "2011" },
{ youtubeId: "YykjpeuMNEk", artist: "Coldplay", title: "Hymn For The Weekend", year: "2016" },
{ youtubeId: "1k8craCGpgs", artist: "Journey", title: "Don't Stop Believin'", year: "1981" },
{ youtubeId: "KEI4qSrkPAs", artist: "The Weeknd", title: "an't Feel My Face", year: "2015" },
{ youtubeId: "hTWKbfoikeg", artist: "Nirvana", title: "Smells Like Teen Spirit", year: "1991" },
{ youtubeId: "YkgkThdzX-8", artist: "John Lennon", title: "Imagine", year: "1971" },
{ youtubeId: "ftjEcrrf7r0", artist: "U2", title: "One", year: "1992" },
{ youtubeId: "fJ9rUzIMcZQ", artist: "Queen", title: "Bohemian Rhapsody", year: "1975" },
{ youtubeId: "A_MjCqQoLLA", artist: "The Beatles", title: "Hey Jude", year: "1968" },
{ youtubeId: "IwOfCgkyEj0", artist: "Bob Dylan", title: "Like a Rolling Stone", year: "1965" },
{ youtubeId: "nrIPxlFzDi0", artist: "The Rolling Stones", title: "(I Can't Get No) Satisfaction", year: "1965" },
{ youtubeId: "02D2T3wGCYg", artist: "Sex Pistols", title: "God Save the Queen", year: "1977" },
{ youtubeId: "1w7OgIMMRc4", artist: "Guns N' Roses", title: "Sweet Child O' Mine", year: "1987" },
{ youtubeId: "EfK-WX2pa8c", artist: "The Clash", title: "London Calling", year: "1979" },
{ youtubeId: "-Y1i2vvzv8Y", artist: "Eagles", title: "Hotel California", year: "1977" },
{ youtubeId: "GlPlfCy1urI", artist: "Elton John", title: "Your Song", year: "1970" },
{ youtubeId: "Eab_beh07HU", artist: "The Beach Boys", title: "Good Vibrations", year: "1966" },
{ youtubeId: "PWgvGjAhvIw", artist: "OutKast", title: "Hey Ya!", year: "2003" },
{ youtubeId: "mrZRURcb1cM", artist: "Fleetwood Mac", title: "Dreams", year: "1977" },
{ youtubeId: "FPoKiGQzbSQ", artist: "Missy Elliott", title: "Get Ur Freak On", year: "2001" },
{ youtubeId: "wEBlaMOmKV4", artist: "Sam Cooke", title: "A Change Is Gonna Come", year: "1964" },
{ youtubeId: "8PaoLy7PHwk", artist: "Public Enemy", title: "Fight the Power", year: "1989" },
{ youtubeId: "6FOUqQt3Kg0", artist: "Aretha Franklin", title: "Respect", year: "1967" },
{ youtubeId: "H-kA3UtBj4M", artist: "Marvin Gaye", title: "What's Going On", year: "1971" },
{ youtubeId: "HtUH9z_Oey8", artist: "The Beatles", title: "Strawberry Fields Forever", year: "1967" },
{ youtubeId: "vabnZ9-ex7o", artist: "Nirvana", title: "Come as You Are", year: "1991" },
{ youtubeId: "oRdxUFDoQe0", artist: "Michael Jackson", title: "Beat It", year: "1982" },
{ youtubeId: "UG3VcCAlUgE", artist: "Prince", title: "When Doves Cry", year: "1984" },
{ youtubeId: "79fzeNUqQbQ", artist: "Madonna", title: "Like a Prayer", year: "1989" },
{ youtubeId: "OMOGaugKpzs", artist: "The Police", title: "Every Breath You Take", year: "1983" },
{ youtubeId: "H3axP4norfk", artist: "50 Cent", title: "In Da Club", year: "2003" },
{ youtubeId: "uelHwf8o7_U", artist: "Eminem", title: "Love The Way You Lie", year: "2010" },
{ youtubeId: "YVkUvmDQ3HY", artist: "Eminem", title: "Lose Yourself", year: "2002" },
{ youtubeId: "PsO6ZnUZI0g", artist: "Kanye West", title: "Stronger", year: "2007" },
{ youtubeId: "uSD4vsh1zDA", artist: "Black Eyed Peas", title: "I Gotta Feeling", year: "2009" },
{ youtubeId: "GeZZr_p6vB8", artist: "Nelly", title: "Hot In Herre", year: "2002" },
{ youtubeId: "6vwNcNOTVzY", artist: "Kanye West", title: "Gold Digger", year: "2005" },
{ youtubeId: "c4Z2Ft-JIp8", artist: "50 Cent", title: "Candy Shop", year: "2005" },
{ youtubeId: "6uikJTnmtgw", artist: "Jay-Z", title: "99 Problems", year: "2004" },
{ youtubeId: "pZG7IK99OvI", artist: "Ludacris", title: "Stand Up", year: "2003" },
{ youtubeId: "GxBSyx85Kp8", artist: "Usher ft. Lil Jon, Ludacris", title: "Yeah! Yeah! Yeah!", year: "2004" },
{ youtubeId: "_CL6n0FJZpk", artist: "Dr. Dre", title: "Still D.R.E.", year: "1999" },
{ youtubeId: "CvBfHwUxHIk", artist: "Rihanna ft. JAY-Z", title: "Umbrella", year: "2007" },
{ youtubeId: "8gyLR4NfMiI", artist: "Chris Brown ft. Lil Wayne, Busta Rhymes", title: "Look at Me Now", year: "2011" },
{ youtubeId: "uelHwf8o7_U", artist: "Eminem", title: "Love The Way You Lie", year: "2010" }


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
      { youtubeId: "kJQP7kiw5Fk", artist: "Luis Fonsi ft. Daddy Yankee", title: "Despacito", year: "2017" },
      { youtubeId: "qeMFqkcPYcg", artist: "Eurythmics", title: "Sweet Dreams", year: "2000" },
      { youtubeId: "RgKAFK5djSk", artist: "Wiz Khalifa ft. Charlie Puth", title: "See You Again", year: "2015" },
      { youtubeId: "OPf0YbXqDm0", artist: "Mark Ronson ft. Bruno Mars", title: "Uptown Funk", year: "2014" },
      { youtubeId: "fRh_vgS2dFE", artist: "Justin Bieber", title: "Sorry", year: "2015" },
      { youtubeId: "lp-EO5I60KA", artist: "Ed Sheeran", title: "Thinking Out Loud", year: "2014" },
      { youtubeId: "hT_nvWreIhg", artist: "One Republic", title: "Counting Stars", year: "2013" },
      { youtubeId: "KRaWnd3LJfs", artist: "Maroon 5", title: "Payphone", year: "2012" },
      { youtubeId: "suRsxpoAc5w", artist: "Maroon 5", title: "Moves Like Jagger", year: "2011" },
      { youtubeId: "hLQl3WQQoQ0", artist: "Adele", title: "Someone Like You", year: "2011" },
      { youtubeId: "rYEDA3JcQqw", artist: "Adele", title: "Rolling in the Deep", year: "2010" },
      { youtubeId: "kffacxfA7G4", artist: "Justin Bieber", title: "Baby ft. Ludacris", year: "2010" },
      { youtubeId: "BaFF4OkLOss", artist: "Dr. Dre ft. Snoop Dogg", title: "Still D.R.E.", year: "2000" },
      { youtubeId: "tsMDKjb54EM", artist: "LMFAO", title: "Party Rock Anthem", year: "2011" },
      { youtubeId: "bpOSxM0rNPM", artist: "Arctic Monkeys", title: "Do I Wanna Know?", year: "2013" },
      { youtubeId: "uSD4vsh1zDA", artist: "The Black Eyed Peas", title: "I Gotta Feeling", year: "2009" },
      { youtubeId: "nPvuNsRccVw", artist: "Bruno Mars", title: "Treasure", year: "2013" },
      { youtubeId: "SR6iYWJxHqs", artist: "Bruno Mars", title: "Grenade", year: "2010" },
      { youtubeId: "9bZkp7q19f0", artist: "PSY", title: "Gangnam Style", year: "2012" },
      { youtubeId: "pt8VYOfr8To", artist: "Britney Spears", title: "Work Bitch", year: "2013" },
      { youtubeId: "nfWlot6h_JM", artist: "Taylor Swift", title: "Shake It Off", year: "2014" },
      { youtubeId: "e-ORhEE9VVg", artist: "Taylor Swift", title: "Blank Space", year: "2014" },
      { youtubeId: "QcIy9NiNbmo", artist: "Taylor Swift", title: "Bad Blood", year: "2015" },
      { youtubeId: "uuZE_IRwLNI", artist: "Justin Timberlake", title: "Mirrors", year: "2013" },
      { youtubeId: "DK_0jXPuIr0", artist: "Justin Bieber", title: "What Do You Mean?", year: "2015" },
      { youtubeId: "8xg3vE8Ie_E", artist: "Taylor Swift", title: "Love Story", year: "2008" },     
      { youtubeId: "DUT5rEU6pqM", artist: "Shakira ft. Wyclef Jean", title: "Hips Don't Lie", year: "2006" },
      { youtubeId: "4m1EFMoRFvY", artist: "Beyoncé", title: "Single Ladies", year: "2008" },
      { youtubeId: "YVkUvmDQ3HY", artist: "Eminem", title: "Without Me", year: "2002" },
      { youtubeId: "2Abk1jAONjw", artist: "Lady Gaga", title: "Just Dance", year: "2008" },
      { youtubeId: "pok8H_KF1FA", artist: "Doja Cat", title: "Say So", year: "2020" },
      { youtubeId: "ru0K8uYEZWw", artist: "Justin Timberlake", title: "Can't Stop The Feeling!", year: "2016" },
      { youtubeId: "CevxZvSJLk8", artist: "Katy Perry", title: "Roar", year: "2013" },
      { youtubeId: "QGJuMBdaqIw", artist: "Katy Perry", title: "Firework", year: "2010" },
      { youtubeId: "XOa_3w3fbQQ", artist: "Maroon 5", title: "Sugar", year: "2015" },
      { youtubeId: "hHUbLv4ThOo", artist: "Pitbull ft. Ke$ha", title: "Timber", year: "2013" },
      { youtubeId: "rtOvBOTyX00", artist: "Christina Perri", title: "A Thousand Years", year: "2011" },
      { youtubeId: "7PCkvCPvDXk", artist: "Meghan Trainor", title: "All About That Bass", year: "2014" },
      { youtubeId: "HMUDVMiITOU", artist: "DJ Snake & Lil Jon", title: "Turn Down for What", year: "2013" },
      { youtubeId: "qV5lzRHrGeg", artist: "Carly Rae Jepsen", title: "I Really Like You", year: "2015" },
      { youtubeId: "uelHwf8o7_U", artist: "Eminem", title: "Love The Way You Lie ft. Rihanna", year: "2010" },
      { youtubeId: "ScNNfyq3d_w", artist: "Linkin Park", title: "Castle Of Glass", year: "2012" },
      { youtubeId: "YqeW9_5kURI", artist: "Major Lazer & DJ Snake", title: "Lean On", year: "2015" },
      { youtubeId: "MxEjnYdfLXU", artist: "Kanye West", title: "I Wonder", year: "2007" },
      { youtubeId: "3phsIEmKWbw", artist: "Stone Sour", title: "Through Glass", year: "2006" },
      { youtubeId: "FC3y9llDXuM", artist: "Wheatus", title: "Teenage Dirtbag", year: "2000" },
      { youtubeId: "83xBPCw5hh4", artist: "DaBaby", title: "ROCKSTAR", year: "2020" },
      { youtubeId: "Kbj2Zss-5GY", artist: "A$AP Rocky", title: "Praise The Lord", year: "2018" },
      { youtubeId: "RRKJiM9Njr8", artist: "My Chemical Romance", title: "Welcome to the Black Parade", year: "2006" },
      { youtubeId: "h_m-BjrxmgI", artist: "Plain White T's", title: "Hey There Delilah", year: "2005" },
      { youtubeId: "zrFI2gJSuwA", artist: "Madcon", title: "Beggin", year: "2007" },
      { youtubeId: "-N4jf6rtyuw", artist: "Gnarls Barkley", title: "Crazy", year: "2006" }, 
      { youtubeId: "", artist: "", title: "", year: "" },
      { youtubeId: "", artist: "", title: "", year: "" },
      { youtubeId: "", artist: "", title: "", year: "" },


],
AnythingGoes: [
  { youtubeId: "7Qp5vcuMIlk", artist: "Fuel", title: "Shimmer", year: "1998" },
  { youtubeId: "XvziPPpryv0", artist: "Goldfinger", title: "Superman", year: "1997" },
  { youtubeId: "MxEjnYdfLXU", artist: "Kanye West", title: "I Wonder", year: "2007" },
  { youtubeId: "Q-pXD0FXLQ8", artist: "Stone Sour", title: "Bother", year: "2002" },
  { youtubeId: "3phsIEmKWbw", artist: "Stone Sour", title: "Through Glass", year: "2006" },
  { youtubeId: "s1tAYmMjLdY", artist: "blink-182", title: "I Miss You", year: "2004" },
  { youtubeId: "CDl9ZMfj6aE", artist: "Alien Ant Farm", title: "Smooth Criminal", year: "2001" },
  { youtubeId: "FC3y9llDXuM", artist: "Wheatus", title: "Teenage Dirtbag", year: "2000" },
  { youtubeId: "NdYWuo9OFAw", artist: "Goo Goo Dolls", title: "Iris", year: "1998" },
  { youtubeId: "XFkzRNyygfk", artist: "Radiohead", title: "Creep", year: "1992" },
  { youtubeId: "ZHwVBirqD2s", artist: "Elton John", title: "I'm Still Standing", year: "1983" },
  { youtubeId: "hCuMWrfXG4E", artist: "Billy Joel", title: "Uptown Girl", year: "1983" },
  { youtubeId: "NIGMUAMevH0", artist: "The Mighty Mighty Bosstones", title: "The Impression That I Get", year: "1997" },
  { youtubeId: "S21Vk5OCwqc", artist: "Teräsbetoni", title: "Teräsbetoni", year: "2004" },
  { youtubeId: "U6Nhw-H2peA", artist: "JVG", title: "Ammattimies", year: "2015" },
  { youtubeId: "aTJncWndUB8", artist: "Basshunter", title: "Dota", year: "2006" },
  { youtubeId: "pHWq0xtKz78", artist: "Cheek", title: "Liekeissä", year: "2012" },
  { youtubeId: "W9y8aUi3qFY", artist: "Slipknot", title: "Snuff", year: "2008" },
  { youtubeId: "KD5fLb-WgBU", artist: "Sigma", title: "Nobody To Love", year: "2014" },
  { youtubeId: "KfVIRigPyws", artist: "A$AP Rocky ft. Rod Stewart, Miguel, Mark Ronson", title: "Everyday", year: "2015" },
  { youtubeId: "yoYZf-lBF_U", artist: "Mobb Deep", title: "Shook Ones, Pt. II", year: "1995" },
  { youtubeId: "PBwAxmrE194", artist: "Wu-Tang Clan", title: "C.R.E.A.M", year: "1993" },
  { youtubeId: "R0IUR4gkPIE", artist: "Wu-Tang Clan", title: "Protect Ya Neck", year: "1993" },
  { youtubeId: "VC4ORS5n9Hg", artist: "Nas", title: "Nas Is Like", year: "1999" },
  { youtubeId: "Kbj2Zss-5GY", artist: "A$AP Rocky", title: "Praise The Lord", year: "2018" },
  { youtubeId: "4JkIs37a2JE", artist: "Jamiroquai", title: "Virtual Insanity", year: "1996" },
  { youtubeId: "cmpRLQZkTb8", artist: "Oasis", title: "Don’t Look Back In Anger", year: "1996" },
  { youtubeId: "SSbBvKaM6sk", artist: "Blur", title: "Song 2", year: "1997" },
  { youtubeId: "RRKJiM9Njr8", artist: "My Chemical Romance", title: "Welcome to the Black Parade", year: "2006" },
  { youtubeId: "L_jWHffIx5E", artist: "Smash Mouth", title: "All Star", year: "1999" },
  { youtubeId: "JnfyjwChuNU", artist: "Red Hot Chili Peppers", title: "By The Way", year: "2002" },
  { youtubeId: "HyHNuVaZJ-k", artist: "Gorillaz", title: "Feel Good Inc.", year: "2005" },
  { youtubeId: "I_2D8Eo15wE", artist: "Ram Jam", title: "Black Betty", year: "1977" },
  { youtubeId: "Ic5vxw3eijY", artist: "Estelle Feat. Kanye West", title: "American Boy", year: "2008" },
  { youtubeId: "Nntd2fgMUYw", artist: "Eagle-Eye Cherry", title: "Save Tonight", year: "1997" },
  { youtubeId: "emGri7i8Y2Y", artist: "Sum 41", title: "In Too Deep", year: "2001" },
  { youtubeId: "eFTLKWw542g", artist: "Billy Joel", title: "We Didn't Start the Fire", year: "1989" },
  { youtubeId: "CnQ8N1KacJc", artist: "Green Day", title: "Good Riddance", year: "1997" },
  { youtubeId: "gxEPV4kolz0", artist: "Billy Joel", title: "Piano Man", year: "1973" },
  { youtubeId: "8AHCfZTRGiI", artist: "Johnny Cash", title: "Hurt", year: "2002" },
  { youtubeId: "V1bFr2SWP1I", artist: "Israel Kamakawiwoʻole", title: "Somewhere over the Rainbow", year: "1993" },
  { youtubeId: "Nuanwn3v-2I", artist: "Bill Withers", title: "Ain't No Sunshine", year: "1971" },
  { youtubeId: "qQzdAsjWGPg", artist: "Frank Sinatra", title: "My Way", year: "1969" },
  { youtubeId: "d-diB65scQU", artist: "Bobby McFerrin", title: "Don't Worry Be Happy", year: "1988" },
  { youtubeId: "1vrEljMfXYo", artist: "John Denver", title: "Take Me Home, Country Roads", year: "1971" },
  { youtubeId: "uSiHqxgE2d0", artist: "Ray Charles", title: "Hit The Road Jack", year: "1961" },
  { youtubeId: "6POZlJAZsok", artist: "Grover Waashington Jr feat. Bill Withers", title: "Just the Two of Us", year: "1981" },
  { youtubeId: "bn8QPRYWAdk", artist: "Aerosmith", title: "I Don't Want To Miss A Thing", year: "1998" },
  { youtubeId: "h_m-BjrxmgI", artist: "Plain White T's", title: "Hey There Delilah", year: "2005" },
  { youtubeId: "y2bVIBwpCTA", artist: "The Jackson 5", title: "I Want You Back", year: "1969" },
  { youtubeId: "S2ujotDMluo", artist: "Engelbert Humperdinck", title: "A Man Without Love", year: "1967" },
  { youtubeId: "FTQbiNvZqaY", artist: "Toto", title: "Africa", year: "1982" },
  { youtubeId: "BsrqKE1iqqo", artist: "WAR", title: "Low Rider", year: "1975" },
  { youtubeId: "jrL_LzX5wv4", artist: "House of Pain", title: "Jump Around", year: "1992" },
  { youtubeId: "WeYsTmIzjkw", artist: "Afroman", title: "Because I Got High", year: "2000" },
  { youtubeId: "CS9OO0S5w2k", artist: "Village People", title: "YMCA", year: "1978" },
  { youtubeId: "4TYv2PhG89A", artist: "Sade", title: "Smooth Operator", year: "1984" },
  { youtubeId: "6EEW-9NDM5k", artist: "Akon", title: "Lonely", year: "2004" },
  { youtubeId: "xA142IsjQiE", artist: "Elvis", title: "If I Can Dream", year: "1968" },
  { youtubeId: "pKwQlm-wldA", artist: "Eric Clapton", title: "Layla", year: "1970" },
  { youtubeId: "-fWw7FE9tTo", artist: "Iggy Pop", title: "The Passenger", year: "1977" },
  { youtubeId: "djV11Xbc914", artist: "a-ha", title: "Take On Me", year: "1985" },
  { youtubeId: "TJAfLE39ZZ8", artist: "Amy Winehouse", title: "Back To Black", year: "2006" },
  { youtubeId: "Edwsf-8F3sI", artist: "Michael Bublé", title: "Feeling Good", year: "2005" },
  { youtubeId: "Cwkej79U3ek", artist: "Vanessa Carlton", title: "A Thousand Miles", year: "2002" },
  { youtubeId: "DtVBCG6ThDk", artist: "Elton John", title: "Rocket Man", year: "1972" },
  { youtubeId: "3JWTaaS7LdU", artist: "Whitney Houston", title: "I Will Always Love You", year: "1992" },
  { youtubeId: "Gs069dndIYk", artist: "Earth, Wind & Fire", title: "September", year: "1978" },
  { youtubeId: "0yBnIUX0QAE", artist: "Toploader", title: "Dancing in the Moonlight", year: "1999" },
  { youtubeId: "zrFI2gJSuwA", artist: "Madcon", title: "Beggin", year: "2007" },
  { youtubeId: "-N4jf6rtyuw", artist: "Gnarls Barkley", title: "Crazy", year: "2006" }, 
  { youtubeId: "O4irXQhgMqg", artist: "The Rolling Stones", title: "Paint It, Black", year: "1966" },
  { youtubeId: "Dy4HA3vUv2c", artist: "Blue Oyster Cult", title: "Don't Fear) The Reaper", year: "1976" },
  { youtubeId: "ghb6eDopW8I", artist: "Of Monsters and Men", title: "Little Talks", year: "2011" },
  { youtubeId: "pdlAZj5iDc8", artist: "BEAST IN BLACK", title: "BEAST IN BLACK", year: "2017" },
  { youtubeId: "xPU8OAjjS4k", artist: "3 Doors Down", title: "Kryptonite", year: "2000" },
  { youtubeId: "iX-QaNzd-0Y", artist: "Milky Chance", title: "Stolen Dance", year: "2013" },
  { youtubeId: "ZhIsAZO5gl0", artist: "Kiss", title: "I Was Made For Lovin' You", year: "1979" },
  { youtubeId: "Aiay8I5IPB8", artist: "Nickelback", title: "How You Remind Me", year: "2001" },
  { youtubeId: "CqnU_sJ8V-E", artist: "Lynyrd Skynyrd", title: "Free Bird", year: "1973" },
  { youtubeId: "u9Dg-g7t2l4", artist: "Disturbed", title: "The Sound Of Silence", year: "2015" },
  { youtubeId: "4VxdufqB9zg", artist: "Nirvana", title: "Something In The Way", year: "1991" },
  { youtubeId: "O52jAYa4Pm8", artist: "Talking Heads", title: "Psycho Killer", year: "1977" },
  { youtubeId: "PVjiKRfKpPI", artist: "Hozier", title: "Take Me To Church", year: "2013" },
  { youtubeId: "09LTT0xwdfw", artist: "Disturbed", title: "Down With The Sickness", year: "2000" },
  { youtubeId: "lAOhFfJq3wU", artist: "The Animals", title: "House of the Rising Sun", year: "1964" },
  { youtubeId: "6hzrDeceEKc", artist: "Oasis", title: "Wonderwall", year: "1995" },
  { youtubeId: "0-7IHOXkiV8", artist: "KALEO", title: "Way Down We Go", year: "2016" },
  { youtubeId: "tZzL4jI60p4", artist: "I Prevail", title: "Scars", year: "2016" },
  { youtubeId: "B9FzVhw8_bY", artist: "The Dead South", title: "In Hell I'll Be In Good Company", year: "2014" },
  { youtubeId: "vc6vs-l5dkc", artist: "Panic! At The Disco", title: "I Write Sins Not Tragedies", year: "2005" },
  { youtubeId: "EqQuihD0hoI", artist: "Rob Zombie", title: "Dragula", year: "1998" },
  { youtubeId: "xFrGuyw1V8s", artist: "ABBA", title: "Dancing Queen", year: "1976" },
  { youtubeId: "XEjLoHdbVeE", artist: "ABBA", title: "Gimme! Gimme! Gimme!", year: "1979" },
  { youtubeId: "92cwKCU8Z5c", artist: "ABBA", title: "The Winner Takes It All", year: "1980" },
  { youtubeId: "QYh6mYIJG2Y", artist: "Ariana Grande", title: "7 rings", year: "2019" },
  { youtubeId: "EEhZAHZQyf4", artist: "Ariana Grande", title: "thank u, next", year: "2019" },
  { youtubeId: "gNi_6U5Pm_o", artist: "Olivia Rodrigo", title: "good 4 u", year: "2021" },
  { youtubeId: "G7KNmW9a75Y", artist: "Miley Cyrus", title: "Flowers", year: "2023" },
  { youtubeId: "vk6014HuxcE", artist: "JAY-Z", title: "Empire State Of Mind", year: "2009" },
  { youtubeId: "NKMtZm2YuBE", artist: "Puff Daddy feat. Faith Evans & 112", title: "I'll Be Missing You", year: "1997" },
  { youtubeId: "OZLUa8JUR18", artist: "Lil Wayne ft. Bruno Mars", title: "Mirror", year: "2011" },
  { youtubeId: "Bm5iA4Zupek", artist: "Kanye West", title: "Runaway", year: "2010" },
  { youtubeId: "Oz_-VaTHpc8", artist: "JAY-Z", title: "Dirt Off Your Shoulder", year: "2003" },
  { youtubeId: "phaJXp_zMYM", artist: "The Notorious B.I.G.", title: "Big Poppa", year: "1994" },
  { youtubeId: "_JZom_gVfuw", artist: "The Notorious B.I.G.", title: "Juicy", year: "1994" },
  { youtubeId: "U4Md8ZGtUN8", artist: "The Notorious B.I.G.", title: "Who Shot Ya?", year: "1997" },
  { youtubeId: "H1HdZFgR-aA", artist: "2Pac", title: "All Eyez On Me", year: "1996" },
  { youtubeId: "J7_bMdYfSws", artist: "2Pac ft. Dr. Dre", title: "California Love", year: "1995" },
  { youtubeId: "Tw0_qHNRAEA", artist: "Coolio", title: "Gangsta's Paradise", year: "1995" },
  { youtubeId: "CSD2J8yaMmM", artist: "Outkast", title: "Ms. Jackson", year: "2000" },
  { youtubeId: "0J3vgcE5i2o", artist: "Nelly Furtado ft. Timbaland", title: "Promiscuous", year: "2006" },
  { youtubeId: "Lt2wjJlP2N4", artist: "T-Pain ft. Akon", title: "Bartender", year: "2007" },
  { youtubeId: "1Vf4mMCpNY0", artist: "Lil Wayne", title: "A Milli", year: "2008" },
  { youtubeId: "5D3crqpClPY", artist: "50 Cent", title: "Many Men", year: "2003" },
  { youtubeId: "QFcv5Ma8u8k", artist: "Dr. Dre ft Eminem", title: "Forgot About Dre", year: "1999" },
  { youtubeId: "hRK7PVJFbS8", artist: "Kendrick Lamar", title: "King Kunta", year: "2015" },
  { youtubeId: "B5YNiCfWC3A", artist: "Kendrick Lamar", title: "Swimming Pools (Drank)", year: "2012" },
  { youtubeId: "nWAGLkyxQG0", artist: "Wiz Khalifa ft. Snoop Dogg, Juicy J & T-Pain", title: "Black And Yellow [G-Mix]", year: "2011" },
  { youtubeId: "RYnFIRc0k6E", artist: "Limp Bizkit", title: "Rollin'", year: "2000" },
  { youtubeId: "ajmI1P3r1w4", artist: "Terror Squad ft. Fat Joe, Remy Ma", title: "Lean Back", year: "2004" },
  { youtubeId: "H58vbez_m4E", artist: "Kendrick Lamar", title: "Not Like Us", year: "2015" },
  { youtubeId: "bKDdT_nyP54", artist: "Akon ft. Eminem", title: "Smack That", year: "2006" },
  { youtubeId: "SLsTskih7_I", artist: "Post Malone", title: "White Iverson", year: "2015" },
  { youtubeId: "RijB8wnJCN0", artist: "Cypress Hill", title: "Insane In The Brain", year: "1993" },
  { youtubeId: "Sv6dMFF_yts", artist: "Fun. ft. Janelle Monáe", title: "We Are Young", year: "2011" },
  { youtubeId: "ymNFyxvIdaM", artist: "Bomfunk MC's", title: "Freestyler", year: "1999" },
  { youtubeId: "Co0tTeuUVhU", artist: "Kanye West", title: "Heartless", year: "2008" },
  { youtubeId: "cjIvu7e6Wq8", artist: "Missy Elliott", title: "Work It", year: "2002" },
  { youtubeId: "qORYO0atB6g", artist: "Beastie Boys", title: "Intergalactic", year: "1998" },
  { youtubeId: "glEiPXAYE-U", artist: "The Notorious B.I.G.", title: "Hypnotize", year: "1997" },
  { youtubeId: "A_xWDAbnBSU", artist: "Migos ft. Drake", title: "Walk It Talk It", year: "2018" },
  { youtubeId: "cbB3iGRHtqA", artist: "Scooter", title: "How Much Is The Fish?", year: "1998" },
  { youtubeId: "UceaB4D0jpo", artist: "Post Malone ft. 21 Savage", title: "rockstar", year: "2017" },
  { youtubeId: "7Dqgr0wNyPo", artist: "Kanye West ft. Big Sean, Pusha T, 2 Chainz", title: "Mercy", year: "2012" },
  { youtubeId: "rog8ou-ZepE", artist: "Vanilla Ice", title: "Ice Ice Baby", year: "1990" },
  { youtubeId: "djE-BLrdDDc", artist: "Ace Hood", title: "Bugatti", year: "2013" },
  { youtubeId: "E5ONTXHS2mM", artist: "Desiigner", title: "Panda", year: "2015" },
  { youtubeId: "6ONRf7h3Mdk", artist: "Travis Scott ft. Drake", title: "SICKO MODE", year: "2018" },
  { youtubeId: "S-sJp1FfG7Q", artist: "Migos ft Lil Uzi Vert", title: "Bad and Boujee", year: "2016" },
  { youtubeId: "8UFIYGkROII", artist: "Soulja Boy", title: "Crank That", year: "2007" },
  { youtubeId: "2PjNsPMKqSA", artist: "BIG SHAQ", title: "MANS NOT HOT", year: "2017" },
  { youtubeId: "GtUVQei3nX4", artist: "Snoop Dogg ft. Pharrell Williams", title: "Drop It Like It's Hot", year: "2004" },
  { youtubeId: "34Na4j8AVgA", artist: "The Weeknd ft. Daft Punk", title: "Starboy", year: "2016" },
  { youtubeId: "VYOjWnS4cMY", artist: "Childish Gambino", title: "This Is America", year: "2018" },
  { youtubeId: "f2nKwt9mC0A", artist: "T.I.", title: "Whatever You Like", year: "2008" },
  { youtubeId: "FZZogxdiJMA", artist: "Y2K, bbno$", title: "Lalala", year: "2019" },
  { youtubeId: "3O1_3zBUKM8", artist: "Naughty Boy ft. Sam Smith", title: "La la la", year: "2013" },
  { youtubeId: "QuvqzlxEO6g", artist: "bbno$", title: "it boy", year: "2019" },
  { youtubeId: "I6RVE0xYjoI", artist: "bbno$  x diamond pistols", title: "help herself", year: "2020" },
  { youtubeId: "vSW2M-BB1NE", artist: "Liam Payne ft. Quavo", title: "Strip That Down", year: "2017" },
  { youtubeId: "DyDfgMOUjCI", artist: "Billie Eilish", title: "bad guy", year: "2019" },
  { youtubeId: "V1Pl8CzNzCw", artist: "Billie Eilish, Khalid", title: "lovely", year: "2018" },
  { youtubeId: "pbMwTqkKSps", artist: "Billie Eilish", title: "when the party's over", year: "2018" },
  { youtubeId: "9ClYy0MxsU0", artist: "STORMZY", title: "VOSSI BOP", year: "2019" },
  { youtubeId: "989-7xsRLR4", artist: "Vitas", title: "The 7th Element", year: "2001" },
  { youtubeId: "GmG4X9PGOXs", artist: "Jon Lajoie", title: "Everyday Normal Guy 2", year: "2009" },
  { youtubeId: "T3E9Wjbq44E", artist: "Gym Class Heroes ft. Adam Levine", title: "Stereo Hearts", year: "2011" },
  { youtubeId: "l-TaaIQ2_1A", artist: "Mike Posner", title: "Cooler Than Me", year: "2010" },
  { youtubeId: "rdKfuwy6LUM", artist: "MGMT", title: "Kids", year: "2007" }  
],
GIGALIST: [
  { youtubeId: "7Qp5vcuMIlk", artist: "Fuel", title: "Shimmer", year: "1998" },
  { youtubeId: "XvziPPpryv0", artist: "Goldfinger", title: "Superman", year: "1997" },
  { youtubeId: "MxEjnYdfLXU", artist: "Kanye West", title: "I Wonder", year: "2007" },
  { youtubeId: "Q-pXD0FXLQ8", artist: "Stone Sour", title: "Bother", year: "2002" },
  { youtubeId: "3phsIEmKWbw", artist: "Stone Sour", title: "Through Glass", year: "2006" },
  { youtubeId: "s1tAYmMjLdY", artist: "blink-182", title: "I Miss You", year: "2004" },
  { youtubeId: "CDl9ZMfj6aE", artist: "Alien Ant Farm", title: "Smooth Criminal", year: "2001" },
  { youtubeId: "FC3y9llDXuM", artist: "Wheatus", title: "Teenage Dirtbag", year: "2000" },
  { youtubeId: "NdYWuo9OFAw", artist: "Goo Goo Dolls", title: "Iris", year: "1998" },
  { youtubeId: "XFkzRNyygfk", artist: "Radiohead", title: "Creep", year: "1992" },
  { youtubeId: "ZHwVBirqD2s", artist: "Elton John", title: "I'm Still Standing", year: "1983" },
  { youtubeId: "hCuMWrfXG4E", artist: "Billy Joel", title: "Uptown Girl", year: "1983" },
  { youtubeId: "NIGMUAMevH0", artist: "The Mighty Mighty Bosstones", title: "The Impression That I Get", year: "1997" },
  { youtubeId: "S21Vk5OCwqc", artist: "Teräsbetoni", title: "Teräsbetoni", year: "2004" },
  { youtubeId: "U6Nhw-H2peA", artist: "JVG", title: "Amatimies", year: "2015" },
  { youtubeId: "aTJncWndUB8", artist: "Basshunter", title: "Dota", year: "2006" },
  { youtubeId: "pHWq0xtKz78", artist: "Cheek", title: "Liekeissä", year: "2012" },
  { youtubeId: "W9y8aUi3qFY", artist: "Slipknot", title: "Snuff", year: "2008" },
  { youtubeId: "KD5fLb-WgBU", artist: "Sigma", title: "Nobody To Love", year: "2014" },
  { youtubeId: "KfVIRigPyws", artist: "A$AP Rocky ft. Rod Stewart, Miguel, Mark Ronson", title: "Everyday", year: "2015" },
  { youtubeId: "yoYZf-lBF_U", artist: "Mobb Deep", title: "Shook Ones, Pt. II", year: "1995" },
  { youtubeId: "PBwAxmrE194", artist: "Wu-Tang Clan", title: "C.R.E.A.M", year: "1993" },
  { youtubeId: "R0IUR4gkPIE", artist: "Wu-Tang Clan", title: "Protect Ya Neck", year: "1993" },
  { youtubeId: "VC4ORS5n9Hg", artist: "Nas", title: "Nas Is Like", year: "1999" },
  { youtubeId: "Kbj2Zss-5GY", artist: "A$AP Rocky", title: "Praise The Lord", year: "2018" },
  { youtubeId: "4JkIs37a2JE", artist: "Jamiroquai", title: "Virtual Insanity", year: "1996" },
  { youtubeId: "cmpRLQZkTb8", artist: "Oasis", title: "Don’t Look Back In Anger", year: "1996" },
  { youtubeId: "SSbBvKaM6sk", artist: "Blur", title: "Song 2", year: "1997" },
  { youtubeId: "RRKJiM9Njr8", artist: "My Chemical Romance", title: "Welcome to the Black Parade", year: "2006" },
  { youtubeId: "L_jWHffIx5E", artist: "Smash Mouth", title: "All Star", year: "1999" },
  { youtubeId: "JnfyjwChuNU", artist: "Red Hot Chili Peppers", title: "By The Way", year: "2002" },
  { youtubeId: "HyHNuVaZJ-k", artist: "Gorillaz", title: "Feel Good Inc.", year: "2005" },
  { youtubeId: "I_2D8Eo15wE", artist: "Ram Jam", title: "Black Betty", year: "1977" },
  { youtubeId: "Ic5vxw3eijY", artist: "Estelle Feat. Kanye West", title: "American Boy", year: "2008" },
  { youtubeId: "Nntd2fgMUYw", artist: "Eagle-Eye Cherry", title: "Save Tonight", year: "1997" },
  { youtubeId: "emGri7i8Y2Y", artist: "Sum 41", title: "In Too Deep", year: "2001" },
  { youtubeId: "eFTLKWw542g", artist: "Billy Joel", title: "We Didn't Start the Fire", year: "1989" },
  { youtubeId: "CnQ8N1KacJc", artist: "Green Day", title: "Good Riddance", year: "1997" },
  { youtubeId: "gxEPV4kolz0", artist: "Billy Joel", title: "Piano Man", year: "1973" },
  { youtubeId: "8AHCfZTRGiI", artist: "Johnny Cash", title: "Hurt", year: "2002" },
  { youtubeId: "V1bFr2SWP1I", artist: "Israel Kamakawiwoʻole", title: "Somewhere over the Rainbow", year: "1993" },
  { youtubeId: "Nuanwn3v-2I", artist: "Bill Withers", title: "Ain't No Sunshine", year: "1971" },
  { youtubeId: "qQzdAsjWGPg", artist: "Frank Sinatra", title: "My Way", year: "1969" },
  { youtubeId: "d-diB65scQU", artist: "Bobby McFerrin", title: "Don't Worry Be Happy", year: "1988" },
  { youtubeId: "1vrEljMfXYo", artist: "John Denver", title: "Take Me Home, Country Roads", year: "1971" },
  { youtubeId: "uSiHqxgE2d0", artist: "Ray Charles", title: "Hit The Road Jack", year: "1961" },
  { youtubeId: "6POZlJAZsok", artist: "Grover Waashington Jr feat. Bill Withers", title: "Just the Two of Us", year: "1981" },
  { youtubeId: "bn8QPRYWAdk", artist: "Aerosmith", title: "I Don't Want To Miss A Thing", year: "1998" },
  { youtubeId: "h_m-BjrxmgI", artist: "Plain White T's", title: "Hey There Delilah", year: "2005" },
  { youtubeId: "y2bVIBwpCTA", artist: "The Jackson 5", title: "I Want You Back", year: "1969" },
  { youtubeId: "S2ujotDMluo", artist: "Engelbert Humperdinck", title: "A Man Without Love", year: "1967" },
  { youtubeId: "FTQbiNvZqaY", artist: "Toto", title: "Africa", year: "1982" },
  { youtubeId: "BsrqKE1iqqo", artist: "WAR", title: "Low Rider", year: "1975" },
  { youtubeId: "jrL_LzX5wv4", artist: "House of Pain", title: "Jump Around", year: "1992" },
  { youtubeId: "WeYsTmIzjkw", artist: "Afroman", title: "Because I Got High", year: "2000" },
  { youtubeId: "CS9OO0S5w2k", artist: "Village People", title: "YMCA", year: "1978" },
  { youtubeId: "4TYv2PhG89A", artist: "Sade", title: "Smooth Operator", year: "1984" },
  { youtubeId: "6EEW-9NDM5k", artist: "Akon", title: "Lonely", year: "2004" },
  { youtubeId: "xA142IsjQiE", artist: "Elvis", title: "If I Can Dream", year: "1968" },
  { youtubeId: "pKwQlm-wldA", artist: "Eric Clapton", title: "Layla", year: "1970" },
  { youtubeId: "-fWw7FE9tTo", artist: "Iggy Pop", title: "The Passenger", year: "1977" },
  { youtubeId: "djV11Xbc914", artist: "a-ha", title: "Take On Me", year: "1985" },
  { youtubeId: "TJAfLE39ZZ8", artist: "Amy Winehouse", title: "Back To Black", year: "2006" },
  { youtubeId: "Edwsf-8F3sI", artist: "Michael Bublé", title: "Feeling Good", year: "2005" },
  { youtubeId: "Cwkej79U3ek", artist: "Vanessa Carlton", title: "A Thousand Miles", year: "2002" },
  { youtubeId: "DtVBCG6ThDk", artist: "Elton John", title: "Rocket Man", year: "1972" },
  { youtubeId: "3JWTaaS7LdU", artist: "Whitney Houston", title: "I Will Always Love You", year: "1992" },
  { youtubeId: "Gs069dndIYk", artist: "Earth, Wind & Fire", title: "September", year: "1978" },
  { youtubeId: "0yBnIUX0QAE", artist: "Toploader", title: "Dancing in the Moonlight", year: "1999" },
  { youtubeId: "zrFI2gJSuwA", artist: "Madcon", title: "Beggin", year: "2007" },
  { youtubeId: "-N4jf6rtyuw", artist: "Gnarls Barkley", title: "Crazy", year: "2006" }, 
  { youtubeId: "O4irXQhgMqg", artist: "The Rolling Stones", title: "Paint It, Black", year: "1966" },
  { youtubeId: "Dy4HA3vUv2c", artist: "Blue Oyster Cult", title: "Don't Fear) The Reaper", year: "1976" },
  { youtubeId: "ghb6eDopW8I", artist: "Of Monsters and Men", title: "Little Talks", year: "2011" },
  { youtubeId: "pdlAZj5iDc8", artist: "BEAST IN BLACK", title: "BEAST IN BLACK", year: "2017" },
  { youtubeId: "xPU8OAjjS4k", artist: "3 Doors Down", title: "Kryptonite", year: "2000" },
  { youtubeId: "iX-QaNzd-0Y", artist: "Milky Chance", title: "Stolen Dance", year: "2013" },
  { youtubeId: "ZhIsAZO5gl0", artist: "Kiss", title: "I Was Made For Lovin' You", year: "1979" },
  { youtubeId: "Aiay8I5IPB8", artist: "Nickelback", title: "How You Remind Me", year: "2001" },
  { youtubeId: "CqnU_sJ8V-E", artist: "Lynyrd Skynyrd", title: "Free Bird", year: "1973" },
  { youtubeId: "u9Dg-g7t2l4", artist: "Disturbed", title: "The Sound Of Silence", year: "2015" },
  { youtubeId: "4VxdufqB9zg", artist: "Nirvana", title: "Something In The Way", year: "1991" },
  { youtubeId: "O52jAYa4Pm8", artist: "Talking Heads", title: "Psycho Killer", year: "1977" },
  { youtubeId: "PVjiKRfKpPI", artist: "Hozier", title: "Take Me To Church", year: "2013" },
  { youtubeId: "09LTT0xwdfw", artist: "Disturbed", title: "Down With The Sickness", year: "2000" },
  { youtubeId: "lAOhFfJq3wU", artist: "The Animals", title: "House of the Rising Sun", year: "1964" },
  { youtubeId: "6hzrDeceEKc", artist: "Oasis", title: "Wonderwall", year: "1995" },
  { youtubeId: "0-7IHOXkiV8", artist: "KALEO", title: "Way Down We Go", year: "2016" },
  { youtubeId: "tZzL4jI60p4", artist: "I Prevail", title: "Scars", year: "2016" },
  { youtubeId: "B9FzVhw8_bY", artist: "The Dead South", title: "In Hell I'll Be In Good Company", year: "2014" },
  { youtubeId: "vc6vs-l5dkc", artist: "Panic! At The Disco", title: "I Write Sins Not Tragedies", year: "2005" },
  { youtubeId: "EqQuihD0hoI", artist: "Rob Zombie", title: "Dragula", year: "1998" },
  { youtubeId: "xFrGuyw1V8s", artist: "ABBA", title: "Dancing Queen", year: "1976" },
  { youtubeId: "XEjLoHdbVeE", artist: "ABBA", title: "Gimme! Gimme! Gimme!", year: "1979" },
  { youtubeId: "92cwKCU8Z5c", artist: "ABBA", title: "The Winner Takes It All", year: "1980" },
  { youtubeId: "QYh6mYIJG2Y", artist: "Ariana Grande", title: "7 rings", year: "2019" },
  { youtubeId: "EEhZAHZQyf4", artist: "Ariana Grande", title: "thank u, next", year: "2019" },
  { youtubeId: "gNi_6U5Pm_o", artist: "Olivia Rodrigo", title: "good 4 u", year: "2021" },
  { youtubeId: "G7KNmW9a75Y", artist: "Miley Cyrus", title: "Flowers", year: "2023" },
  { youtubeId: "vk6014HuxcE", artist: "JAY-Z", title: "Empire State Of Mind", year: "2009" },
  { youtubeId: "NKMtZm2YuBE", artist: "Puff Daddy feat. Faith Evans & 112", title: "I'll Be Missing You", year: "1997" },
  { youtubeId: "OZLUa8JUR18", artist: "Lil Wayne ft. Bruno Mars", title: "Mirror", year: "2011" },
  { youtubeId: "Bm5iA4Zupek", artist: "Kanye West", title: "Runaway", year: "2010" },
  { youtubeId: "Oz_-VaTHpc8", artist: "JAY-Z", title: "Dirt Off Your Shoulder", year: "2003" },
  { youtubeId: "phaJXp_zMYM", artist: "The Notorious B.I.G.", title: "Big Poppa", year: "1994" },
  { youtubeId: "_JZom_gVfuw", artist: "The Notorious B.I.G.", title: "Juicy", year: "1994" },
  { youtubeId: "U4Md8ZGtUN8", artist: "The Notorious B.I.G.", title: "Who Shot Ya?", year: "1997" },
  { youtubeId: "H1HdZFgR-aA", artist: "2Pac", title: "All Eyez On Me", year: "1996" },
  { youtubeId: "J7_bMdYfSws", artist: "2Pac ft. Dr. Dre", title: "California Love", year: "1995" },
  { youtubeId: "Tw0_qHNRAEA", artist: "Coolio", title: "Gangsta's Paradise", year: "1995" },
  { youtubeId: "CSD2J8yaMmM", artist: "Outkast", title: "Ms. Jackson", year: "2000" },
  { youtubeId: "0J3vgcE5i2o", artist: "Nelly Furtado ft. Timbaland", title: "Promiscuous", year: "2006" },
  { youtubeId: "Lt2wjJlP2N4", artist: "T-Pain ft. Akon", title: "Bartender", year: "2007" },
  { youtubeId: "1Vf4mMCpNY0", artist: "Lil Wayne", title: "A Milli", year: "2008" },
  { youtubeId: "5D3crqpClPY", artist: "50 Cent", title: "Many Men", year: "2003" },
  { youtubeId: "QFcv5Ma8u8k", artist: "Dr. Dre ft Eminem", title: "Forgot About Dre", year: "1999" },
  { youtubeId: "hRK7PVJFbS8", artist: "Kendrick Lamar", title: "King Kunta", year: "2015" },
  { youtubeId: "B5YNiCfWC3A", artist: "Kendrick Lamar", title: "Swimming Pools (Drank)", year: "2012" },
  { youtubeId: "nWAGLkyxQG0", artist: "Wiz Khalifa ft. Snoop Dogg, Juicy J & T-Pain", title: "Black And Yellow [G-Mix]", year: "2011" },
  { youtubeId: "RYnFIRc0k6E", artist: "Limp Bizkit", title: "Rollin'", year: "2000" },
  { youtubeId: "ajmI1P3r1w4", artist: "Terror Squad ft. Fat Joe, Remy Ma", title: "Lean Back", year: "2004" },
  { youtubeId: "H58vbez_m4E", artist: "Kendrick Lamar", title: "Not Like Us", year: "2015" },
  { youtubeId: "bKDdT_nyP54", artist: "Akon ft. Eminem", title: "Smack That", year: "2006" },
  { youtubeId: "SLsTskih7_I", artist: "Post Malone", title: "White Iverson", year: "2015" },
  { youtubeId: "RijB8wnJCN0", artist: "Cypress Hill", title: "Insane In The Brain", year: "1993" },
  { youtubeId: "Sv6dMFF_yts", artist: "Fun. ft. Janelle Monáe", title: "We Are Young", year: "2011" },
  { youtubeId: "ymNFyxvIdaM", artist: "Bomfunk MC's", title: "Freestyler", year: "1999" },
  { youtubeId: "Co0tTeuUVhU", artist: "Kanye West", title: "Heartless", year: "2008" },
  { youtubeId: "cjIvu7e6Wq8", artist: "Missy Elliott", title: "Work It", year: "2002" },
  { youtubeId: "qORYO0atB6g", artist: "Beastie Boys", title: "Intergalactic", year: "1998" },
  { youtubeId: "glEiPXAYE-U", artist: "The Notorious B.I.G.", title: "Hypnotize", year: "1997" },
  { youtubeId: "A_xWDAbnBSU", artist: "Migos ft. Drake", title: "Walk It Talk It", year: "2018" },
  { youtubeId: "cbB3iGRHtqA", artist: "Scooter", title: "How Much Is The Fish?", year: "1998" },
  { youtubeId: "UceaB4D0jpo", artist: "Post Malone ft. 21 Savage", title: "rockstar", year: "2017" },
  { youtubeId: "7Dqgr0wNyPo", artist: "Kanye West ft. Big Sean, Pusha T, 2 Chainz", title: "Mercy", year: "2012" },
  { youtubeId: "rog8ou-ZepE", artist: "Vanilla Ice", title: "Ice Ice Baby", year: "1990" },
  { youtubeId: "djE-BLrdDDc", artist: "Ace Hood", title: "Bugatti", year: "2013" },
  { youtubeId: "E5ONTXHS2mM", artist: "Desiigner", title: "Panda", year: "2015" },
  { youtubeId: "6ONRf7h3Mdk", artist: "Travis Scott ft. Drake", title: "SICKO MODE", year: "2018" },
  { youtubeId: "S-sJp1FfG7Q", artist: "Migos ft Lil Uzi Vert", title: "Bad and Boujee", year: "2016" },
  { youtubeId: "8UFIYGkROII", artist: "Soulja Boy", title: "Crank That", year: "2007" },
  { youtubeId: "2PjNsPMKqSA", artist: "BIG SHAQ", title: "MANS NOT HOT", year: "2017" },
  { youtubeId: "GtUVQei3nX4", artist: "Snoop Dogg ft. Pharrell Williams", title: "Drop It Like It's Hot", year: "2004" },
  { youtubeId: "34Na4j8AVgA", artist: "The Weeknd ft. Daft Punk", title: "Starboy", year: "2016" },
  { youtubeId: "VYOjWnS4cMY", artist: "Childish Gambino", title: "This Is America", year: "2018" },
  { youtubeId: "f2nKwt9mC0A", artist: "T.I.", title: "Whatever You Like", year: "2008" },
  { youtubeId: "FZZogxdiJMA", artist: "Y2K, bbno$", title: "Lalala", year: "2019" },
  { youtubeId: "3O1_3zBUKM8", artist: "Naughty Boy ft. Sam Smith", title: "La la la", year: "2013" },
  { youtubeId: "QuvqzlxEO6g", artist: "bbno$", title: "it boy", year: "2019" },
  { youtubeId: "I6RVE0xYjoI", artist: "bbno$  x diamond pistols", title: "help herself", year: "2020" },
  { youtubeId: "vSW2M-BB1NE", artist: "Liam Payne ft. Quavo", title: "Strip That Down", year: "2017" },
  { youtubeId: "DyDfgMOUjCI", artist: "Billie Eilish", title: "bad guy", year: "2019" },
  { youtubeId: "V1Pl8CzNzCw", artist: "Billie Eilish, Khalid", title: "lovely", year: "2018" },
  { youtubeId: "pbMwTqkKSps", artist: "Billie Eilish", title: "when the party's over", year: "2018" },
  { youtubeId: "9ClYy0MxsU0", artist: "STORMZY", title: "VOSSI BOP", year: "2019" },
  { youtubeId: "989-7xsRLR4", artist: "Vitas", title: "The 7th Element", year: "2001" },
  { youtubeId: "GmG4X9PGOXs", artist: "Jon Lajoie", title: "Everyday Normal Guy 2", year: "2009" },
  { youtubeId: "T3E9Wjbq44E", artist: "Gym Class Heroes ft. Adam Levine", title: "Stereo Hearts", year: "2011" },
  { youtubeId: "l-TaaIQ2_1A", artist: "Mike Posner", title: "Cooler Than Me", year: "2010" },
  { youtubeId: "rdKfuwy6LUM", artist: "MGMT", title: "Kids", year: "2007" },
  { youtubeId: "erG5rgNYSdk", artist: "Weezer", title: "Island In The Sun", year: "2001" },
    { youtubeId: "3gd8iBa5ag0", artist: "Queen", title: "Bohemian Rhapsody", year: "1975" },
    { youtubeId: "1w7OgIMMRc4", artist: "Guns N' Roses", title: "Sweet Child O' Mine", year: "1987" },
    { youtubeId: "hTWKbfoikeg", artist: "Nirvana", title: "Smells Like Teen Spirit", year: "1991" },
    { youtubeId: "0J2QdDbelmY", artist: "The White Stripes", title: "Seven Nation Army", year: "2003" },
    { youtubeId: "gYCTXzOTnXg", artist: "AC/DC", title: "Back in Black", year: "1980" },
    { youtubeId: "gYCTXzOTnXg", artist: "Green Day", title: "Boulevard of Broken Dreams", year: "2004" },
    { youtubeId: "eVTXPUF4Oz4", artist: "Linkin Park", title: "In The End", year: "2000" },
    { youtubeId: "XFkzRNyygfk", artist: "Radiohead", title: "Creep", year: "1993" },
    { youtubeId: "eBG7P-K-r1Y", artist: "Foo Fighters", title: "Everlong", year: "1997" },
    { youtubeId: "vabnZ9-ex7o", artist: "System of a Down", title: "Toxicity", year: "2001" },
    { youtubeId: "CSvFpBOe8eY", artist: "System of a Down", title: "Chop Suey!", year: "2001" },
    { youtubeId: "dxp9w9Ggehc", artist: "Linkin Park", title: "Numb", year: "2003" },
    { youtubeId: "Ee_uujKuJMI", artist: "Green Day", title: "American Idiot", year: "2004" },
    { youtubeId: "lDK9QqIzhwk", artist: "Bon Jovi", title: "Livin' On A Prayer", year: "1986" },
    { youtubeId: "E0ozmU9cJDg", artist: "Red Hot Chili Peppers", title: "GLvohMXgcBo", year: "1992" },
    { youtubeId: "yuFI5KSPAt4", artist: "Red Hot Chili Peppers", title: "Snow (Hey Oh)", year: "2006" },
    { youtubeId: "YlUKcNNmywk", artist: "Red Hot Chili Peppers", title: "Californication", year: "1999" },
    { youtubeId: "SBjQ9tuuTJQ", artist: "Foo Fighters", title: "The Pretender", year: "2007" },
    { youtubeId: "m2zUrruKjDQ", artist: "The Killers", title: "Mr. Brightside", year: "2004" },
    { youtubeId: "l482T0yNkeo", artist: "AC/DC", title: "Highway to Hell", year: "1979" },
    { youtubeId: "X4bgXH3sJ2Q", artist: "Iron Maiden", title: "The Trooper", year: "1983" },
    { youtubeId: "tAGnKpE4NCI", artist: "Metallica", title: "Nothing Else Matters", year: "1991" },
    { youtubeId: "CD-E-LDc384", artist: "Metallica", title: "Enter Sandman", year: "1991" },
    { youtubeId: "bWXazVhlyxQ", artist: "Rage Against The Machine", title: "Killing In The Name", year: "1992" },
    { youtubeId: "7QU1nvuxaMA", artist: "Audioslave", title: "Like a Stone", year: "2002" },
    { youtubeId: "3YxaaGgTQYM", artist: "Evanescence", title: "Bring Me To Life", year: "2003" },
    { youtubeId: "3mbBbFH9fAg", artist: "Soundgarden", title: "Black Hole Sun", year: "1994" },
    { youtubeId: "hmCj7k2ZHuo", artist: "Simple Plan", title: "Welcome To My Life", year: "2004" },
    { youtubeId: "MOdmNxjTh3Q", artist: "Fall Out Boy", title: "Sugar, We're Goin Down", year: "2005" },
    { youtubeId: "eebfMFzJHNs", artist: "Green Day", title: "Warning", year: "2009" },
    { youtubeId: "7iNbnineUCI", artist: "The Offspring", title: "The Kids Aren't Alright", year: "1998" },
    { youtubeId: "RRKJiM9Njr8", artist: "My Chemical Romance", title: "Welcome to the Black Parade", year: "2006" },
    { youtubeId: "CxKWTzr-k6s", artist: "Pearl Jam", title: "Even Flow", year: "1991" },
    { youtubeId: "araU0fZj6oQ", artist: "Staind", title: "It's Been Awhile", year: "2001" },
    { youtubeId: "PiihIwhjIvQ", artist: "Papa Roach", title: "Last Resort", year: "2000" },
    { youtubeId: "jRGrNDV2mKc", artist: "Korn", title: "Freak On a Leash", year: "1998" },
    { youtubeId: "xmUZ6nCFNoU", artist: "The Smashing Pumpkins", title: "Today", year: "1993" },
    { youtubeId: "3c4_jTnsegM", artist: "Thirty Seconds to Mars", title: "The Kill", year: "2005" },
    { youtubeId: "YB8ALvSUK_g", artist: "Army of Anyone", title: "Father Figure", year: "2006" },
    { youtubeId: "DWaB4PXCwFU", artist: "Breaking Benjamin", title: "The Diary of Jane", year: "2006" },
    { youtubeId: "8295rOMvtQI", artist: "Incubus", title: "Wish You Were Here", year: "2001" },
    { youtubeId: "JnfyjwChuNU", artist: "Red Hot Chili Peppers", title: "By the Way", year: "2002" },
    { youtubeId: "Nco_kh8xJDs", artist: "Alice In Chains", title: "Would?", year: "1992" },
    { youtubeId: "CSvFpBOe8eY", artist: "System of a Down", title: "Chop Suey!", year: "2001" },
    { youtubeId: "OYjZK_6i37M", artist: "Godsmack", title: "I Stand Alone", year: "2002" },
    { youtubeId: "HAkHqYlqops", artist: "Matchbox Twenty", title: "Push", year: "1996" },
    { youtubeId: "n9h7hU6_VI4", artist: "Three Days Grace", title: "Animal I Have Become", year: "2006" },
    { youtubeId: "lL2ZwXj1tXM", artist: "Three Days Grace", title: "Never Too Late", year: "2006" },
    { youtubeId: "04F4xlWSFh0E", artist: "Drowning Pool", title: "Bodies", year: "2001" },
    { youtubeId: "HMUDVMiITOU", artist: "Skillet", title: "Monster", year: "2009" },
    { youtubeId: "5NPBIwQyPWE", artist: "Avril Lavigne", title: "Complicated", year: "2010" },
    { youtubeId: "NUTGr5t3MoY", artist: "Green Day", title: "Basket Case", year: "1994" },
    { youtubeId: "E0ozmU9cJDg", artist: "Metallica", title: "Master Of Puppets", year: "1986" },
    { youtubeId: "z5vA9CwZKNY", artist: "Hollywood Undead", title: "Everywhere I Go", year: "2009" },
    { youtubeId: "QkF3oxziUI4", artist: "Led Zeppelin", title: "Stairway to Heaven", year: "1971" },
    { youtubeId: "-tJYN-eG1zk", artist: "Queen", title: "We Will Rock You", year: " 1977" },
    { youtubeId: "bx1Bh8ZvH84", artist: "Oasis", title: "Wonderwall", year: "1995" },
    { youtubeId: "QkF3oxziUI4", artist: "Led Zeppelin", title: "Stairway to Heaven", year: "1971" },
    { youtubeId: "vabnZ9-ex7o", artist: "Nirvana", title: "Come As You Are", year: "1991" },
    { youtubeId: "Vds8ddYXYZY", artist: "Ed Sheeran", title: "Shape of You", year: "2017" },
    { youtubeId: "9bZkp7q19f0", artist: "PSY", title: "Gangnam Style", year: "2012" },
    { youtubeId: "7Qp5vcuMIlk", artist: "Ed Sheeran", title: "Castle on the Hill", year: "2017" },
    { youtubeId: "RgKAFK5djSk", artist: "Wiz Khalifa ft. Charlie Puth", title: "See You Again", year: "2015" },
    { youtubeId: "OPf0YbXqDm0", artist: "Mark Ronson ft. Bruno Mars", title: "Uptown Funk", year: "2014" },
    { youtubeId: "fHI8X4OXluQ", artist: "The Weeknd", title: "Blinding Lights", year: "2019" },
    { youtubeId: "dQw4w9WgXcQ", artist: "Rick Astley", title: "Never Gonna Give You Up", year: "1987" },
    { youtubeId: "fRh_vgS2dFE", artist: "Justin Bieber", title: "Sorry", year: "2015" },
    { youtubeId: "IcrbM1l_BoI", artist: "Avicii", title: "Wake Me Up", year: "2013" },
    { youtubeId: "uHpcbSsPrRE", artist: "Taylor Swift", title: "Blank Space", year: "2014" },
    { youtubeId: "xizN47Box_Y", artist: "The Weeknd", title: "Starboy", year: "2016" },
    { youtubeId: "DUT5rEU6pqM", artist: "Shakira ft. Wyclef Jean", title: "Hips Don't Lie", year: "2006" },
    { youtubeId: "4m1EFMoRFvY", artist: "Beyoncé", title: "Single Ladies", year: "2008" },
    { youtubeId: "YVkUvmDQ3HY", artist: "Eminem", title: "Without Me", year: "2002" },
    { youtubeId: "nfWlot6h_JM", artist: "Taylor Swift", title: "Shake It Off", year: "2014" },
    { youtubeId: "2Abk1jAONjw", artist: "Lady Gaga", title: "Just Dance", year: "2008" },
    { youtubeId: "pok8H_KF1FA", artist: "Doja Cat", title: "Say So", year: "2020" },
    { youtubeId: "kffacxfA7G4", artist: "Justin Bieber ft. Ludacris", title: "Baby", year: "2010" },
    { youtubeId: "qeMFqkcPYcg", artist: "Eurythmics", title: "Sweet Dreams", year: "1983" },
    { youtubeId: "Z85lxckrtzg", artist: "Michael Jackson", title: "Thriller", year: "1982" },
    { youtubeId: "2yJgwwDcgV8", artist: "Nyan Cat", title: "Nyan Cat", year: "2011" },
    { youtubeId: "SR6iYWJxHqs", artist: "Bruno Mars", title: "Grenade", year: "2010" },
    { youtubeId: "tsMDKjb54EM", artist: "LMFAO", title: "Party Rock Anthem", year: "2011" },
    { youtubeId: "QK8mJJJvaes", artist: "Macklemore & Ryan Lewis", title: "Thrift Shop", year: "2012" },
    { youtubeId: "8SbUC-UaAxE", artist: "Guns N' Roses", title: "November Rain", year: "1992" },
    { youtubeId: "k85mRPqvMbE", artist: "Crazy Frog", title: "Axel F", year: "2009" },
    { youtubeId: "L0MK7qz13bU", artist: "FROZEN", title: "Let It Go", year: "2013" },
    { youtubeId: "y6120QOlsfU", artist: "Darude", title: "Sandstorm", year: "2000" },
    { youtubeId: "r7qovpFAGrQ", artist: "Lil Nas X", title: "Old Town Road", year: "2019" },
    { youtubeId: "ru0K8uYEZWw", artist: "Justin Timberlake", title: "Can't Stop The Feeling!", year: "2016" },
    { youtubeId: "CevxZvSJLk8", artist: "Katy Perry", title: "Roar", year: "2013" },
    { youtubeId: "QGJuMBdaqIw", artist: "Katy Perry", title: "Firework", year: "2010" },
    { youtubeId: "N1BcpzPGlYQ", artist: "Maroon 5", title: "Sugar", year: "2015" },
    { youtubeId: "uSD4vsh1zDA", artist: "Black Eyed Peas", title: "I Gotta Feeling", year: "2009" },
    { youtubeId: "hHUbLv4ThOo", artist: "Pitbull ft. Ke$ha", title: "Timber", year: "2013" },
    { youtubeId: "rtOvBOTyX00", artist: "Christina Perri", title: "A Thousand Years", year: "2011" },
    { youtubeId: "Ng_t5D8tVvM", artist: "LMFAO", title: "Sorry For Party Rocking", year: "2011" },
    { youtubeId: "7PCkvCPvDXk", artist: "Meghan Trainor", title: "All About That Bass", year: "2014" },
    { youtubeId: "HMUDVMiITOU", artist: "DJ Snake & Lil Jon", title: "Turn Down for What", year: "2013" },
    { youtubeId: "LjhCEhWiKXk", artist: "Bruno Mars", title: "Just The Way You Are", year: "2010" },
    { youtubeId: "pRpeEdMmmQ0", artist: "Shakira ft. Freshlyground", title: "Waka Waka", year: "2010" },
    { youtubeId: "e-ORhEE9VVg", artist: "Taylor Swift", title: "Blank Space", year: "2014" },
    { youtubeId: "_5-QkAVRkqU", artist: "Lady Gaga", title: "Bad Romance", year: "2009" },
    { youtubeId: "RBumgq5yVrA", artist: "Passenger", title: "Let Her Go", year: "2012" },
    { youtubeId: "3AtDnEC4zak", artist: "Charlie Puth", title: "We Don't Talk Anymore", year: "2016" },
    { youtubeId: "psuRGfAaju4", artist: "Owl City", title: "Fireflies", year: "2009" },
    { youtubeId: "zt6aRKpf9T4", artist: "Drake", title: "Hotline Bling", year: "2015" },
    { youtubeId: "QNJL6nfu__Q", artist: "Michael Jackson", title: "They Don't Care About Us", year: "2009" },
    { youtubeId: "NUTGr5t3MoY", artist: "Green Day", title: "Basket Case", year: "1994" },
    { youtubeId: "ZyhrYis509A", artist: "Aqua", title: "Barbie Girl", year: "1997" },
    { youtubeId: "etSbOs3aUqI", artist: "Gary Jules", title: "Mad World", year: "2001" },
    { youtubeId: "bx1Bh8ZvH84", artist: "Oasis", title: "Wonderwall", year: "1995" },
    { youtubeId: "JRfuAukYTKg", artist: "David Guetta ft Sia", title: "Titanium", year: "2011" },
    { youtubeId: "pt8VYOfr8To", artist: "Taylor Swift", title: "Shake It Off", year: "2014" },
    { youtubeId: "KlyXNRrsk4A", artist: "Katy Perry", title: "Last Friday Night", year: "2011" },
    { youtubeId: "pt8VYOfr8To", artist: "Britney Spears", title: "Work Bitch", year: "2013" },
    { youtubeId: "PIh2xe4jnpk", artist: "MAGIC!", title: "Rude", year: "2013" },
    { youtubeId: "xUNqsfFUwhY", artist: "The Beatles", title: "Here Comes The Sun", year: "1969" },
    { youtubeId: "YBHQbu5rbdQ", artist: "Fifth Harmony", title: "Worth It", year: "2015" },
    { youtubeId: "zABLecsR5UE", artist: "Lewis Capaldi", title: "Someone You Loved", year: "2019" },
    { youtubeId: "nlcIKh6sBtc", artist: "Lorde", title: "Royals", year: "2013" },
    { youtubeId: "U0CGsw6h60k", artist: "Rihanna", title: "What's my name?", year: "2010" },
    { youtubeId: "1G4isv_Fylg", artist: "Coldplay", title: "Paradise", year: "2011" },
    { youtubeId: "YykjpeuMNEk", artist: "Coldplay", title: "Hymn For The Weekend", year: "2016" },
    { youtubeId: "1k8craCGpgs", artist: "Journey", title: "Don't Stop Believin'", year: "1981" },
    { youtubeId: "KEI4qSrkPAs", artist: "The Weeknd", title: "an't Feel My Face", year: "2015" },
    { youtubeId: "hTWKbfoikeg", artist: "Nirvana", title: "Smells Like Teen Spirit", year: "1991" },
    { youtubeId: "YkgkThdzX-8", artist: "John Lennon", title: "Imagine", year: "1971" },
    { youtubeId: "ftjEcrrf7r0", artist: "U2", title: "One", year: "1992" },
    { youtubeId: "fJ9rUzIMcZQ", artist: "Queen", title: "Bohemian Rhapsody", year: "1975" },
    { youtubeId: "A_MjCqQoLLA", artist: "The Beatles", title: "Hey Jude", year: "1968" },
    { youtubeId: "IwOfCgkyEj0", artist: "Bob Dylan", title: "Like a Rolling Stone", year: "1965" },
    { youtubeId: "nrIPxlFzDi0", artist: "The Rolling Stones", title: "(I Can't Get No) Satisfaction", year: "1965" },
    { youtubeId: "02D2T3wGCYg", artist: "Sex Pistols", title: "God Save the Queen", year: "1977" },
    { youtubeId: "1w7OgIMMRc4", artist: "Guns N' Roses", title: "Sweet Child O' Mine", year: "1987" },
    { youtubeId: "EfK-WX2pa8c", artist: "The Clash", title: "London Calling", year: "1979" },
    { youtubeId: "-Y1i2vvzv8Y", artist: "Eagles", title: "Hotel California", year: "1977" },
    { youtubeId: "GlPlfCy1urI", artist: "Elton John", title: "Your Song", year: "1970" },
    { youtubeId: "Eab_beh07HU", artist: "The Beach Boys", title: "Good Vibrations", year: "1966" },
    { youtubeId: "PWgvGjAhvIw", artist: "OutKast", title: "Hey Ya!", year: "2003" },
    { youtubeId: "mrZRURcb1cM", artist: "Fleetwood Mac", title: "Dreams", year: "1977" },
    { youtubeId: "FPoKiGQzbSQ", artist: "Missy Elliott", title: "Get Ur Freak On", year: "2001" },
    { youtubeId: "wEBlaMOmKV4", artist: "Sam Cooke", title: "A Change Is Gonna Come", year: "1964" },
    { youtubeId: "8PaoLy7PHwk", artist: "Public Enemy", title: "Fight the Power", year: "1989" },
    { youtubeId: "6FOUqQt3Kg0", artist: "Aretha Franklin", title: "Respect", year: "1967" },
    { youtubeId: "H-kA3UtBj4M", artist: "Marvin Gaye", title: "What's Going On", year: "1971" },
    { youtubeId: "HtUH9z_Oey8", artist: "The Beatles", title: "Strawberry Fields Forever", year: "1967" },
    { youtubeId: "vabnZ9-ex7o", artist: "Nirvana", title: "Come as You Are", year: "1991" },
    { youtubeId: "oRdxUFDoQe0", artist: "Michael Jackson", title: "Beat It", year: "1982" },
    { youtubeId: "UG3VcCAlUgE", artist: "Prince", title: "When Doves Cry", year: "1984" },
    { youtubeId: "79fzeNUqQbQ", artist: "Madonna", title: "Like a Prayer", year: "1989" },
    { youtubeId: "OMOGaugKpzs", artist: "The Police", title: "Every Breath You Take", year: "1983" },
    { youtubeId: "H3axP4norfk", artist: "50 Cent", title: "In Da Club", year: "2003" },
    { youtubeId: "uelHwf8o7_U", artist: "Eminem", title: "Love The Way You Lie", year: "2010" },
    { youtubeId: "YVkUvmDQ3HY", artist: "Eminem", title: "Lose Yourself", year: "2002" },
    { youtubeId: "PsO6ZnUZI0g", artist: "Kanye West", title: "Stronger", year: "2007" },
    { youtubeId: "uSD4vsh1zDA", artist: "Black Eyed Peas", title: "I Gotta Feeling", year: "2009" },
    { youtubeId: "GeZZr_p6vB8", artist: "Nelly", title: "Hot In Herre", year: "2002" },
    { youtubeId: "6vwNcNOTVzY", artist: "Kanye West", title: "Gold Digger", year: "2005" },
    { youtubeId: "c4Z2Ft-JIp8", artist: "50 Cent", title: "Candy Shop", year: "2005" },
    { youtubeId: "6uikJTnmtgw", artist: "Jay-Z", title: "99 Problems", year: "2004" },
    { youtubeId: "pZG7IK99OvI", artist: "Ludacris", title: "Stand Up", year: "2003" },
    { youtubeId: "GxBSyx85Kp8", artist: "Usher ft. Lil Jon, Ludacris", title: "Yeah! Yeah! Yeah!", year: "2004" },
    { youtubeId: "_CL6n0FJZpk", artist: "Dr. Dre", title: "Still D.R.E.", year: "1999" },
    { youtubeId: "CvBfHwUxHIk", artist: "Rihanna ft. JAY-Z", title: "Umbrella", year: "2007" },
    { youtubeId: "8gyLR4NfMiI", artist: "Chris Brown ft. Lil Wayne, Busta Rhymes", title: "Look at Me Now", year: "2011" },
    { youtubeId: "uelHwf8o7_U", artist: "Eminem", title: "Love The Way You Lie", year: "2010" },

],
};

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
  const [turnProgress, setTurnProgress] = useState(0);
  const [selectedPlaylist, setSelectedPlaylist] = useState("RockPlaylist");
  const [adminMode, setAdminMode] = useState(false);
  const [showLeaderboardPopup, setShowLeaderboardPopup] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [volume, setVolume] = useState(100);
  const youtubePlayer = useRef(null);

  
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
      setTurnProgress(0); // Reset turn progress
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

  const initializeYouTubePlayer = () => {
    if (iframeRef.current) {
      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          'onReady': onPlayerReady,
        },
      });
    }
  };
 

  
  const onPlayerReady = (event) => {
    // Set initial volume
    event.target.setVolume(volume);
  };
  

const handleVolumeChange = (newVolume) => {
  setVolume(newVolume);
  try {
    if (iframeRef.current) {
      const player = iframeRef.current.contentWindow;
      // Send a postMessage to the YouTube player
      player.postMessage(JSON.stringify({
        event: 'command',
        func: 'setVolume',
        args: [newVolume]
      }), '*');
    }
  } catch (error) {
    console.error('Error changing volume:', error);
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
    if (roundCount + 1 >= roundLimit) { 
        
        setShowLeaderboardPopup(true); // Show leaderboard popup

        return;
    }

    if (turnProgress < players.length - 1) {
        setTurnProgress(turnProgress + 1);
        setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
        setPlayerAnswers({ artist: "", title: "", year: "" });
        setLastResult(null);
        loadRandomSong();
    } else {
        setRoundCount(roundCount + 1);
        setTurnCount(turnCount + 1); 
        setTurnProgress(0); 
        setCurrentPlayerIndex(0); 
        loadRandomSong();
    }
};

 const closeLeaderboardAndGoToMenu = () => {
  setShowLeaderboardPopup(false);
  endGame();
  setGameStarted(false);
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

  const adminSkipRound = () => {
    loadRandomSong();  // This skips the current round without affecting the player skips
  };
  const goToMainMenu = () => {
    setShowLeaderboard(false); // Hide the leaderboard
    setGameStarted(false); // Reset the game state
    
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
  
  const getSortedPlayers = () => {
    return Object.entries(scores)
      .sort((a, b) => b[1] - a[1]) // Sort players by score in descending order
      .map(([player, score], index) => ({
        rank: index + 1,
        player,
        score
      }));
  };


  // Toggle the rulebook modal
  const toggleRules = () => setShowRules(!showRules);


  //ui bullshit

return (
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white font-sans">
    {!gameStarted ? (
      <div className="max-w-md mx-auto p-4 bg-gradient-to-t from-purple-700 to-blue-600 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 title-animation">Carlonjumalas's Hitster</h1>
        
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
        <button
          onClick={toggleRules}
          className="p-2 mt-4 bg-indigo-500 hover:bg-indigo-400 rounded-lg text-white"
        >
          Rules
        </button>

        {/* Rulebook Modal */}
        {showRules && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-1/2">
              <h2 className="text-2xl font-bold mb-4">Game Rules</h2>
              <p className="text-lg mb-4">1. Players take turns guessing the artist, title, and year of a song.</p>
              <p className="text-lg mb-4">2. Correct answers score points for the player.</p>
              <p className="text-lg mb-4">3. Players can skip a song up to 3 times per game.</p>
              <p className="text-lg mb-4">4. The player with the highest score at the end of the game wins!</p>
              <button
                onClick={toggleRules}
                className="p-2 bg-blue-500 hover:bg-blue-400 rounded-lg text-white"
              >
                Close Rules
              </button>
            </div>
          </div>
        )}

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
            <option value="AnythingGoes">Anything Goes!</option>
            <option value="GIGALIST">GIGA LIST</option>
          </select>
        </div>

        <div className="mt-4">
          {selectedPlaylist === "RockPlaylist" && (
            <p className="text-lg">Rock Playlist has 53 songs, all correct.</p>
          )}
          {selectedPlaylist === "AllTimePopular" && (
            <p className="text-lg">All Time Popular Playlist has 56 songs, all correct.</p>
          )}
          {selectedPlaylist === "AnythingGoes" && (
            <p className="text-lg">All genres also has not popular songs. Has 159 songs.</p>
          )}
          {selectedPlaylist === "Hits2000to2025" && (
            <p className="text-lg">List of popular hits from 2000 to 2025.</p>
          )}
          {selectedPlaylist === "GIGALIST" && (
            <p className="text-lg">All lists put together.</p>
          )}
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
          <h3 className="text-xl text-center mb-4">Turn Count: {turnCount}</h3>

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

          {showLeaderboardPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-5x4 font-bold mb-4 text-green">Final Leaderboard</h2>
                <ul className="text-lg text-black">
                  {getSortedPlayers().map(({ rank, player, score }) => (
                    <li key={rank} className="mb-2">
                      <span className="font-bold">#{rank}</span>: {player} - {score} points
                    </li>
                  ))}
                </ul>
                <button
                  onClick={closeLeaderboardAndGoToMenu}
                  className="mt-4 p-2 bg-blue-500 hover:bg-blue-400 rounded-lg text-white"
                >
                  Back to Main Menu
                </button>
              </div>
            </div>
          )}

          {/* Victory Screen */}
          {roundCount >= roundLimit && !gameStarted && showLeaderboard && (
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 text-green-500">Game Over! Final Scores</h1>
              <ul className="text-lg">
                {getSortedPlayers().map(({ rank, player, score }) => (
                  <li key={rank} className="mb-2">
                    <span className="font-bold">#{rank}</span>: {player} - {score} points
                  </li>
                ))}
              </ul>
              <h2 className="text-2xl font-bold mt-4">Congratulations to the Winner! {player}</h2>
              <button
                onClick={goToMainMenu}
                className="p-2 bg-blue-500 hover:bg-blue-400 rounded-lg text-white mt-4"
              >
                Back to Main Menu
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
                      left: "125px",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "black",
                      zIndex: 2,
                    }}
                  ></div>
                )}

                <iframe
                  ref={iframeRef}
                  width="300"
                  height="200"
                  src={`https://www.youtube.com/embed/${song.youtubeId}?autoplay=1&enablejsapi=1`}
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
          <div className="flex items-center space-x-2 mb-4">
            <button
              onClick={() => setVideoVisible(!videoVisible)}
              className="p-2 bg-orange-500 hover:bg-orange-400 rounded-lg"
            >
              {videoVisible ? "Hide Video" : "Show Video"}
            </button>
            <button
              onClick={() => {
                try {
                  if (iframeRef.current) {
                    const player = iframeRef.current.contentWindow;
                    // Get current time and add 15 seconds
                    player.postMessage(JSON.stringify({
                      event: 'command',
                      func: 'seekTo',
                      args: ['50', true]
                    }), '*');
                  }
                } catch (error) {
                  console.error('Error skipping forward:', error);
                }
              }}
              className="p-2 bg-blue-500 hover:bg-blue-400 rounded-lg"
            >
              Skip +15 Seconds
            </button>
            {/* Volume Control */}
            <div className="flex items-center space-x-2">
              <span className="text-white">Volume:</span>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => handleVolumeChange(parseInt(e.target.value))}
                className="w-32"
              />
              <span className="text-white">{volume}%</span>
            </div>
          </div>

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
        </div>
      </div>
    )}
  </div>
  );
}
