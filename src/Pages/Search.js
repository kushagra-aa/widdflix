import { Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import requests from "./../Requests";

import "./../styles/css/search.css";

const Search = () => {
  const [type, setType] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(0);
  let { searchterm } = useParams();
  const [typeText, setTypeText] = useState("");
  const [fetchURL, setFetchURL] = useState("");
  useEffect(() => {
    setTypeText(type ? "tv" : "movie");
    setFetchURL(
      type
        ? `${requests.fetchSearchTv}${searchterm}`
        : `${requests.fetchSearchMovie}${searchterm}`
    );
  }, [searchterm, type]);
  return (
    <>
      <div className="search-con">
        <h2>Searched for {searchterm}</h2>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
        >
          <Tab style={{ width: "100%" }} label="In Movies" />
          <Tab style={{ width: "100%" }} label="In TV Series" />
        </Tabs>
      </div>
      <Cards fetchURL={fetchURL} type={`${typeText}s`}></Cards>
    </>
  );
};

export default Search;
