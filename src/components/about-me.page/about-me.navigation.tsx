import { useTranslation } from "react-i18next";
import "./about-me.navigation.sass";

const AboutMeNavigation = () => {
  const goTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const { t } = useTranslation();

  return (
    <div className="navigation">
      <div className="navigation__item" onClick={() => goTo("#home")}>
        {t("home")}
      </div>
      <div className="navigation__item" onClick={() => goTo("#description")}>
        {t("about me")}
      </div>
      <div className="navigation__item" onClick={() => goTo("#skills")}>
        {t("skills")}
      </div>
      <div className="navigation__item" onClick={() => goTo("#portfolio")}>
        {t("portfolio")}
      </div>
      <div className="navigation__item" onClick={() => goTo("#contacts")}>
        {t("contacts")}
      </div>
    </div>
  );
};

export default AboutMeNavigation;
