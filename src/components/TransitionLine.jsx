import { motion } from "framer-motion";

function TransitionLine() {
  return (
    <>
    {/* Barra 1: de izquierda a derecha */}
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{
        x: ["-100%", "0%", "100%"],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }} 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#212121",
        zIndex: 9998,
      }}
    />
      {/* Barra 2: de derecha a izquierda */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{
          x: ["100%", "0%", "-100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          delay: 0.1,
        }}
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#FFB300",
            zIndex: 9999,
          }}
        />
      </>
    
  );
}

export default TransitionLine;
