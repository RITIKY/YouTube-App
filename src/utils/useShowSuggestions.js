import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResult } from "../utils/searchSlice";
const useShowSuggestion = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);
  console.log(searchCache);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
      setSuggestions(json[1]);

      dispatch(
        cacheResult({
          [searchQuery]: json[1],
        })
      );
  };

  const handleSearchQueryChange = (query) => {
    console.log(query, "hi");
    setSearchQuery(query);
    setShowSuggestions(true);
  };

  const hideSuggestions = () => {
    setShowSuggestions(false);
  };

  return {
    searchQuery,
    suggestions,
    showSuggestions,
    handleSearchQueryChange,
    hideSuggestions,
  };
};

export default useShowSuggestion;
