import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";

const MovieList = (props) => {
  let movieCards = props.movies.map((m) => (
    <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
<<<<<<< HEAD
      <Movie key={m.id} movie={m} selectFavorite={props.selectFavorite}/>
=======
      <Movie key={m.id} movie={m} />
>>>>>>> a82190ac1c3002fe3d1429f9cfbed7efb376545a
    </Grid>
  ));
  return movieCards;
};

export default MovieList;
