import { useContext, useState } from 'react';
import { MovieContext } from '../App.jsx';
import {list} from '../Untils.jsx'
const ButtonFilters = () => {
   const [tabActive,setTabActive] = useState(0);
   const {popularMovies,setFilteredMovies} = useContext(MovieContext);

   const handleClickFilter = (id) => {
      setTabActive(id);
      const filteredMovies = popularMovies.filter(movie => movie.genre_ids.includes(id));
      if (id === 0) {
         setFilteredMovies(popularMovies);
      } else {
          setFilteredMovies(filteredMovies);
        }
    }

  return (
    <div className="button-filters">
        {list.map(item => (
            <button key={item.id}
            className={tabActive === item.id ? 'active' : undefined}
            onClick={() => handleClickFilter(item.id)}
            >{item.name}</button>
        ))}
    </div>
  )
}

export default ButtonFilters