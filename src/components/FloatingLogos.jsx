import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiPhp,
  SiMysql,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const icons = [
  { id: 1, icon: <SiJavascript color="#f7df1e" size={50} /> },
  { id: 2, icon: <SiReact color="#61DBFB" size={50} /> },
  { id: 3, icon: <SiPhp color="#777BB4" size={50} /> },
  { id: 4, icon: <SiMysql color="#00758F" size={50} /> },
  { id: 5, icon: <SiHtml5 color="#E34F26" size={50} /> },
  { id: 6, icon: <SiCss3 color="#1572B6" size={50} /> },
];

export default function FloatingLogos() {
  return (
    <div className="floating-logos">
      {icons.map((item) => (
        <motion.div
          key={item.id}
          className="floating-icon"
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            position: "absolute",
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 90}%`,
            opacity: 0.9,
            pointerEvents: "none",
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
}
