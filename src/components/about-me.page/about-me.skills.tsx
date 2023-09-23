import iTypescriptLogo from "../../assets/img/typescript-logo.jpg";
import iReactLogo from "../../assets/img/react-logo.jpg";
import iSassLogo from "../../assets/img/sass-logo.jpg";
import iGitLogo from "../../assets/img/git-logo.png";
import iOopLogo from "../../assets/img/oop-logo.png";
import iLinuxLogo from "../../assets/img/linux-logo.jpg";
import AppearingContainer from "../appearing-container";
import AboutMeSkillItem from "./about-me.skill-item";
import { useTranslation } from "react-i18next";
import "./about-me.skills.sass";

const AboutMeSkills = () => {
	const { t } = useTranslation();

	return (
		<div className="about-me__container">
			<div className="skills">
				<div className="about-me__title" id="skills">
					{t("skills")}
				</div>
				<div className="about-me__subtitle skills__subtitle">
					{t("My stack")}
				</div>
				<AppearingContainer time={1} offset={-300}>
					<div className="skills__box">
						<AboutMeSkillItem
							skillLogo={iTypescriptLogo}
							skillTitle="Typescript"
						/>
						<AboutMeSkillItem skillLogo={iReactLogo} skillTitle="React" />
						<AboutMeSkillItem skillLogo={iSassLogo} skillTitle="SASS" />
						<AboutMeSkillItem skillLogo={iGitLogo} skillTitle="Git" />
						<AboutMeSkillItem skillLogo={iLinuxLogo} skillTitle="Linux" />
						<AboutMeSkillItem skillLogo={iOopLogo} skillTitle="OOP" />
					</div>
				</AppearingContainer>
			</div>
		</div>
	);
};

export default AboutMeSkills;
