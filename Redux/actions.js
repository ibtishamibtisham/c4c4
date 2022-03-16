// thunk call to fetch movie list
import { MOVIEDATA, FILTER_MOVIES_BY_GENRE } from "./actionTypes";
import axios from "axios";

// action object for filter  feature

const filterByGenre = (movies, genre) => (dispatch) => {
  return dispatch({
    type: FILTER_MOVIES_BY_GENRE,
    payload: {
      genre: genre,
      item: genre === "" ? movies : movies.filter((a) => a.genre === genre),
    },
  });
};

//middleware
export const getMovieData = () => (dispatch) => {
  axios
    .get("https://movie-fake-server.herokuapp.com/data")
    .then((res) => {
      console.log(res.data, "hello");
      dispatch({ type: MOVIEDATA, payload: res.data });
    })
    .catch((err) => {
      console.log("err");
    });
};
