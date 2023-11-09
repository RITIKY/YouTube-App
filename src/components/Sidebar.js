import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const theme = useSelector((store) => store.theme.isDarkTheme);
  if (!isMenuOpen) return null;

  const listItems = `flex items-center space-x-4 cursor-pointer  p-2 rounded ${
    theme ? "hover:bg-gray-800" : "hover:bg-gray-300"
  }`;
  return (
    <aside
      className={`fixed top-16  z-50  w-64 p-4 h-screen   left-0 overflow-y-auto ${
        theme ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="p-5 shadow-lg w-40">
        <ul className="space-y-2">
          <li className={listItems}>Home</li>
          <li className={listItems}>Shorts</li>
          <li className={listItems}>Subscriptions</li>
        </ul>
        <h1 className="font-bold pt-4">Explore</h1>
        <ul className="px-3">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
