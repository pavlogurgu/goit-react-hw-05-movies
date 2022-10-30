import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import {getMovieReviews} from './api'

const Reviews = () => {
    const { movieId } = useParams();
    const [reviewInfo, setReviewInfo] = useState([])

    useEffect(() => {
        async function getReviewInfo(movieId){
            try{
                const data = await getMovieReviews(movieId)
                setReviewInfo(data)
            } catch(error){
                console.log(error)
            }
        }
        getReviewInfo(movieId)
    }, [movieId])
    if(reviewInfo.length === 0){
        return <p>We don`t have any reviews for this movie</p>
    }
    return (
        <ul>
            {reviewInfo.map(({ id, author, content }) =>{
                return(
                    <li key = {id}>
                       <div>
                            <h3>Author: {author}</h3>
                            <div>
                                <p>{content}</p>
                            </div>
                       </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Reviews

Reviews.propTypes = {
    reviewInfo: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    )
}