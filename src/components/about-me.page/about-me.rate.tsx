import { FC, useState } from "react";
import RateStar from "./about-me.rate-star";

type Props = {
	rate: number;
};

const createArray = (length: number) => [...Array(length)];

const AboutMeRate: FC<Props> = ({ rate }) => {
	const [selectedStars] = useState(rate);
	return (
		<>
			{createArray(5).map((n, i) => (
				<RateStar key={i} selected={selectedStars > i} />
			))}
		</>
	);
};

export default AboutMeRate;
