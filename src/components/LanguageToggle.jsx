import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage} className="lang-toggle">
      {i18n.language === "es" ? "EN" : "ES"}
    </button>
  );
};

export default LanguageToggle;
