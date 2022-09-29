import { useContext } from 'react';
import { MovieContext } from '../App';
import { motion } from 'framer-motion';

const Movies = () => {
    const { filteredMovies } = useContext(MovieContext);

    return filteredMovies.map(movie => (
        <motion.div
            className="image"
            key={movie.id}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20
      
            
          }}
        
          
        >
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
            />
            <h2>{movie.title}</h2>
        </motion.div>
    ));
};

export default Movies;
