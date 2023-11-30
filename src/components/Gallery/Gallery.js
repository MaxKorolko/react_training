import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import s from './GalleryList.module.css'
import FilterBar from './Filter/GalleryFilter'
import uniqid from 'uniqid'
import FancyBox from '../FancyBox/FancyBox'
import Loader from '../Loader/Loader';
import Container from '../Container/Container'
import Stats from './Stats/Stats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from '@fortawesome/free-solid-svg-icons';


export default function Gallery() {
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [request, setRequest] = useState({
    imageName: '',
    imageType: '',
    imageCategory: '',
    imageColors: '',
    imageOrientation: 'horizontal'
  });
  // const [loader, setLoader] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams({
      key: '28033365-ba4821d388ed22fecf976971a',
      q: request.imageName,
      category: request.imageCategory,
      image_type: request.imageType,
      colors: request.imageColors,
      orientation: request.imageOrientation,
      page: page,
      per_page: 20
    }).toString();

    const searchUrl = `https://pixabay.com/api/?${searchParams}`;

    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(searchUrl);
        const data = await response.json();
        console.log(data);
        const { hits, total, totalHits } = data;

        if (total === 0) {
          toast.error('The search has not given any results');
          return;
        }
        if (page === 1) {
          setHits(hits);
          const maxPage = Math.ceil(totalHits / 20);
          setTotalPage(maxPage);
        } else {
          setHits(prev => [...prev, ...hits]);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();

  }, [page, request ]);

  const getRequest = newRequest => {
    const isEqual = JSON.stringify(request) === JSON.stringify(newRequest);
    if (isEqual) {
      return toast.success('Filter applied');
    } else {
      setRequest(newRequest);
      setPage(1);
    }
  };
  console.log(totalPage);

  return (
    <>
      <FilterBar getRequest={getRequest} />
      <Container>
        <FancyBox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <ul className={s.gallery}>
            {hits.map(({ webformatURL, largeImageURL, views, likes, downloads }) => {
              return (
                <li key={uniqid()} className={s.item}>
                  <a data-fancybox="gallery" href={largeImageURL}>
                    <img className={s.img} src={webformatURL} alt="name" />
                    <Stats views={views} likes={likes} downloads={downloads} />
                  </a>
                </li>
              )
            })}
          </ul>
        </FancyBox>
        {totalPage > page &&
          <button className={s.moreBtn} type="button" onClick={() => setPage(page + 1)}>
            Load More
            <FontAwesomeIcon icon={faInfinity} />
          </button>
        }
      </Container>
      <Loader loading={loading}/>
    </>
  );
}
