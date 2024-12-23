import React from 'react'

// slider js files
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '../Card/Card';
import DataPerfumes from '../Perfume Data/data';
import './Popular.css'

const Popular = () => {

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
    

    
<section className="slider-Section">
    <div className="slider-Container">
      <div className="heading">  
      <h1>Explore Fragnances</h1>
      <a href="#">View All</a>
      </div>
      <Carousel responsive={responsive}>
        {/* cards */}
        
          {DataPerfumes.map((item,i)=>{
            if(item.price >70){
            return <Card key={i} id={item.id} image={item.image} name={item.name}  description={item.description} price={item.price}   />
          }
          })}
        


      </Carousel>
    </div>
  </section>

 

    
    
    </>
  )
}

export default Popular
