import React, { useState, useContext } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import { MoviesContext } from "../../contexts/moviesContext";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
    <Box sx={{ height: "100vh", overflow: "hidden", dispaly: "flex", flexDirection: "column" }}>
      <Grid container sx={{ backgroundColor: "background.default", minHeight: "95vh" }}>

        <Grid size={{ xs: 12 }}>
          <Header title={title} />
        </Grid>

        <Grid container columns={12}>
          <Grid 
            size={{ xs: 12, md: 2}}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              backgroundColor: "background.paper",
              p: 2,
              borderRight: "1px solid #333",
            }}
          >
            <FilterCard
              onUserInput={handleChange}
              titleFilter={nameFilter}
              genreFilter={genreFilter}
              watchedFilter={watchedFilter}
            />
          </Grid>

          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{
              overflowY: "auto",
              maxHeight: "100vh",
              p: 2,
            }}
            >
          <MovieList action={action} movies={displayedMovies} />
          </Grid>

          <Grid
            size={{ xs: 12, md: 2}}
            sx={{
              position: "sticky",
              top: 0,
              height: "100vh",
              backgroundColor: "background.paper",
              p: 2,
              borderLeft: "1px solid #333",
            }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "75%" }}>
                <Button variant="outlined">Home</Button>
                <Button variant="outlined">Favourites</Button>
                <Button variant="outlined">Upcoming</Button>
                <Button variant="outlined">Trending</Button>
                <Button variant="outlined">Watched</Button>
                <Button variant="outlined">Top Rated</Button>
              </Box>
            </Grid>
        </Grid>
      </Grid>
      </Box>
  );
}
export default MovieListPageTemplate;
