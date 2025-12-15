import React from "react";
import { useParams } from 'react-router';
import MovieDetails from "../components/movieDetails/";
<<<<<<< HEAD:src/pages/movieDetailsPage.jsx
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie";   Redundant


const MoviePage = (props) => {
  const { id } = useParams();
    const { data: movie, error, isPending, isError  } = useQuery({
    queryKey: ['movie', {id: id}],
    queryFn: getMovie,
  })

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
=======
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovie, getMovieImages } from "../api/tmdb-api";

const MoviePage = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [images, setImages] = useState([]);

    useEffect(() => {
    getMovie(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  useEffect(() => {
    getMovieImages(id).then((images) => {
      setImages(images);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
>>>>>>> e947ab2a476b7114883bb23389661088dd76e923:movies/src/pages/movieDetailsPage.jsx

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;

