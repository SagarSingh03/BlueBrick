import React, { useRef } from 'react'
import './Project.css';
import { projectsData } from '../../assets/assets';
import left_arrow from '../../assets/left_arrow.svg';
import right_arrow from '../../assets/right_arrow.svg';


function Project() {
  const scrollRef = useRef(null);

  const handleLeftArrowClick = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const handleRightArrowClick = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };
  return (
    <div className="project">
      <div className="project-heading">
        <strong>Projects </strong>
        <label>Completed</label><br />
        <p> Crafting Spaces, Building Legacies—Explore <br />
          Our Portfolio </p>
      </div>

      <div className="project-arrows">
        <img src={left_arrow} alt="left arrow" className="arrow-icon" onClick={handleLeftArrowClick} />
        <img src={right_arrow} alt="right-arrow" className="arrow-icon" onClick={handleRightArrowClick} />
      </div>

      <div className="project-cards" ref={scrollRef}>
        {projectsData.map((item , index) => (
          <div className="project-card"  key={index}>
            <img src={item.image} alt={item.alt} className="property-image" />
            <h3>{item.title}</h3>
            <h3>{item.price}  | {item.location} </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Project





