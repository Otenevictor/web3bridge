import React, { useState, useEffect, useRef } from 'react';
import Playlist from '../components/Playlist';
import MusicPlayer from '../components/MusicPlayer';
import axios from 'axios';
function MusicApp() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        // setLoading(true);
        const response = await axios.get(API_URL);
        setSongs(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch music data');
        setLoading(false);
        console.error('Error fetching music data:', err);
      }
    };

    fetchMusic();
  }, []);

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [currentSongIndex]);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Play error:", error);
        setError("Failed to play audio. Please try again.");
      });
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    if (shuffle) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      setCurrentSongIndex(randomIndex);
    } else {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    }
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    if (shuffle) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      setCurrentSongIndex(randomIndex);
    } else {
      setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    }
    setIsPlaying(true);
  };

  const handleShuffle = () => {
    setShuffle(!shuffle);
  };

  const handleSongSelect = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Play error on song change:", error);
        });
      }
    }
  }, [currentSongIndex, isPlaying]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#4d4d62]">
        <div className="text-white text-xl">Loading music...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#4d4d62]">
        <div className="text-white text-xl">{error}</div>
      </div>
    );
  }

  // Map API data to the format expected by your components
  const mappedSongs = songs.map(song => ({
    title: song.songTitle,
    artist: song.artistName,
    cover: song.songImage,
    audio: song.songUrl,
    album: { name: song.albumName },
    duration: duration
  }));

  return (
    <div className="min-h-screen bg-[#4d4d62] bg-cover bg-center bg-no-repeat pt-20 pb-10"
      style={{ backgroundImage: `url('https://res.cloudinary.com/de5sm2jjl/image/upload/v1742242477/vecteezy_close-up-of-a-white-piano-keyboard_48174245_zdgl7i.jpg')` }}>
      <div className="container mx-auto pt-10 flex flex-col items-center justify-center space-y-5">
        <audio
          ref={audioRef}
          src={songs[currentSongIndex]?.songUrl}
          onEnded={handleNext}
          preload="metadata"
        />

        <MusicPlayer
          currentSong={mappedSongs[currentSongIndex]}
          isPlaying={isPlaying}
          onPlay={handlePlay}
          onPause={handlePause}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onShuffle={handleShuffle}
          shuffle={shuffle}
        />

        <Playlist
          songs={mappedSongs}
          currentSongIndex={currentSongIndex}
          onSongSelect={handleSongSelect}
          isPlaying={isPlaying}
          duration={duration}
          currentTime={currentTime}
        />
      </div>
    </div>
  );
}

export default MusicApp;