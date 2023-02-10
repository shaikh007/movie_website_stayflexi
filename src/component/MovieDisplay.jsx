import React from "react";

const MovieDisplay = ({ show, setShow }) => {
  console.log(show);
  return (
    <div className="Moviedisplay">
      {show && show.Title ? (
        <div>
          <div className="MovieView">
            <div className="movieClick">
              <img src={show.Poster} alt="" />
            </div>
            <div className="details">
              <p className="title">Movie Title : {show.Title}</p>
              <p className="year">Movie Released Year : {show.Year}</p>
              <p className="description">
                Movie Details : This Movie Doesn't Include the Description in
                Object
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieDisplay;
