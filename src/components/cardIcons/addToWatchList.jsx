import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToWatchlistIcon = ({ movie }) => {
  //const context = useContext(MoviesContext);

  //const handleAddToWatchList = (e) => {
    //e.preventDefault();
    //context.addToFavorites(movie);
  //};

  return (
    <IconButton aria-label="add to watch list" >
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlistIcon;