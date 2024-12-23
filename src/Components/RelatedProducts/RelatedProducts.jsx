import React from 'react';
import './RelatedProduct.css';
import Dataperfume from '../Perfume Data/data';
import Card from '../Card/Card';
// slider js files
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const RelatedProducts = () => {

    const womenPerfumes = Dataperfume.filter(item => item.category === "Women");

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
      <div className="relatedProducts">
        <h1>Related Products</h1>
        <hr />
        <section className="slider-Section">
    <div className="slider-Container">
      <div className="heading">  
      <h1>Explore Fragnances</h1>
      <a href="#">View All</a>
      </div>
      <Carousel responsive={responsive}>
        {/* cards */}
        
        {womenPerfumes.map((item,i)=>{
                return <Card key={i} id={item.id} name={item.name} image={item.image} description={item.description} price={item.price} />
            })}
        


      </Carousel>
    </div>
  </section>
        
      </div>
    </>
  )
}

export default RelatedProducts
