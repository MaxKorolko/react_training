import { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import s from './GalleryList.module.css'
import FilterBar from './Filter/GalleryFilter'
import uniqid from 'uniqid'
import FancyBox from './FancyBox/FancyBox'
// import Loader from '../Loader/Loader';
import Container from '../Container/Container'
import Stats from './Stats/Stats';


export default function Gallery() {
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [request, setRequest] = useState({
    imageName: '',
    imageType: '',
    imageCategory: '',
    imageColors: '',
    imageOrientation: 'horizontal'
  });
  // const [totalPage, setTotalPage] = useState(null);
  // const [loader, setLoader] = useState(false);

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

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(searchUrl);
        const data = await response.json();
        console.log(data);
        const { hits, total } = data;

        if (total === 0) {
          toast.error('The search has not given any results');
          return;
        }
        if (page === 1) {
          setHits(hits);
          // setTotalPage(Math.ceil(totalHits / 12));
        } else {
          setHits(prev => [...prev, ...hits]);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchImages();

  }, [page, request, searchUrl]);

  const getRequest = newRequest => {
    const isEqual = JSON.stringify(request) === JSON.stringify(newRequest);
    console.log(isEqual); // true
    if (isEqual) {
      return console.log('hahahaha');
    } else {
      setRequest(newRequest);
      setPage(1);
    }
  };

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
                  </a>
                  <Stats views={views} likes={likes} downloads={downloads} />
                </li>
              )
            })}
          </ul>
        </FancyBox>
      </Container>
    </>
  );
}
