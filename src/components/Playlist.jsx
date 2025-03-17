import React from 'react';

const Playlist = ({ songs, currentSongIndex, onSongSelect, isPlaying, duration }) => {
  if (!songs || songs.length === 0) {
    return null;
  }

  const formatDuration = (seconds) => {
    if (!seconds || isNaN(seconds) || seconds === 0) return "0:00";
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
  };

  return (
    <div className="w-full max-w-md bg-[#1b1b32] border-3 border-[#3b3b4f] rounded-md overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-[#3b3b4f]">
        <h2 className="text-white font-mono text-lg">Playlist</h2>
        <span className="text-[#f1be32] text-sm">{songs.length} songs</span>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {songs.map((song, index) => (
          <div 
            key={index}
            className={`flex items-center p-3 border-b border-[#3b3b4f] cursor-pointer hover:bg-[#2a2a40] ${
              currentSongIndex === index ? 'bg-[#2a2a40]' : ''
            }`}
            onClick={() => onSongSelect(index)}
          >
            <div className="flex-shrink-0 mr-3">
              <img 
                src={song.cover || "https://via.placeholder.com/40"} 
                alt={song.title} 
                className="w-10 h-10 object-cover"
              />
            </div>
            
            <div className="flex-grow">
              <p className={`m-0 ${currentSongIndex === index ? 'text-[#f1be32]' : 'text-[#dfdfe2]'}`}>
                {song.title}
              </p>
              <p className="m-0 text-xs text-gray-400">{song.artist}</p>
            </div>
            
            <div className="flex-shrink-0 ml-2">
              <span className="text-xs text-gray-400">
                {/* Only show duration for current song, as we don't have duration for others */}
                {currentSongIndex === index ? formatDuration(duration) : "--:--"}
              </span>
            </div>
            
            {currentSongIndex === index && isPlaying && (
              <div className="flex-shrink-0 ml-2">
                <span className="text-[#f1be32]">▶</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;