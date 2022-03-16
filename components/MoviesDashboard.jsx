import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieData } from "../Redux/actions";
import { Link, resolvePath } from "react-router-dom";
import "../styling/index.css";

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  // to get all movies list on component mounts
  const mydata = useSelector((store) => store.data);
  const filterd = useSelector((store) => store.filterData);
  const genre = useSelector((store) => store.genre);
  // console.log(genre, "gege");

  // console.log(mydata, "display");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  //    filter by genre
  const handleFilter = (e) => {
    // dispach filterby genre action to the store
  };
  return (
    <>
      <h2>Movies</h2>
      <select onChange={handleFilter}>
        {genres.map((i) => {
          return <option>{i}</option>;
        })}
      </select>
      <div className="movies-list">
        {
          /* map throught th movie list and display the results */
          mydata.map(({ movie_name, id, image_url }) => {
            return (
              <div>
                <Link key={id} to={`/movies/${id}`}>
                  <p>{movie_name}</p>
                </Link>
              </div>
            );
          })
        }
      </div>
    </>
  );
};
