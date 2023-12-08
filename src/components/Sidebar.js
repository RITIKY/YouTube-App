import React from "react";
import { useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FeedIcon from '@mui/icons-material/Feed';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import CollapseSideBar from "./CollapseSideBar";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const theme = useSelector((store) => store.theme.isDarkTheme);
  if (!isMenuOpen) {
    return <CollapseSideBar/>
  };

  const listItems = `flex items-center space-x-4 cursor-pointer  p-2 rounded ${theme ? "hover:bg-gray-800" : "hover:bg-gray-300"
    }`;
  return (
    <aside
      className={`fixed top-16 z-50 w-60 h-screen left-0 overflow-y-auto ${theme ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
    >
      <div className="p-1 shadow-lg w-52 text-base">
        <ul className="">
          <li className={listItems}><HomeIcon className="mr-3" /><Link to='/'>Home</Link></li>
          <li className={listItems}><FlashOnIcon className="mr-3" /><Link>Shorts</Link></li>
          <li className={listItems}><SubscriptionsIcon className="mr-3" /><Link>Subscriptions</Link></li>
        </ul>
        <hr className="my-4 border-t border-gray-800" />
        {/* <h1 className="font-bold pt-4">Explore</h1> */}
        <ul className="">
          <li className={listItems}>You<KeyboardArrowRightIcon className="mr-3" /></li>
          <li className={listItems}><HistoryIcon className="mr-3" />History</li>
          <li className={listItems}><VideoLibraryIcon className="mr-3" />Library</li>
          <li className={listItems}><PlayCircleFilledIcon className="mr-3" />Your videos</li>
          <li className={listItems}><WatchLaterIcon className="mr-3" />Watch Later</li>
          <li className={listItems}><ThumbUpOffAltIcon className="mr-3" />Liked videos</li>
          <li className={listItems}><KeyboardArrowDownIcon className="mr-3" />Show More</li>
        </ul>
        <hr className="my-4 border-t border-gray-800" />
        <ul>
          <p className="ml-2 font-bold">Subscriptions</p>
          <li className={listItems}><AccountCircleIcon className="mr-2" />Akshay Saini </li>
          <li className={listItems}><AccountCircleIcon className="mr-2" />chai aur code </li>
          <li className={listItems}><AccountCircleIcon className="mr-2" />Codevolution </li>
          <li className={listItems}><AccountCircleIcon className="mr-2" />Code step by step </li>
          <li className={listItems}><AccountCircleIcon className="mr-2" />Clever Programmer </li>
          <li className={listItems}><KeyboardArrowDownIcon className="mr-3" />Show 5 more </li>
          {/* <li className={listItems}>Show 5 more </li> */}
        </ul>
        <hr className="my-4 border-t border-gray-800" />
        <ul>
          <p className="ml-2 font-bold">Explore</p>
          <li className={listItems}><WhatshotIcon className="mr-3" />Trending</li>
          <li className={listItems}><ShoppingBasketIcon className="mr-3" />Shopping</li>
          <li className={listItems}><MusicNoteIcon className="mr-3" />Music</li>
          <li className={listItems}><LiveTvIcon className="mr-3" />Flims</li>
          <li className={listItems}><WifiTetheringIcon className="mr-3" />Live</li>
          <li className={listItems}><SportsEsportsIcon className="mr-3" />Gaming</li>
          <li className={listItems}><FeedIcon className="mr-3" />News</li>
          <li className={listItems}><EmojiEventsIcon className="mr-3" />Sport</li>
          <li className={listItems}><SchoolIcon className="mr-3" />Learing</li>
          <li className={listItems}><DryCleaningIcon className="mr-3" />Fasion & beauty</li>
          <li className={listItems}><PodcastsIcon className="mr-3" />Podcasts</li>
        </ul>

        <hr className="my-4 border-t border-gray-800" />
        <p className="text-sm"> About Press copyright Contact us Creator Advertise Developers</p>
      </div>
    </aside>
  );
};

export default Sidebar;
