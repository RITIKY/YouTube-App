import React from 'react'
import { useSelector } from 'react-redux'
import Button from './Button';


const mapButtons = ["All", "JavaScript","React","Tailwind","Node Js","CSS","Music", "Sports","Cricket", "News", "Live", "T-series", "DataBase", "Algorithms", "movies", "webseries", "➤"];

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const theme = useSelector((store) => store.theme.isDarkTheme)
  return (
    <div className={`fixed top-14 p-4 ml-12 flex ${theme ? "bg-gray-300 text-white" : "bg-white text-black"}`} style={{ width: "92rem" }}>
      {mapButtons.map((buttonName, index) => (
        <Button key={index} name={buttonName} />
      ))}
    </div>
  )
}

export default ButtonList;