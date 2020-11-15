import React, { useRef, useState, useEffect } from "react";

import "./Video.scss";

const Video = ({ src }) => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (!playing) {
      ref.current.requestFullscreen().then(() => ref.current.play());
      setPlaying(true);
    } else {
      setPlaying(false);
      ref.current.pause();
    }
  };

  useEffect(() => {
    ref.current.onfullscreenchange = () => {
      if (playing && !open) return setOpen(true);
      if (playing && open) {
        setPlaying(false);
        setOpen(false);
        ref.current.pause();
      }
    };
  }, [ref, playing, open]);

  return (
    <div className="video">
      <div className="video__media">
        <span className="video__icon" onClick={handleClick}>
          <i
            className={`far fa-${playing ? "pause" : "play"}-circle fa-10x`}
          ></i>
        </span>
        <video ref={ref} loop>
          <source src={src} type="video/mp4"></source>
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </div>
  );
};

export default Video;
