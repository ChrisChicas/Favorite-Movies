import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/Home';
import Movies from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:movieId' element={<MovieDetails/>}/>
          <Route path='/movies/new' element={<AddMovie/>}/>
          <Route path='/movies/:movieId/edit' element={<EditMovie/>}/>
        </Routes>
    </Router>
  )
    
}

export default App;