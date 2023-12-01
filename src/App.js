import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = lazy(() =>
  import('./components/Navigation/Navigation' /* webpackChunkName: "navigation" */)
);
const GalleryPage = lazy(() =>
  import('./pages/Gallery' /* webpackChunkName: "gallery" */)
);
const MoviesPage = lazy(() =>
  import('./pages/Movies' /* webpackChunkName: "movies" */)
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="*" element={<GalleryPage />} />
        </Routes>
      </Suspense>
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
};
