import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

export default function Slide() {
  return (

    
    <Slider autoplay={1000}>
        {itemData.map((item, index) => (
            <div
                key={index}
                style={{ background: `url('${item.img}?fit=clip&auto=format&auto=compress&auto=enhance') no-repeat center center`, backgroundSize: 'contain',
                backgroundClip: 'border-box' }}>
            </div>
        ))}
    </Slider>
  )
}



const itemData = [
    {
      img: 'https://images-squirfox.imgix.net/11.jpg',
  
    },
    {
      img: 'https://images-squirfox.imgix.net/12.jpg',
   
    },
    {
      img: 'https://images-squirfox.imgix.net/13.jpg',
     
    },
    {
      img: 'https://images-squirfox.imgix.net/14.jpg',
  
    },
    {
      img: 'https://images-squirfox.imgix.net/15.jpg',
  
    },
    {
      img: 'https://images-squirfox.imgix.net/16.jpg',
   
    },
  ];