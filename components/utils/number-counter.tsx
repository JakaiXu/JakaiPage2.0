import React from "react";
import { useSpring, animated } from "react-spring";
function NumberCounter({ finalNumber }: { finalNumber: number }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: finalNumber,
    delay: 200,
    config: {
      mass: 1,
      tension: 100,
      friciton: 1,
    },
  });

  return <animated.text>{number.to((n) => n.toFixed(0))}</animated.text>;
}

export default NumberCounter;
