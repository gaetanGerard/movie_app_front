import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Import Queries
import { topRatedMovies, moviesDetail } from '../../graphql/movies.js';

// Import material-ui Component
import Box from '@material-ui/core/Box';

// Import Custom Component
import Navbar from '../ui/Navbar';

const Movies = () => {
  const movieId = 122;
  const language = 'fr-FR';
  const { loading, error, data, refetch } = useQuery(moviesDetail, {
    variables: { movieId, language },
  });

  // use refetch on a button with an onClick event the goal is to refetch for trigger the cache feature to be update

  if (!loading) {
    console.log(loading);
    console.log(data);
  }

  return (
    <Box>
      <Navbar />
      Movies Page
    </Box>
  );
};

export default Movies;
