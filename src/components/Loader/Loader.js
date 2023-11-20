import s from './Loader.module.css'
import RingLoader from 'react-spinners/RingLoader';

export default function Loader({ loading }) {
  if(loading) {
    return (
      <div className={s.loader}>
        <RingLoader
          color="#35dffb"
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  }
}


