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
    case FILTER_MOVIES_BY_GENRE:
      return { ...state, filterData: payload.items, genre: payload.genre };
    default:
      return state;
  }
};
