import { gql } from '@apollo/client';

// Top Rated Movies
export const topRatedMovies = gql`
  query {
    topRatedMovies {
      results {
        title
        id
      }
    }
  }
`;

export const moviesDetail = gql`
  query MoviesDetail($movieId: Int!, $language: String!) {
    moviesDetail(movieId: $movieId, language: $language) {
      title
      id
      belongs_to_collection {
        id
        name
      }
      overview
    }
  }
`;
