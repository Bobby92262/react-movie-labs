import React, { useState, useContext } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import { MoviesContext } from "../../contexts/moviesContext";

function MovieListPageTemplate({ movies, title, action}) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [watchedFilter, setWatchedFilter] = useState("all");
  const genreId = Number(genreFilter);
  // Using watchlist array from moviescontext (cardsIcon/addToWatchList)
  const {watchlist} = useContext(MoviesContext);
  const watchedIds= watchlist;

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    // WatchedFilter logic
    .filter((m) => {
      if (watchedFilter === "watched") return watchedIds.includes(m.id); //watched
      if (watchedFilter === "unwatched") return !watchedIds.includes(m.id); //unwatched
      return true; //all
    });

  //Changes checks type 
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    if (type === "genre") setGenreFilter(value);
    if (type === "watched") setWatchedFilter(value);
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            watchedFilter={watchedFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
