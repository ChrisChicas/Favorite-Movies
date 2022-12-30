import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Movies(){
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            const response = await fetch(`${process.env.REACT_APP_API}/movies`)
            const data = await response.json()
            setMovies(data)
        }
        fetchData()
    }, [])

    const formatMovies = movies.map((movie, key) => {
        return(
            <div key={key}>
                <Link to={`/movies/${movie.id}`}>
                <h2>{movie.title}</h2>
                </Link>
                <img src={movie.posterUrl} alt="Movie's poster/placeholder"/>
                <p>Submitter: {movie.submitter}</p>
            </div>
        )
    })

    if(movies.length === 0){
        return(
            <div>
                <p>No movies added yet!</p>
            </div>
        )
    }

    return(
        <div>
            <Link to={"/"}>Home</Link>
            {formatMovies}
            <Link to={`/movies/new`}>Add Movie!</Link>
        </div>
    )
}