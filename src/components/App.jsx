import ImageGallery from './Gallery/CalleryList/galleryList'
import Container from './Container/container'
export const App = () => {
  return (
    <Container>
      <ImageGallery page={1} request={'cat'}/>
    </Container>
  );
};
