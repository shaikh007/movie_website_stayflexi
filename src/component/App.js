import "../App.css";
import React, { useState } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { MainDiv } from "./MainDiv";
import SearchDisplay from "./SearchDisplay";
import { Routes, Route } from "react-router-dom";
import MovieDisplay from "./MovieDisplay";

function App() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [isDisplay, setDisplay] = useState(false);
  const [show, setShow] = useState({});
  return (
    <div className="App">
      {/* https://www.omdbapi.com/?s=inception&apikey=dc867779 search api */}
      <NavBar />
      <SearchBar
        input={input}
        setInput={setInput}
        searchData={searchData}
        setSearchData={setSearchData}
        setDisplay={setDisplay}
      />
      <Routes>
        <Route path="/" element={<MainDiv data={data} setData={setData} />} />
        <Route
          path="MovieDetails"
          element={
            searchData && (
              <SearchDisplay
                searchData={searchData}
                isDisplay={isDisplay}
                setShow={setShow}
              />
            )
          }
        />
        <Route
          path="MovieDetails/DetailCard"
          element={<MovieDisplay show={show} setShow={setShow} />}
        />
      </Routes>
    </div>
  );
}

export default App;
