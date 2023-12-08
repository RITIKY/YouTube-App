import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { toggleTheme } from "../utils/themeSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => getSearchSugestions(), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

  const dispatch = useDispatch();
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="fixed bg-white grid grid-flow-col">
      <div className="flex col-span-1 m-2">
        <MenuIcon
          onClick={() => toggleMenuHandler()}
          className="m-2 cursor-pointer"
        />
        <img
          className="w-20 h-10"
          alt="youtube"
          src="https://tse3.mm.bing.net/th?id=OIP._0mJeL1mx94Kw7G2TkLu2QHaEK&pid=Api&P=0&h=180"
        />
      </div>
        <div className="col-span-10 px-52 m-2 ml-16 flex">
          <input
            className="border border-black-400 w-96 h-10 px-4 rounded-l-full bg-gray-50"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-black-400 w-20 h-10 bg-gray-100 text-xs rounded-r-full">
            <SearchIcon className="" />
          </button>
        </div>
      <div className="ml-80 col-span-1">
        <div className="flex space-x-4">
          <button
            className={`rounded-full mt-3 p-2 ${
              isDarkTheme ? "bg-gray-700" : "bg-gray-400"
            }`}
            onClick={toggleThemeHandler}
          >
            {isDarkTheme ? "DARK🌛" : "LIGHT ⛅"}
          </button>
          <AccountCircleIcon className="mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Head;
