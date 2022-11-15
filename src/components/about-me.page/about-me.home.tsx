import iPortfolio from "../../assets/img/photo_for_portfolio.jpg";
import { Trans, useTranslation } from "react-i18next";
import cn from "classnames";
import "./about-me.home.sass";

const AboutMeHome = () => {
  const { i18n } = useTranslation();

  return (
    <div className="home" id="home">
      <div className="home__box">
        <div className="home__item_name">
          <Trans i18nKey="homeSection.name">
            Nikolai
            <br />
            Morozov
          </Trans>
        </div>
        <div className="home__item_work">
          <Trans i18nKey="homeSection.about">
            Frontend Developer
            <br />
            21 years old, Tver
          </Trans>
        </div>
        <div className="home__item_special">
          <div
            // className="home__lang"
            className={cn("home__lang", { _active: i18n.language === "ru" })}
            onClick={() => {
              i18n.changeLanguage("ru");
            }}
          >
            RU
          </div>
          |
          <div
            // className="home__lang"
            className={cn("home__lang", { _active: i18n.language === "en" })}
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            EN
          </div>
        </div>
      </div>
      <div className="home__img">
        <img src={iPortfolio} alt="" className="home__img_photo" />
      </div>
    </div>
  );
};

export default AboutMeHome;
