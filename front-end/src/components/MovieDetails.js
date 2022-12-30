import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

export default function MovieDetails(){
    const navigate = useNavigate()
    const {movieId} = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            const response = await fetch(`${process.env.REACT_APP_API}/movies/${movieId}`)
            const data = await response.json()
            setMovie(data)
        }
        fetchData()
    }, [movieId])

    const deleteMovie = async () => {
        await fetch(`${process.env.REACT_APP_API}/movies/${movie.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        navigate("/movies")
    }

    return(
        <div>
            <Link to={"/movies"}>Back</Link>
            <h1>{movie.title} Details</h1>
            <img src={movie.posterUrl} alt="Movie's poster/placeholder"/>
            <p>Submitter: {movie.submitter}</p>
            <button type="button"><Link to={`/movies/${movie.id}/edit`}>Edit Movie</Link></button>
            <button type="button" onClick={deleteMovie}>Delete Movie</button>
        </div>
    )
}