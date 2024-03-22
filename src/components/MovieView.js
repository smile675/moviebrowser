import Hero from '../Hero'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

const MovieView = () => {

    const { id } = useParams()
    // console.log(id)
    const [movieDetails, setMovieDetails] = useState({

    })

    useEffect(() => {
        console.log('make api', id)
    }, [id])
    return (
        <>
            <Hero text="Movie Details View" />
        </>
    )
}

export default MovieView