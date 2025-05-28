// Example: BackgroundVideo.jsx
import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-[100%] h-full object-cover"
      >
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Your page content */}
      {/* <div className="relative z-10 text-white p-10">
        <h1 className="text-4xl font-bold">Welcome to My Page</h1>
      </div> */}
    </div>
  );
};

export default BackgroundVideo;
