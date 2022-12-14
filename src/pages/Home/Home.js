import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HomeLink, MovieList, Title } from './Home.Styled';

import { fetchTrendMovies } from '../../Api/Api';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendMovies().then(data => {
      setTrendMovies(data.results);
    });
  }, []);

  return (
    <main>
      <Title>Top Movies for today</Title>
      <MovieList>
        {trendMovies.map(movie => (
          <div key={movie.id}>
            <HomeLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </HomeLink>
          </div>
        ))}
      </MovieList>
    </main>
  );
};

export default Home;