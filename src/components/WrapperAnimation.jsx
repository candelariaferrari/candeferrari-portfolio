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
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{
    duration: 0.4,
    ease: "easeOut",
    delay: 1.2,
  }}
>
  {children}
</motion.div>
    </>
  );
}

export default WrapperAnimation;
