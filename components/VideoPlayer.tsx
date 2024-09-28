import React from 'react';
import './VideoPlayer.css'; // Import a CSS file for styling

// Define the type for props
interface VideoPlayerProps {
  videoSrc: string; // Specify that videoSrc should be a string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video-player">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

