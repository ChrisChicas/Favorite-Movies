import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function AddMovie(){
    const navigate = useNavigate()
    let [movie, setMovie] = useState({
        title: "",
        submitter: "Anonymous",
        posterUrl: "https://placedog.net/400/400"
    })

    const addMovie = async e => {
        e.preventDefault()
        await fetch(`${process.env.REACT_APP_API}/movies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)
        })
        navigate(`/movies`)
    }

    return(
        <div>
            <Link to={`/movies`}>Back</Link>
            <h1>Add Movie!</h1>
            <p>(Poster preview)</p>
            <img src={movie.posterUrl} alt="Movie's poster/placeholder"/>
            <form onSubmit={addMovie}>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" onChange={e => {setMovie({...movie, title: e.target.value})}} required/>
                <label htmlFor="submitter">Submitter: </label>
                <input type="text" id="submitter" name="submitter" onChange={e => {setMovie({...movie, submitter: e.target.value})}}/>
                <label htmlFor="posterUrl">Poster Url: </label>
                <input type="url" id="title" name="title" onChange={e => {setMovie({...movie, posterUrl: e.target.value})}}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}