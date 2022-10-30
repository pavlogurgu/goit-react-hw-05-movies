import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import {getMovieCast} from './api'

const Cast = () => {
    const { movieId } = useParams();
    const [castInfo, setCastInfo] = useState([])
    const imgSrcBase = 'https://image.tmdb.org/t/p/w200'

    useEffect(() => {
        async function getCastInfo(movieId){
            try{
                const data = await getMovieCast(movieId)
                setCastInfo(data.cast)
            } catch(error){
                console.log(error)
            }
        }
        getCastInfo(movieId)
    }, [movieId])
    if(castInfo.length === 0){
        return <p>We don`t have any cast for this movie</p>
    }
    return (
        <ul>
            {castInfo.map(({ cast_id, profile_path, name, character }) =>{
                return(
                    <li key = {cast_id}>
                        {profile_path ? (
                            <img src= {`${imgSrcBase}${profile_path}`} alt = {name}/>
                        ) : (
                            <img src= {`https://via.placeholder.com/200x300?text=No+image`} alt = {name}/>
                        )}
                       <div>
                            <p>{name}</p>
                            <div>
                                Character: {character}
                            </div>
                       </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Cast

Cast.propTypes = {
    castInfo: PropTypes.arrayOf(
        PropTypes.shape({
            cast_id: PropTypes.number.isRequired,
            profile_path: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            character: PropTypes.string.isRequired,
        })
    )
}