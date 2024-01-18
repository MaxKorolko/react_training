// import createUser from '../services/firebaseAuth';
import { useState, useEffect } from 'react';
import { fetchTrendingMovieDay } from '../services/fetchAPI';
import TrendingDayList from '../components/Movies/TrendingDay/TrendingDayList';
export default function MoviesPage() {
  // createUser('m.v.korolko@gmail.com', 'password123');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovieDay().then(res => setMovies(res));
  }, []);

  return (
    <main>
      <TrendingDayList movies={movies} />
    </main>
  );
}
