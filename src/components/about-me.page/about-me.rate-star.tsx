import iStartNotActive from "../../assets/img/star-not-active.svg";
import iStartActive from "../../assets/img/star-active.svg";

const RateStar = ({ selected = false }) => {
	return (
		<img
			src={selected ? iStartActive : iStartNotActive}
			alt=""
			className="rate-star"
		/>
	);
};

export default RateStar;
