import React, { ReactNode } from "react";
import { motion } from "framer-motion";
function MotionContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1, y:'30vh' }}
      animate={{ opacity: 1, scale: 1, y:0  }}
      transition={{
        type: "spring",
        stiffness: 20,
        duration: 1,
        delay: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}

export default MotionContainer;
