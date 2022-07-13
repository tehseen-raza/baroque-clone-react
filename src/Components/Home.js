import React from 'react';
import Slide from '../Images/mainSlider.jpg'
import lookbookImg from '../Images/lookbook.jpg'
import "../App.css"
import Categories from './Categories';
import cardData from './CardData'
import { Link } from 'react-router-dom';
import Footer from './Footer';

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
      <div className='clothing-categories'>
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

      {/* Newsletter & LOOKBOOK */}
      <div className="newsletter">
        <div className="row g-0">
          <div className="col-6 newsletter__left">
            <img src={lookbookImg} alt="Lookbook Img" />
            <div className="lookbook__imgOverlay"></div>
            <div className='lookbook__textWrapper text-center'>
              <h2 className='lookbook__text text-white'>LOOKBOOK</h2>
              <Link className='lookbook__link text-white' to={Home}>EID EDIT - READY TO WEAR</Link>
            </div>
          </div>
          <div className="col-6 newsletter__right">
            <div className="newsletter__textWrapper text-center">
              <h2>GET 10% OFF!</h2>
              <p>SIGN UP NOW TO OUR NEWSLETTER</p>
              <form style={{ marginTop: 35 }} action="submit">
                <div className='emailField d-flex align-items-center justify-content-center'>
                  <input className='email__input' type="email" name="email" />
                  <span className='email__submitBtn'>
                    <button type="submit">SIGN ME UP</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ======================= */}

      {/* Footer */}
      <Footer />
      {/* ======================= */}

    </>
  )
}

export default Home;