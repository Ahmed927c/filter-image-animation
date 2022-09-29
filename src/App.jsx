import { AnimatePresence } from 'framer-motion';
import { createContext, useEffect, useState } from 'react';
import ButtonFilters from './components/ButtonFilters';
import Movies from './components/Movies';


export const MovieContext = createContext();

function App() {

  const [popularMovies,setPopularMovies] = useState([]);
  const [filteredMovies,setFilteredMovies] = useState([]);
  
 const API = import.meta.env.VITE_API_KEY;

  const fetchPopularMovie= async( )=> {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`);
    const movies = await response.json();
    setPopularMovies(movies.results);
    setFilteredMovies(movies.results);

  }

  useEffect(()=>{
  fetchPopularMovie();
  },[]);

  const value ={
    popularMovies,
    filteredMovies,
    setFilteredMovies
  }

    return (
      <MovieContext.Provider value={value}>
        <div className="app">
            <ButtonFilters />
            <div className="image-container">
           <AnimatePresence>
            <Movies />
           </AnimatePresence>
          
            </div>
        </div>
        </MovieContext.Provider>
    );
}

export default App;
