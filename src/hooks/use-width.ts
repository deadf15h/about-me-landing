import { useMemo } from "react";

export const useWidth = () => {
	const mobileWidth = 920;
	const screenWidth = window.screen.width;

	const views = {
		isMobileWidth: false,
		isDesktopWidth: false,
	};
	if (screenWidth <= mobileWidth) {
		return { ...views, isMobileWidth: true };
	} else return { ...views, isDesktopWidth: true };
};
