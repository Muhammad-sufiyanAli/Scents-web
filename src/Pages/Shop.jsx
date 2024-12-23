import React from 'react'
import Popular from '../Components/Popular/Popular'
import './Shop.css';
// slider js files
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '../Components/Card/Card';
import DataPerfumes from '../Components/Perfume Data/data';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
const Shop = () => {
  return (
    <>
      {/* <Popular/> */}

      <section className="arrivalSection">
    <div className="arrivalContainer">
      <div className="arrivalText">
        <h1>New Arrivals</h1>
        <hr />
      </div>
      <div className="arrivalItems">
        <div className="arrivalItemContainer">
        {DataPerfumes.map((item,i)=>{
          return <Card key={i} id={item.id} image={item.image} name={item.name}  description={item.description} price={item.price}   />
        })}
        </div>
      </div>
    </div>
  </section>


  {/* box 2 */}

  <DescriptionBox/>


  {/* related Products */}

  <RelatedProducts/>


    </>
  )
}

export default Shop
