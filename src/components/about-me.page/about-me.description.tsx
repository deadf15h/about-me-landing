import { Trans, useTranslation } from "react-i18next";
import AppearingContainer from "../appearing-container";
import "./about-me.description.sass";

const AboutMeDescription = () => {
  const { t } = useTranslation();

  return (
    <div className="about-me__container description" id="description">
      <div className="about-me__title">{t("about me")}</div>
      <div className="about-me__subtitle">
        <AppearingContainer time={1} offset={-300}>
          <Trans i18nKey="description.content">
            Frontend developer from Tver, Russia. <br />
            <br />
            I'm studying in TvSU on at the Faculty of Applied Mathematics and
            Cybernetics.
            <br />
            <br />I love programming.❤️
          </Trans>
        </AppearingContainer>
      </div>
    </div>
  );
};

export default AboutMeDescription;
