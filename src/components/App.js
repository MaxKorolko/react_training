import React from 'react';

import Gallery from './Gallery/Gallery'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <Gallery/>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
      />
    </>
  );
};
