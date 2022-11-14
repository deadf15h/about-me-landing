import { useState } from "react";
import iPortfolio from "../../assets/img/photo_for_portfolio.jpg";
import { useTranslation } from "react-i18next";
import "./about-me.home.sass";

const AboutMeHome = () => {
  const { i18n } = useTranslation();

  return (
    <div className="home" id="home">
      <div className="home__box">
        <div className="home__item_name">
          Nikolai
          <br />
          Morozov
        </div>
        <div className="home__item_work">
          Frontend Developer
          <br />
          21 years old, Tver
        </div>
        <div className="home__item_special">
          <div
            className="home__lang"
            onClick={() => {
              i18n.changeLanguage("ru");
              console.log(i18n.language);
            }}
          >
            RU
          </div>
          |
          <div
            className="home__lang"
            onClick={() => {
              i18n.changeLanguage("en");
              console.log(i18n.language);
            }}
          >
            EN
          </div>
          {/* TODO */}
        </div>
      </div>
      <div className="home__img">
        <img src={iPortfolio} alt="" className="home__img_photo" />
      </div>
    </div>
  );
};

export default AboutMeHome;
