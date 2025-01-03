import React from 'react';

// slider js files
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bottleimage from './Image/bottleImage.png';

// gsap file


import './Home.css';
import bottleImage from './Image/bottleImage.png'


const Home = () => {
 
   const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  return (
    <>
    {/* -------------------------------- */}
    {/* Top section */}
    {/* -------------------------------- */}
    <section className="topSection">
      <div className="contentContainer">
        <div className="left">
          <div className="left-content">
            <h3>wellcome!</h3>
            <h1>Scents by s&n</h1>
            <h4>lets explore the exciting scents by sohaib and nadir at affordable price.</h4>
            <div className="circle" id='top-circle'></div>

          </div>
        </div>
        <div className="right">
            <div className="right-content">
              <div className="text">
                <h5>explore fascinating perfumes here.</h5>
              </div>
              <div className="image">
                <img src={bottleImage} alt="perfume bottle image" />
              </div>
              <div className="buttons">
                <button>Explore more!</button>
              </div>
            </div>
          </div>
        </div>
    </section>

    
{/* slider section */}

<section className="slider-Section">
    <div className="slider-Container">
      <div className="heading">  
      <h1>Explore Fragnances</h1>
      <a href="#">View All</a>
      </div>
      <Carousel responsive={responsive}>
        {/* cards */}
        <div className="Slider-card">
            <div className="content-Container">
                <div className="Cardimage">
                  <img src={bottleimage} alt="" />
                </div>
                <div className="text-Content">
                    <h3>perfume One</h3>
                    <p>Description here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, consequuntur?</p>
                    <span>Rs. 500</span>
                </div>
            </div>
        </div>
        <div className="Slider-card">
            <div className="content-Container">
                <div className="Cardimage">
                  <img src={bottleimage} alt="" />
                </div>
                <div className="text-Content">
                    <h3>perfume two</h3>
                    <p>Description here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, consequuntur?</p>
                    <span>Rs. 500</span>
                </div>
            </div>
        </div>
        
        <div className="Slider-card">
            <div className="content-Container">
                <div className="Cardimage">
                  <img src={bottleimage} alt="" />
                </div>
                <div className="text-Content">
                    <h3>perfume three</h3>
                    <p>Description here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, consequuntur?</p>
                    <span>Rs. 500</span>
                </div>
            </div>
        </div>
        <div className="Slider-card">
            <div className="content-Container">
                <div className="Cardimage">
                  <img src={bottleimage} alt="" />
                </div>
                <div className="text-Content">
                    <h3>perfume four</h3>
                    <p>Description here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, consequuntur?</p>
                    <span>Rs. 500</span>
                </div>
            </div>
        </div>
      </Carousel>
    </div>
    </section>



    {/* <Slider/> */}


    


    
    {/* -------------------------------- */}
    {/* Where to start.. box section */}
    {/* -------------------------------- */}

    <section className="boxSection">
      <div className="container">
        <div className="box">
          <div className="boxImage">
            <div className="boxBackground"></div>
          </div>
          <div className="boxContent">
            <p>Don't know where to start?</p>
            <div className="buttons">
              <a href="#">
                Try sample set
              </a>
              <a href="#">
                explore more!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>



    {/* -------------------------------- */}
    {/* chooseUs section */}
    {/* -------------------------------- */}

    <section className="chooseUs">
      <div className="container">
      <div className="textContent">
        <h4>Why choose Scents by s&N?</h4>
      </div>
      <div className="secContent">
        <div className="card">
          <div className="icon">
          <i class="fa-solid fa-map"></i>
          </div>
          <span>Made in Pakistan.</span>
        </div>
        <div className="card">
          <div className="icon">
          <i class="fa-solid fa-credit-card"></i>
          </div>
          <span>Secure payment system.</span>
        </div>
        <div className="card">
          <div className="icon">
          <i class="fa-solid fa-truck"></i>
          </div>
          <span>doorstep delievery.</span>
        </div>
        <div className="card">
          <div className="icon">
          <i class="fa-solid fa-globe"></i>
          </div>
          <span>Online Exclusive Service.</span>
        </div>
      </div>
      </div>
    </section>





    </>
  )
}

export default Home
