import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import { BackLink } from './BackLink';

import { getMovieInfo } from './api';


const MovieInfo = () => {
  const {movieId} = useParams()
  const [info, setInfo] = useState(null)
  const imgSrcBase = 'https://image.tmdb.org/t/p/w200'
  const noImage = '/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg'
  const location = useLocation()
  const backLinkHref = location.state?.from ?? '/'
  
  
  

    useEffect(() => {
        async function getInfoById(movieId){
            try{
                const data = await getMovieInfo(movieId)
                setInfo(data)
            } catch(error){
                console.log(error)
            }
        }
        getInfoById(movieId)
    }, [movieId])
    return ( 
      <div>
      {info && (
      <>
        <BackLink to={backLinkHref}>Back</BackLink>
        <div>
              {info.poster_path === null ? (
              <img src={`${imgSrcBase}${noImage}`} alt={info.title} />
            ) : (
              <img
                src={`${imgSrcBase}${info.poster_path}`}
                alt={info.title}
              />
            )}
        </div>
        <div>
          <h2>{info.title}{" "}{info.release_date === '' ||
          info.release_date === undefined ? '(No date)' : `${info.release_date.slice(0, 4)}`}</h2>
        <p>User Score: {Math.floor(info.vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{info.overview}</p>
        <h3>Genres</h3>
        <p>{info.genres.length === 0 ? 'No genres' : `${info.genres.map(genre =>
          genre.name).join(', ')}`}</p>
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
            <BackLink to={`/movies/${movieId}/cast`} state = {{from: backLinkHref}}>Cast</BackLink>
            </li>
            <li>
            <BackLink to={`/movies/${movieId}/reviews`} state = {{from: backLinkHref}}>Reviews</BackLink>
            </li>
          </ul>
          <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
            </Suspense>
        </div>
      </>
    )}
      </div>
    )
}

export default MovieInfo

MovieInfo.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
    })
  )
}

  