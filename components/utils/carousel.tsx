import React from "react";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [profile1.src, profile2.src, profile3.src]
// let index = 0;
// for (index+1; index < images.length; index ++){
// dynamic to change file name to resolve loop
// }
function CarouselProfile() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={30000}
      showStatus={true}
      showThumbs={false}
      showArrows={true}
      swipeable={true} 
    >
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Profile ${index + 1}`}
            style={{
              width: "70%",
              height: "auto",
              verticalAlign: "middle",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselProfile;
