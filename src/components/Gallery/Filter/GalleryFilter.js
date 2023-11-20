import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { toast } from 'react-toastify'
import s from './GalleryFilter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBroom } from '@fortawesome/free-solid-svg-icons';

export default function FilterBar({ getRequest }) {
  const [showClearBtn, setShowClearBtn] = useState(false);
  const [formData, setFormData] = useState({
    imageName: '',
    imageType: '',
    imageCategory: '',
    imageColors: '',
    imageOrientation: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setShowClearBtn(true);
  };
  const handleSubmit = e => {
    e.preventDefault();
    getRequest(formData);
  };

  const handleClear = e => {
    e.preventDefault();
    setFormData({
      imageName: '',
      imageType: '',
      imageCategory: '',
      imageColors: '',
      imageOrientation: ''
    });
    setShowClearBtn(false);
  }


  return (
    <div className={s.searchBar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="imageName"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
          value={formData.imageName}
          onChange={handleInputChange}
        ></input>

        <div className={s.selectBox}>
          <select
            className={s.select}
            name="imageType"
            value={formData.imageType}
            onChange={handleInputChange}
          >
            <option value="">Select type</option>
            <option value="all">All</option>
            <option value="photo">Photo</option>
            <option value="vector">Vector</option>
            <option value="illustration">Illustration</option>
          </select>
        </div>

        <div className={s.selectBox}>
          <select
            className={s.select}
            name="imageCategory"
            value={formData.imageCategory}
            onChange={handleInputChange}
          >
            <option value="">Select category</option>
            <option value="backgrounds">Backgrounds</option>
            <option value="fashion">Fashion</option>
            <option value="nature">Nature</option>
            <option value="science">Science</option>
            <option value="education">Education</option>
            <option value="feelings">Feelings</option>
            <option value="health">Health</option>
            <option value="people">People</option>
            <option value="religion">Religion</option>
            <option value="places">Places</option>
            <option value="animals">Animals</option>
            <option value="industry">Industry</option>
            <option value="computer">Computer</option>
            <option value="food">Food</option>
            <option value="sports">Sports</option>
            <option value="transportation">Transportation</option>
            <option value="travel">Travel</option>
            <option value="buildings">Buildings</option>
            <option value="business">Business</option>
            <option value="music">Music</option>
          </select>
        </div>

        <div className={s.selectBox}>
          <select
            className={s.select}
            name="imageColors"
            value={formData.imageColors}
            onChange={handleInputChange}
          >
            <option value="">Select colors</option>
            <option value="grayscale">Grayscale</option>
            <option value="transparent">Transparent</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="turquoise">Turquoise</option>
            <option value="blue">Blue</option>
            <option value="lilac">Lilac</option>
            <option value="pink">Pink</option>
            <option value="white">White</option>
            <option value="gray">Gray</option>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
          </select>
        </div>

        <div className={s.selectBox}>
          <select
            className={s.select}
            name="imageOrientation"
            value={formData.imageOrientation}
            onChange={handleInputChange}
          >
            <option value="">Select orientation</option>
            <option value="all">All</option>
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        </div>

        <button className={s.btn} type="submit">
          Search
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {showClearBtn && <button className={s.btn} type="button" onClick={handleClear}>
          Clear
          <FontAwesomeIcon icon={faBroom} />
        </button>}
      </form>
    </div>
  );
}

FilterBar.propTypes = {
  getRequest: PropTypes.func.isRequired,
};
