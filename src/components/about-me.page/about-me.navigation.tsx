import { useTranslation } from "react-i18next";
import "./about-me.navigation.sass";

const AboutMeNavigation = () => {
  const goTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // const { t } = useTranslation();

  return (
    <div className="navigation">
      <div className="navigation__item" onClick={() => goTo("#home")}>
        home
      </div>
      <div className="navigation__item" onClick={() => goTo("#description")}>
        about me
      </div>
      <div className="navigation__item" onClick={() => goTo("#skills")}>
        skills
      </div>
      <div className="navigation__item" onClick={() => goTo("#portfolio")}>
        portfolio
      </div>
      <div className="navigation__item" onClick={() => goTo("#contacts")}>
        contacts
      </div>
    </div>
  );
};

export default AboutMeNavigation;
