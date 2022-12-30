import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Home(){
    const [text, setText] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API}/`)
            const data = await response.text()
            setText(data)
        }
        fetchData()    
    }, [])
    return(
        <div>
            <h1>{text}</h1>
            <Link to={"/movies"}>
                <p>Movie List</p>
            </Link>
        </div>
    )
}