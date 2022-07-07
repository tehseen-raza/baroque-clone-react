import React from 'react';
import Slide from '../Images/mainSlider.jpg'
import "../App.css"
import Categories from './Categories';
import cardData from './CardData'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section/Carousel */}
      <div className="carousel slide position-relative" data-bs-ride="carousel" data-bs-touch="true">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slide} className="d-block w-100" alt="Slider-Img" />
          </div>
          <div className="carousel-item">
            <img src={Slide} className="d-block w-100" alt="Slider Img" />
          </div>
          <div className="carousel-item">
            <img src={Slide} className="d-block w-100" alt="Slider Img" />
          </div>
        </div>
        <div className='text-center shop-link'>
          <Link to={Home}>SHOP NOW</Link>
        </div>
      </div>
      {/* ========================= */}

      {/* Cloting Categories */}
      <div className='cloting-categories'>
        <div className="row row-cols-1 row-cols-md-3 gy-5">
          {
            cardData.map((index, i) => {
              return <Categories key={i}
                imgSrc={index.caradImg}
                title={index.cardTitle}
                url={index.URL}
              />
            })
          }
        </div>
      </div>
      {/* ======================= */}

    </>
  )
}

export default Home;