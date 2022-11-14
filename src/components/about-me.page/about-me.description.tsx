import AppearingContainer from "../appearing-container";
import "./about-me.description.sass";

const AboutMeDescription = () => {
  return (
    <div className="about-me__container description" id="description">
      <div className="about-me__title">About me</div>
      <div className="about-me__subtitle">
        <AppearingContainer time={1} offset={-300}>
          Frontend developer from Tver, Russia. <br />
          <br />
          I'm studying in TvSU on at the Faculty of Applied Mathematics and
          Cybernetics.
          <br />
          <br />I love programming.❤️
        </AppearingContainer>
      </div>
    </div>
  );
};

export default AboutMeDescription;
