import { FC } from "react";
import AboutMeRate from "./about-me.rate";
import "./about-me.skill-item.sass";

type Props = {
  skillLogo: any;
  skillTitle: string;
  skillRate: number;
};

const AboutMeSkillItem: FC<Props> = ({ skillLogo, skillRate, skillTitle }) => {
  return (
    <div className="skill-item">
      <div className="skill-item__img">
        <img src={skillLogo} alt="" className="skill-item__logo" />
      </div>
      <div className="skill-item__title">{skillTitle}</div>
      <div className="skill-item__rate">
        <AboutMeRate rate={skillRate} />
      </div>
    </div>
  );
};

export default AboutMeSkillItem;
