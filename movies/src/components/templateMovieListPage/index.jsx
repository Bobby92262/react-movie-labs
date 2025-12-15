<<<<<<< HEAD:src/components/templateMovieListPage/index.jsx
import React, { useState, useContext } from "react";
=======
import React, { useState } from "react";
>>>>>>> e947ab2a476b7114883bb23389661088dd76e923:movies/src/components/templateMovieListPage/index.jsx
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
<<<<<<< HEAD:src/components/templateMovieListPage/index.jsx
import { MoviesContext } from "../../contexts/moviesContext";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SideBarMenu from "../sideBarMenu";
import { Typography } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";

function MovieListPageTemplate({ movies, title, action}) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [watchedFilter, setWatchedFilter] = useState("all");
  const genreId = Number(genreFilter);
  // Using watchlist array from moviescontext (cardsIcon/addToWatchList)
  const {watchlist} = useContext(MoviesContext);
  const watchedIds= watchlist;
=======

function MovieListPageTemplate({ movies, title, selectFavorite }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);
>>>>>>> e947ab2a476b7114883bb23389661088dd76e923:movies/src/components/templateMovieListPage/index.jsx

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
<<<<<<< HEAD:src/components/templateMovieListPage/index.jsx
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
    <Box sx={{ width: "100%", height: "100vh",  display: "flex", flexDirection: "column", backgroundColor: "background.paper" }}>
      
        <Grid size={{ xs: 12 }}>
          <Header title={title} />
        </Grid>

        <Grid container columns={12} 
        sx={{
          display:"flex",
          flexDirection: "column",
          flex: 1,
          width: "100%",
          overflow: "auto",
          }}>
            
          <Grid 
            size={{ xs: 12, md: 3}}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "stretch",
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
            size={{ xs: 12, md: 7 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              overflowY: "auto",
              p: 2,
            }}
            >
              {displayedMovies.length > 0 ? (
                <MovieList action={action} movies={displayedMovies} />
              ) : (
                <Box textAlign={"center"}>
                  <MovieIcon sx={{ fontSize: 60, color: "text.secondary", mb: 1 }} />
                  <Typography variant="h6" color="text.secondary">
                    No movies to dispaly.
                  </Typography>
                </Box>
              )}
          </Grid>

          <Grid
            size={{ xs: 12, md: 2}}
            sx={{
              position: "sticky",
              top: 0,
              alignSelf: "stretch",
              backgroundColor: "background.paper",
              p: 1.5,
              height: "100vh",
              borderRadius: 2,
              borderLeft: "1px solid #333",
            }}
            >
              <SideBarMenu />
            </Grid>
        </Grid>
      </Box>
=======
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
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
          />
        </Grid>
        <MovieList selectFavorite={selectFavorite} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
>>>>>>> e947ab2a476b7114883bb23389661088dd76e923:movies/src/components/templateMovieListPage/index.jsx
  );
}
export default MovieListPageTemplate;
