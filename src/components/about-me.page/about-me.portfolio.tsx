import iGagarinExample from "../../assets/img/portfolio-gagarin.png";
import iGagarinLogo from "../../assets/img/gagarin-logo.svg";
import iKopidooAppExample from "../../assets/img/kopidoo-app-portfolio.png";
import iKopidooPublicExample from "../../assets/img/kopidoo-public-portfolio.png";
import iKopidooJournalExample from "../../assets/img/kopidoo-journal-portfolio.png";
import iKopidooLogo from "../../assets/img/kopidoo-logo.svg";
import iMULogo from "../../assets/img/mu-logo.svg";
import AboutMePortfolioItem from "./about-me.portfolio-item.component";
import { useTranslation } from "react-i18next";
import "./about-me.portfolio.sass";

const AboutMePortfolio = () => {
	const { t } = useTranslation();

	return (
		<div className="about-me__container description" id="portfolio">
			<div className="about-me__title">{t("portfolio")}</div>
			<AboutMePortfolioItem
				projectTitle="GAGARIN Launchpad"
				projectExample={iGagarinExample}
				projectLogo={iGagarinLogo}
				projectLink="https://app.gagarin.world/"
			/>
			<AboutMePortfolioItem
				projectTitle="Kopidoo App"
				projectExample={iKopidooAppExample}
				projectLogo={iKopidooLogo}
				projectLink="https://app.kopidoo.ru/"
			/>
			<AboutMePortfolioItem
				projectTitle="Kopidoo Public Site"
				projectExample={iKopidooPublicExample}
				projectLogo={iKopidooLogo}
				projectLink="https://kopidoo.ru/"
			/>
			<AboutMePortfolioItem
				projectTitle="Kopidoo Journal"
				projectExample={iKopidooJournalExample}
				projectLogo={iKopidooLogo}
				projectLink="https://journal.kopidoo.ru/"
			/>
			<AboutMePortfolioItem
				projectTitle="Моя Удаленка"
				projectExample={iKopidooJournalExample}
				projectLogo={iMULogo}
				projectLink="https://moyaudalenka.ru/"
			/>
		</div>
	);
};

export default AboutMePortfolio;
