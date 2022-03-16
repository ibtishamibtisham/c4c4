import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const SingleMovieDetails = () => {
  // make a request to get the details
  const [show, setShow] = useState([]);
  const { id } = useParams();
  const dataa = () => {
    axios({
      method: "get",
      url: `https://movie-fake-server.herokuapp.com/data/${id}`,
    })
      .then((res) => {
        setShow(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    dataa();
  }, [id]);

  return (
    <>
      <h1>{show.movie_name}</h1>
      <img src={show.image_url} />
      <p>{show.genre}</p>
    </>
  );
};
