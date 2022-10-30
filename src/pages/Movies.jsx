import { useSearchParams } from "react-router-dom";
import { MoviesList } from "../components/MoviesList";
import  SearchForm  from "../components/SearchBox";
import { getBySearch } from "../components/api";
import { useState, useEffect } from 'react';

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const queryInput = searchParams.get('query');
  useEffect(() => {
    if(queryInput){
      setQuery(queryInput)
      return
    }
    setQuery('')
  }, [queryInput])

  useEffect(() => {
    if(query === ''){
      setMovies([])
      return
    }
    getBySearch(query).then(data => {
      setMovies(data)
    })
    .catch(error => console.log(error))
  }, [query])

  const handleSubmit = searchQuery => {
    setSearchParams({query: searchQuery})
    setQuery(searchQuery)
  }

  return (
    <main>
      <h2>Search movies</h2>
      <SearchForm onSubmit={handleSubmit} />
      {movies.length === 0 && queryInput ? (
        <p>Movie not found</p>
      ) : <MoviesList movies={movies}/>}
    </main>
  );
};

export default Movies;
