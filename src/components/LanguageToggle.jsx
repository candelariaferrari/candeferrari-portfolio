import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";


const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="button-lang-toggle"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i18n.language}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {i18n.language === "en" ? "Español" : "English"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default LanguageToggle;
