import React from 'react';
import './Testimonial.css';
import { testimonialsData } from '../../assets/assets';
import Rating from '@mui/material/Rating';

function Testimonial() {
  return (
    <div className="Testimonial">
      <div className="Testimonial-heading">
        <strong>Customer</strong>
        <label>Testimonials</label><br />
        <p>Real Stories from Those Who Found Home <br /> with Us</p>
      </div>

      <div className="cards-container">
        {testimonialsData.map((item) => (
          <div className="Testimonial-card" key={item.name}>
            <img src={item.image} alt={item.alt} className="person-image" />
            <h3>{item.name}</h3>
            <h4>{item.title}</h4>
            <Rating className="rating-stars" value={item.rating} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;

