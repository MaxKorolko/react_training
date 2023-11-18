import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
import s from './galleryList.module.css';

import uniqid from 'uniqid';
import Fancybox from '../FancyBox/fancyBox'
// import Button from '../Button/Button';
// import Loader from '../Loader/Loader';
// import Modal from '../Modal/Modal';

export default function ImageGallery({ request, page, loadMore }) {
  const [hits, setHits] = useState([]);
  // const [totalPage, setTotalPage] = useState(null);
  // const [loader, setLoader] = useState(false);

  const API_KEY = '28033365-ba4821d388ed22fecf976971a';

  useEffect(() => {
    // if (!request) {
    //   return;
    // }
    // setLoader(true);
    fetch(
      `https://pixabay.com/api/?q=${request}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(data => {
        const { hits } = data;

        // if (total === 0) {
        //   toast.error('The search has not given any results');
        //   return;
        // }
        if (page === 1) {
          setHits(hits);
          // setTotalPage(Math.ceil(totalHits / 12));
        } else {
          setHits(prev => [...prev, ...hits]);
        }
      })
      // .finally(() => setLoader(false));
  }, [page, request]);

  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <ul className={s.gallery}>
        {hits.map(({ webformatURL, largeImageURL }) => {
          return (
            <li key={uniqid()} className={s.item}>
              <a data-fancybox="gallery" href={largeImageURL}>
                <img className={s.img} src={webformatURL} alt="name" />
              </a>
            </li>
          )
        })}
      </ul>
    </Fancybox>
  );
}

ImageGallery.propTypes = {
  request: PropTypes.string.isRequired,
  loadMore: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
