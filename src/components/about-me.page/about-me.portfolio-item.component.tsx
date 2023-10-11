import { useWidth } from "../../hooks/use-width";
import AppearingContainer from "../appearing-container";
import "./about-me.portfolio-item.component.sass";

interface Props {
	projectExample: string;
	projectLogo: string;
	projectTitle: string;
	projectLink: string;
}

const AboutMePortfolioItem = ({
	projectTitle,
	projectExample,
	projectLogo,
	projectLink,
}: Props) => {
	const { isMobileWidth } = useWidth();

	return (
		<AppearingContainer time={1} offset={-300}>
			<div className="portfolio__item">
				<img
					src={isMobileWidth ? projectLogo : projectExample}
					alt=""
					className="portfolio__img"
				/>
				<a href={`${projectLink}`} target="_blank" rel="noreferrer">
					<div className="portfolio__title">{projectTitle}</div>
				</a>
			</div>
		</AppearingContainer>
	);
};

export default AboutMePortfolioItem;
