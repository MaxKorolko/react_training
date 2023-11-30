import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = lazy(() =>
  import('./components/Navigation/Navigation' /* webpackChunkName: "navigation" */)
);
const Gallery = lazy(() =>
  import('./pages/Gallery' /* webpackChunkName: "gallery" */)
);
const Movies = lazy(() =>
  import('./pages/Movies' /* webpackChunkName: "movies" */)
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<Gallery />} />
        </Routes>
      </Suspense>
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
};
