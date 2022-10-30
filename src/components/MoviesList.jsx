import { Link, useLocation } from "react-router-dom";
import { Container, CardWrapper, MovieTitle } from "./MoviesList.styled";
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
    {movies.map(({ id, title }) => {
      return (
        <CardWrapper key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
          <MovieTitle>
          {title}
          </MovieTitle>
          </Link>
        </CardWrapper>
      );
    })}
  </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
