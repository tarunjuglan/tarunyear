import React from 'react';
import './PersonalTouches.css';

const PersonalTouches = () => {
  const songs = [
    {
      title: "Tu hai kahan",
      artist: "AUR",
      embed:"https://open.spotify.com/embed/track/3zSSCPpLZ5Oc8nelhhGjKz?utm_source=generator&theme=1"
    },
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      embed: "https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v?utm_source=generator&theme=1"
    },
    {
      title: "Dil Tu Jaan Tu",
      artist: "Gurnazar",
      embed: "https://open.spotify.com/embed/track/69Qzz3yyQSsA0T95jLDoPL?utm_source=generator&theme=1"
    }
  ];

  const shows = [
    {
      title: "Stranger Thing",
      genre: "science fiction, horror, mystery, and drama series",
      description: "phele series jo apne kha mazza a gya😁"
    },
    {
      title: "Money heist",
      genre: " heist Crime/Drama",
      description: "Our first series together🧿"
    },
    {
      title: "Thunderbolt",
      genre: "marvels movie",
      description: "us din tho mazza a gya tha apke sth movie mai or long drive mai🧿"
    }
  ];

  return (
    <div className="personal-touches">
      <div className="songs-section">
        <h2>Our Favorite Songs</h2>
        <p className="section-description">
          Here are some songs that remind us of special moments together. 
          Click on any song to listen to it on Spotify!
        </p>
        <div className="songs-grid">
          {songs.map((song, index) => (
            <div key={index} className="song-card">
              <iframe 
                title={song.title}
                style={{ borderRadius: "12px" }}
                src={song.embed}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      <div className="shows-section">
        <h2>Our Favorite Shows</h2>
        <p className="section-description">
          These are the shows we love watching together. 
          Each one holds special memories !
        </p>
        <div className="shows-grid">
          {shows.map((show, index) => (
            <div key={index} className="show-card">
              <div className="show-content">
                <h3>{show.title}</h3>
                <p className="show-genre">{show.genre}</p>
                <p className="show-description">{show.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="final-message">
        <h2>My Final Message to You</h2>
        <div className="message-content">
          <p>
            My dearest, this past year has been filled with countless beautiful moments, 
            and I'm grateful for every single one of them. You make my world complete, 
            and I can't wait to create many more memories together. I love you pookie wokkie gugli wugli kuchu puchu😁.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalTouches; 