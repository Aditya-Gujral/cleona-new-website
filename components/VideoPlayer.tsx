import React from 'react';
import './VideoPlayer.css'; // Import a CSS file for styling

const VideoPlayer = ({ videoSrc }) => {
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

