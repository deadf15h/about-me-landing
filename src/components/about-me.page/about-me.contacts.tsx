import AppearingContainer from "../appearing-container";
import AboutMeContactsItem from "./about-me.contacts-item";
import iLinkedinLogo from "../../assets/img/linkedin-logo.png";
import iGithubLogo from "../../assets/img/github-logo.png";
import { Trans, useTranslation } from "react-i18next";
import "./about-me.contacts.sass";

const AboutMeContacts = () => {
	const { t } = useTranslation();

	return (
		<div className="about-me__container">
			<div className="contacts">
				<div className="about-me__title" id="contacts">
					{t("contacts")}
				</div>
				<AppearingContainer time={1} offset={-300}>
					<div className="about-me__subtitle contacts__subtitle">
						<Trans i18nKey="contactsSection.text">
							Want to know more or just chat? <br />
							You are welcome!
						</Trans>
					</div>
					<a
						href="https://t.me/thelogsamurai_feedback_bot"
						target="_blank"
						rel="noreferrer"
					>
						<div className="contacts__button">{t("Send message")}</div>
					</a>
					<div className="contacts__list">
						<AboutMeContactsItem
							socialNetworkLogo={iLinkedinLogo}
							socialNetworkLink="https://www.linkedin.com/in/nikolai-morozov-45864b220/"
						/>
						<AboutMeContactsItem
							socialNetworkLogo={iGithubLogo}
							socialNetworkLink="https://github.com/dalogsamurai"
						/>
					</div>
				</AppearingContainer>
			</div>
		</div>
	);
};

export default AboutMeContacts;
