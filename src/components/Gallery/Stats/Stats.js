import s from './Stats.module.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCloudArrowDown, faEye} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function Stats({ views, likes, downloads }) {
  return (
    <div className={s.wrap}>
      <div className={s.stat}>
        <FontAwesomeIcon icon={faEye} />
        {views}
      </div>
      <div className={s.stat}>
        <FontAwesomeIcon icon={faHeart} />
        {likes}
      </div>
      <div className={s.stat}>
        <FontAwesomeIcon icon={faCloudArrowDown} />
        {downloads}
      </div>
    </div>
  )
};

Stats.propTypes = {
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
};
