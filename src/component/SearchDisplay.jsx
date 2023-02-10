import React from "react";
import { useNavigate } from "react-router-dom";
const SearchDisplay = ({ searchData, isDisplay, setShow }) => {
  console.log(searchData);
  const navigate = useNavigate();
  return (
    <>
      {isDisplay ? (
        <>
          {searchData && (
            <div className="displaySearch">
              <div className="displayMain">
                {searchData?.Search.map((user, index) => (
                  <div key={index} className="displayShow">
                    <div>
                      <div>
                        <img src={user?.Poster} alt="poster" />
                      </div>
                      <div>
                        <p
                          className="title"
                          onClick={() => {
                            setShow(user);
                            navigate("DetailCard");
                          }}
                        >
                          Movie Title : {user?.Title}
                        </p>
                        <p className="year">
                          Movie Released Year : {user?.Year}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default SearchDisplay;
