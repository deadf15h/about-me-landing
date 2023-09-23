import { FC } from "react";
import "./about-me.contacts-item.sass";

type Props = {
	socialNetworkLogo: any;
	socialNetworkLink: string;
};

const AboutMeContactsItem: FC<Props> = ({
	socialNetworkLogo,
	socialNetworkLink,
}) => {
	return (
		<a href={socialNetworkLink} target="_blank" rel="noreferrer">
			<div className="contacts-item">
				<img src={socialNetworkLogo} alt="" className="contacts-item__logo" />
			</div>
		</a>
	);
};

export default AboutMeContactsItem;
