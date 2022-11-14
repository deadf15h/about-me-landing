import AppearingContainer from "../appearing-container";
import iGagarinExample from "../../assets/img/portfolio-gagarin.png";
import iJachteeExample from "../../assets/img/portfolio-jachtee.png";
import "./about-me.portfolio.sass";

const AboutMePortfolio = () => {
  return (
    <div className="about-me__container description" id="portfolio">
      <div className="about-me__title">Portfolio</div>
      <AppearingContainer time={1} offset={-300}>
        <div className="portfolio__item">
          <img src={iGagarinExample} alt="" className="portfolio__img" />
          <a href="https://app.gagarin.world/" target="_blank">
            <div className="portfolio__title">GAGARIN Launchpad</div>
          </a>
        </div>
      </AppearingContainer>
      <AppearingContainer time={1} offset={-300}>
        <div className="portfolio__item">
          <img src={iJachteeExample} alt="" className="portfolio__img" />
          <a href="http://jachtee.net/" target="_blank">
            <div className="portfolio__title">Jachtee</div>
          </a>
        </div>
      </AppearingContainer>
    </div>
  );
};

export default AboutMePortfolio;
