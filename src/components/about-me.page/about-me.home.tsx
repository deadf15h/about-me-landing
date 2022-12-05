import iPortfolio from "../../assets/img/photo_for_portfolio.jpg";
import iPortfolioMobile from "../../assets/img/photo_for_portfolio_mobile.jpg";
import iMoon from "../../assets/img/moon.svg";
import { Trans, useTranslation } from "react-i18next";
import cn from "classnames";
import { useWidth } from "../../hooks/use-width";
import "./about-me.home.sass";

const AboutMeHome = () => {
  const { i18n } = useTranslation();
  const { isDesktopWidth } = useWidth();

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
        {isDesktopWidth && (
          <div className="home__item_special">
            <div
              className={cn("home__lang", { _active: i18n.language === "ru" })}
              onClick={() => {
                i18n.changeLanguage("ru");
              }}
            >
              RU
            </div>
            |
            <div
              className={cn("home__lang", { _active: i18n.language === "en" })}
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              EN
            </div>
            <img src={iMoon} alt="" className="home__theme" />
          </div>
        )}
      </div>
      <div className="home__img">
        <img
          src={isDesktopWidth ? iPortfolio : iPortfolioMobile}
          alt=""
          className="home__img_photo"
        />
      </div>
    </div>
  );
};

export default AboutMeHome;
