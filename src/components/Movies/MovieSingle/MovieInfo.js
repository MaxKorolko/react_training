import s from './MovieInfo.module.css';
// import { Link, useLocation } from 'react-router-dom';
// import { fetchCountries } from '../../../services/fetchAPI';
// import { useState } from 'react';


export default function MovieInfo({ movie }) {
  // const { pathname, search } = useLocation();

  const {
    poster_path,
    budget,
    genres,
    original_title,
    overview,
    release_date,
    runtime,
  } = movie;


  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}`;
  }

  function padToTwoDigits(num) {
    return num.toString().padStart(2, '0');
  }


  return (
      <div className={s.infoWrap}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`poster ${original_title}`}
        />

        <div>

          <h1 className={s.infoTitle}>
            {original_title}
            <span className={s.year}>
              ({new Date(release_date).getFullYear()})
            </span>
          </h1>

          {budget !== 0 ? <div><span className={s.itemTitle}>Budget:</span><span className={s.itemDesc}>{budget}$</span></div> : null}

          <div><span className={s.itemTitle}>Genres:</span><span className={s.itemDesc}>{genres.map((i) => i.name).join(', ')}</span></div>

          <div><span className={s.itemTitle}>Time:</span><span className={s.itemDesc}>{toHoursAndMinutes(runtime)}</span></div>

          <p className={s.overview}>{overview}</p>
        </div>
      </div>
  );
}
