import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile-henry2.png";
import profile3 from "../assets/profile-henry3.png";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const images = [profile2, profile3];
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    //change back later to 3000
    const interval = setInterval(handleNext, 9000);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);
  return (
    <AutoPlaySwipeableViews
      index={activeIndex}
      onChangeIndex={(index: number) => setActiveIndex(index)}
    >
      {images.map((image, index) => (
        <Box key={index}>
          <Image
            alt="profile"
            src={image}
            width={600}
            height={900}
            objectFit="cover"
            style={{ maxHeight: "100%", width: "auto" }}
          />
        </Box>
      ))}
    </AutoPlaySwipeableViews>
  );
};

export default Carrousel;
