import s from './TrendingDayList.module.css';
import TrendingDayItem from './TrendingDayItem';
import React from "react";
import Slider from "react-slick";

export default function TrendingDayList({ movies }) {
  // const { pathname, search } = useLocation();
  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      <Slider {...settings}>
        {movies.map((movie) => {
          return (
            <div className={s.item} key={movie.id}>
              <TrendingDayItem movie={movie} />
            </div>
          );
        })}
      </Slider>
    </>
  );
}
