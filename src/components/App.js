import ImageGallery from './Gallery/CalleryList/galleryList'
import Container from './Container/container'
import React from 'react';
export const App = () => {
  return (
    <Container>
      <ImageGallery page={1} request={'cat'}/>
    </Container>
  );
};
