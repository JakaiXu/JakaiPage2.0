import React, { useState } from "react";
import { Box } from "@mui/material";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const images = [profile1, profile2, profile3];
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
            priority={index === 0}
            style={{  height: "auto",width:'auto', }}
          />
        </Box>
      ))}
    </AutoPlaySwipeableViews>
  );
};

export default Carrousel;
