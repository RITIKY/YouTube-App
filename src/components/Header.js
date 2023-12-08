import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { toggleMenu } from "../utils/appSlice";
import { toggleTheme } from "../utils/themeSlice";
import SearchSuggestions from "./SearchSuggestions";

const Header = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow-lg p-2 ${
        isDarkTheme ? "bg-gray-900 text-white" : "bg-slate-50 text-black"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-1/6">
          <button
            className="mr-4 p-2 h-12 focus:outline-none"
            onClick={toggleMenuHandler}
          >
            <MenuIcon className="text-gray-400" />
          </button>
          <a href="https://youtube-clone-viewtube.netlify.app/">
            <img
              className="h-12"
              src={
                isDarkTheme
                  ? "https://youtube-clone-viewtube.netlify.app//youTube-Header-logo.png"
                  : "https://tse3.mm.bing.net/th?id=OIP._0mJeL1mx94Kw7G2TkLu2QHaEK&pid=Api&P=0&h=180"
              }
              alt="youtube-logo"
            />
          </a>
        </div>

        <SearchSuggestions />

        <div className="flex items-center">
          <button
            className={`rounded-full p-2 ${
              isDarkTheme ? "bg-gray-700" : "bg-gray-400"
            }`}
            onClick={toggleThemeHandler}
          >
            {isDarkTheme ? "DARK🌛" : "LIGHT ⛅"}
          </button>
          <button className="p-2 focus:outline-none">
            <AccountCircleIcon className="text-gray-400 p-2 text-xl border border-gray-600 rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
