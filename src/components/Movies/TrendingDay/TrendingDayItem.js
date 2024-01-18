import s from './TrendingDayItem.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function TrendingDayItem({ movie }) {
  const { pathname, search } = useLocation();

  const {
    release_date,
    original_title,
    backdrop_path,
    id,
    overview,
  } = movie;

  return (

    <>
      <img
        className={s.img}
        src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
        alt={`poster ${original_title}`}
      />
      <div className={s.wrap}>
        <div className={s.topWrap}>
          <span className={s.year}>
            {new Date(release_date).getFullYear()}
          </span>
          <Link
            className={s.link}
            to={`/movies/${id}`}
            state={{ from: `${pathname}${search}` }}
          >
            Learn more
          </Link>
        </div>

        <div className={s.titleWrap}>
          <h2 className={s.title}>
            {original_title}
          </h2>
          <p className={s.overview}>{overview}</p>
        </div>
      </div>
    </>
  );
}
