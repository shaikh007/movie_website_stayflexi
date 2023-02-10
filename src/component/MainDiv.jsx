import React, { useEffect } from "react";

export const MainDiv = ({ data, setData }) => {
  useEffect(() => {
    const fetchData = () => {
      fetch("https://www.omdbapi.com/?i=tt3896198&apikey=dc867779")
        .then((response) => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
        .then((data) => {
          console.log(data);
          setData(data);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="firstView">
      {data && (
        <div className="displayView">
          <div className="poster">
            <img src={data?.Poster} alt="" />
          </div>
          <div>
            <p className="title">Movie Title : {data?.Title}</p>
            <p className="title">Movie Released Year : {data?.Released}</p>
            <p className="title">
              Movie Ratings :
              {data?.Ratings.map((user, index) => (
                <div key={index}>
                  {user.Source} {user.Value}
                </div>
              ))}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
