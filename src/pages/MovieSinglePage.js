import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../services/fetchAPI';
import { useParams } from 'react-router-dom';
// import MovieDetails from '../components/MovieDetails/MovieDetails';
// import Additional from '../components/Additional/Additional';
// import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import Container from '../components/Container/Container';
import MovieInfo from '../components/Movies/MovieSingle/MovieInfo';
import Section from '../components/Section/Section';
import s from '../components/Movies/TrendingDay/TrendingDayItem.module.css';

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(results => setMovie(results));
  }, [id]);

  if (!movie) {
    return;
  }

  return (
    <main>
      <Container>
        <Section>
          <MovieInfo movie={movie} />
        </Section>
        {/*<GoBackBtn />*/}
        {/*<Additional />*/}
      </Container>
    </main>
  );
}
