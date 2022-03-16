import { FILTER_MOVIES_BY_GENRE, MOVIEDATA } from "./actionTypes";
const initState = {
  data: [],
  filterData: [],
  genre: "",
  isLoading: false,
  isError: false,
};

export const Reducer = (state = initState, { type, payload }) => {
  // add the switch statement for different actions
  switch (type) {
    case MOVIEDATA:
      return { ...state, data: payload };
    case FILTER_MOVIES_BY_GENRE: {
      let newData = state.data.filter((a) => {
        if (a.genre.indexOf(payload) >= 0) {
          return a;
        }
      });

      console.log(newData);

      return { ...state, filterData: newData };
    }

    default:
      return state;
  }
};
