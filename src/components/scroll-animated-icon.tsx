"use client";

import { motion } from "framer-motion";

export default function ScrollAnimatedIcon() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      style={{ width: "24px", height: "40px" }}
    >
      <svg
        className="w-full h-full text-zinc-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="22"
          height="38"
          rx="11"
          stroke="currentColor"
          strokeWidth="2"
        />
        <motion.circle
          cx="12"
          cy="10"
          r="3"
          fill="currentColor"
          animate={{
            cy: [10, 10, 30],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.2, 1],
          }}
        />
      </svg>
    </motion.div>
  );
}
