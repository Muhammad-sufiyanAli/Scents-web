import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <>
    <div className="Slider-card">
            <div className="content-Container">
                <div className="Cardimage">
                  <img src={props.image} onClick={window.scrollTo(0,0)} alt="" />
                </div>
                <div className="text-Content">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <div className="cardLastSec">
                    <p>Rs. <span>{props.price}</span></p>
                    <button>Add to cart</button>
                    </div>
                </div>
            </div>
    </div>
    
    </>
  )
}

export default Card
