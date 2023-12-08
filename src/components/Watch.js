import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispath = useDispatch();
  useEffect(() => {
    dispath(closeMenu());
  }, []);
  return (
    <div className="ml-32 mt-2 bg-white">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Watch;
