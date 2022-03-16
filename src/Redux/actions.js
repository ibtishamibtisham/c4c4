// thunk call to fetch movie list
import { MOVIEDATA, FILTER_MOVIES_BY_GENRE } from "./actionTypes";
import axios from "axios";

// action object for filter  feature

export const filterByGenre = (payload) => ({
  type: FILTER_MOVIES_BY_GENRE,
  payload,
});

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
