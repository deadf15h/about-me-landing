import iTypescriptLogo from "../../assets/img/typescript-logo.jpg";
import iReactLogo from "../../assets/img/react-logo.jpg";
import iSassLogo from "../../assets/img/sass-logo.jpg";
import AppearingContainer from "../appearing-container";
import AboutMeSkillItem from "./about-me.skill-item";
import "./about-me.skills.sass";

const AboutMeSkills = () => {
  return (
    <div className="about-me__container">
      <div className="skills">
        <div className="about-me__title" id="skills">
          Skills
        </div>
        <div className="about-me__subtitle skills__subtitle">My stack</div>
        <AppearingContainer time={1} offset={-300}>
          <div className="skills__box">
            <AboutMeSkillItem
              skillLogo={iTypescriptLogo}
              skillTitle="Typescript"
              skillRate={4}
            />
            <AboutMeSkillItem
              skillLogo={iReactLogo}
              skillTitle="React"
              skillRate={3}
            />
            <AboutMeSkillItem
              skillLogo={iSassLogo}
              skillTitle="SASS"
              skillRate={4}
            />
          </div>
        </AppearingContainer>
      </div>
    </div>
  );
};

export default AboutMeSkills;
