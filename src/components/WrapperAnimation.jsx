import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import TransitionLine from "./TransitionLine";

function WrapperAnimation({ children }) {
  const location = useLocation();
  const showLine =
    location.pathname === "/projects" || location.pathname === "/contact";

  return (
    <>
      {showLine && <TransitionLine />}

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 50 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: 1.2, // espera a que termine la animación de las barras
        }}
        style={{
          position: "relative",
          zIndex: 10,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

export default WrapperAnimation;
