import React from "react";
import Menu from "../component/menu";
import { useNavigate } from "react-router-dom";
import Languageoption from "../component/language-dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Contactus = () => {
  const history = useNavigate();
  const handleRedirect = () => {
    history("/aboutus");
  };
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <Menu />
      <Languageoption onChange={(e) => handleClick(e)} />
      <h1>
        {t("welcome")} {t("contact")} || Asad {t("holiday")} Developer
      </h1>
      <input />
      <button onClick={handleRedirect}>Submit</button>
    </div>
  );
};
export default Contactus;
