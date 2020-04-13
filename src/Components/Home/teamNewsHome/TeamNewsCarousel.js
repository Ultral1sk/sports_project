import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CarouselCard from './CarouselCard'
import imgOne from '../../../Resources/images/players/heat/newsImages/butler1.jpg'
import imgTwo from '../../../Resources/images/players/heat/newsImages/derrick.jpg'
import imgThree from '../../../Resources/images/players/heat/newsImages/derrick1.jpg'

import imgFour from '../../../Resources/images/players/heat/newsImages/butler.jpg'

class TeamNewsCarousel extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
        
    }
  }
  
  render() {   
    return (
      <div className="carousel_wrapper" >
      
      <Carousel 
        slidesPerPage={5}
        slidesPerScroll={2}
        offset={18}
        itemWidth={389}
        arrowLeft={<ArrowBackIosIcon  style={{ cursor: 'pointer' }} />}
        arrowRight={<ArrowForwardIosIcon  style={{ cursor: 'pointer' }} />}
        addArrowClickHandler
        infinite
        draggable={true} 

     
    >
      <CarouselCard key={1} bck={imgOne}   link={true} linkTo='/'  width="100%" height="50vh" />
      <CarouselCard key={2} bck={imgTwo}   link={true} linkTo='/'  width="100%" height="50vh" />
      <CarouselCard key={3} bck={imgThree} link={true} linkTo='/'  width="100%" height="50vh" />
      <CarouselCard key={4} bck={imgFour}  link={true} linkTo='/'  width="100%" height="50vh" />
    </Carousel>
    </div>
    );
  }
}

export default TeamNewsCarousel