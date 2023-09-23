import { FC } from "react";
import "./about-me.skill-item.sass";

type Props = {
	skillLogo: any;
	skillTitle: string;
};

const AboutMeSkillItem: FC<Props> = ({ skillLogo, skillTitle }) => {
	return (
		<div className="skill-item">
			<div className="skill-item__img">
				<img src={skillLogo} alt="" className="skill-item__logo" />
			</div>
			<div className="skill-item__title">{skillTitle}</div>
		</div>
	);
};

export default AboutMeSkillItem;
