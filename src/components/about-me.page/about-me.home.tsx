import { useState } from "react";
import iPortfolio from "../../assets/img/photo_for_portfolio.jpg";
import "./about-me.home.sass";

const AboutMeHome = () => {
  const [language, setLanguage] = useState("en");
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
          <div className="home__lang" onClick={() => setLanguage("ru")}>
            RU
          </div>
          |
          <div className="home__lang" onClick={() => setLanguage("en")}>
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
