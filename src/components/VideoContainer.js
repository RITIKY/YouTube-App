import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items, "hii");
    setVideos(json.items);
    // console.log(setVideos,"print data")
  };
  return (
    <div
      className={`${
        theme ? "bg-gray-900 text-white" : "bg-white text-black"
      } flex flex-wrap ml-12 mt-14 p-8`}
    >
      {videos.map((video) => (
        <Link to={"/Watch?v="+ video.id}>
          <VideoCart key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
