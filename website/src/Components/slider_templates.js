import React,{ useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselCaption
  } from "reactstrap";
  import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderTemplates = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === props.data.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? props.data.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const slides = props.data.map( (item) => {
      return (
        
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.id}
          className="corousel-image"
        >
          <img src={item.image} alt={item.title}  />
         
          <CarouselCaption
          captionText=""
            captionHeader={item.title}
            className="carousel-caption"
          />
        </CarouselItem>
        
      );
    })

    return(
      
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
     
        
    )
}
  
export default SliderTemplates;