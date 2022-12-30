import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

export default function EditMovie(){
    const navigate = useNavigate()
    const {movieId} = useParams()
    let [movie, setMovie] = useState({
        id: 0,
        title: "",
        submitter: "",
        posterUrl: ""
    })

    useEffect(() => {
        const fetchData = async () =>{
            const response = await fetch(`${process.env.REACT_APP_API}/movies/${movieId}`)
            const data = await response.json()
            setMovie(data)
        }
        fetchData()
    }, [movieId])

    const updateMovie = async e => {
        e.preventDefault()
        await fetch(`${process.env.REACT_APP_API}/movies/${movie.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)
        })
        navigate(`/movies/${movie.id}`)
    }

    return(
        <div>
            <Link to={`/movies/${movie.id}`}>Back</Link>
            <h1>Edit {movie.title}</h1>
            <p>(Poster preview)</p>
            <img src={movie.posterUrl} alt="Movie's poster/placeholder"/>
            <form onSubmit={updateMovie}>
                <label htmlFor="title">Title: </label>
                <input type="text" defaultValue={movie.title} id="title" name="title" onChange={e => {setMovie({...movie, title: e.target.value})}} required/>
                <label htmlFor="submitter">Submitter: </label>
                <input type="text" defaultValue={movie.submitter} id="submitter" name="submitter" onChange={e => {setMovie({...movie, submitter: e.target.value})}}/>
                <label htmlFor="posterUrl">Poster Url: </label>
                <input type="url" defaultValue={movie.posterUrl} id="title" name="title" onChange={e => {setMovie({...movie, posterUrl: e.target.value})}}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}