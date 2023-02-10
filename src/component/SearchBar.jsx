import React from "react";
import { Button } from "@mui/material";
import Icon from "@mui/material/Icon";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
export default function SearchBar({
  input,
  setInput,
  searchData,
  setSearchData,
  setDisplay,
}) {
  const navigate = useNavigate();
  const handleSearch = () => {
    searchFetchData(input);
    navigate("MovieDetails");
    // console.log(searchData);
  };
  const searchFetchData = async (input) => {
    const url1 = `https://www.omdbapi.com/?s=${input}&apikey=dc867779`;

    await fetch(url1)
      .then((response) => response.json())
      .then((data) => {
        setSearchData(data);
        setDisplay(true);
        // console.log(searchData);
      });
  };

  const handleChange = (event) => {
    setInput(event.target.value);
    // console.log(input);
  };
  return (
    <div className="serach-bar">
      <div className="textField">
        <TextField
          fullWidth="50"
          label="Enter Movie Title"
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <Icon>
                  <Search />
                </Icon>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="btn" onClick={handleSearch}>
        <Button variant="contained">Search</Button>
      </div>
    </div>
  );
}
