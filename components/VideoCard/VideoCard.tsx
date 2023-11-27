import React from "react";

function VideoCard() {
  return (
    <div className="flex flex-col justify-center align-center items-center h-[300px]">
      <iframe
        width="280"
        height="200"
        src="https://www.youtube.com/embed/brox79oePIw"
        title="Rajnigandha montage film_2005-2006"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <p className="text-theme_gold font-bold">The Tasts of Royalty</p>
      <p className="text-sm w-[80%] text-center">
        Check out the sneak peak of our labs of mastery live at youtube
      </p>
    </div>
  );
}

export default VideoCard;
